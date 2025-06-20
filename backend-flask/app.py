from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import logging
from sklearn.preprocessing import LabelEncoder

# Definisikan CustomLabelEncoder agar bisa menangani nilai yang tidak dikenal
class CustomLabelEncoder(LabelEncoder):
    def __init__(self, unknown_value=None):
        super().__init__()
        self.unknown_value = unknown_value

    def fit(self, y):
        # Jika unknown_value belum ada di kelas, tambahkan
        if self.unknown_value is not None and self.unknown_value not in y:
            y = np.append(y, self.unknown_value)
        return super().fit(y)

    def transform(self, y):
        if not hasattr(self, 'classes_'):
            raise ValueError("Encoder belum di-fit. Panggil .fit() sebelum .transform().")

        # Pastikan semua nilai yang tidak dikenali dipetakan ke unknown_value
        unknown_index = super().transform([self.unknown_value])[0] if self.unknown_value in self.classes_ else -1
        transformed = []
        
        for val in y:
            if val in self.classes_:
                transformed.append(super().transform([val])[0])
            else:
                transformed.append(unknown_index)
        
        return np.array(transformed)

    def fit_transform(self, y):
        return self.fit(y).transform(y)


app = Flask(__name__)
CORS(app)

# Konfigurasi logging
logging.basicConfig(level=logging.INFO)

# Path model dan encoder
MODEL_PATH = "models/lgbm_mhealth4.pkl"
SCALER_PATH = "models/scaler_after_rfe.pkl"
ENCODER_PATH = "models/label_encoders.pkl"

# Load model, scaler, dan encoder
try:
    model = joblib.load(MODEL_PATH)
    scaler = joblib.load(SCALER_PATH)
    with open(ENCODER_PATH, "rb") as f:
        label_encoders = joblib.load(f)

    logging.info("Model, Scaler, dan Encoder berhasil dimuat.")
except Exception as e:
    logging.error(f"Error saat memuat model, scaler, atau encoder: {str(e)}")
    model, scaler, label_encoders = None, None, None

# Fitur yang digunakan saat training
NUMERIC_FEATURES = ['Age', 'Academic_Pressure', 'Cgpa', 'Study_Satisfaction', 'WrkStdy_Hours', 'Financial_Stress']
CATEGORICAL_FEATURES = ['Sleep_Duration', 'Dietary_Habits', 'Degree', 'Suicidal_Thoughts', 'Family_Mental_History']

def preprocess_data(data_df):
    try:
        logging.info(f"Data sebelum preprocessing: \n{data_df}")

        # Encoding categorical features
        for col in CATEGORICAL_FEATURES:
            if col in label_encoders:
                known_categories = label_encoders[col].classes_
                logging.info(f"Kategori asli yang dikenali untuk {col}: {known_categories}")

                if data_df[col].values[0] not in known_categories:
                    return None, f"Nilai '{data_df[col].values[0]}' pada fitur '{col}' tidak dikenali."

                data_df[col] = label_encoders[col].transform(data_df[col])
            else:
                return None, f"Encoder untuk fitur {col} tidak ditemukan."

        logging.info(f"Data setelah encoding: \n{data_df}")

        # Pastikan semua fitur ada
        expected_features = NUMERIC_FEATURES + CATEGORICAL_FEATURES
        missing_features = [f for f in expected_features if f not in data_df.columns]
        if missing_features:
            return None, f"Fitur yang hilang: {missing_features}"

        # Scaling numeric features
        data_df = scaler.transform(data_df)
        logging.info(f"Data setelah scaling sebelum masuk ke model: \n{data_df}")

        return data_df, None
    
    except Exception as e:
        logging.error(f"Error saat preprocessing: {str(e)}")
        return None, str(e)

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None or scaler is None or label_encoders is None:
        return jsonify({'status': 'error', 'message': 'Model atau encoder tidak berhasil dimuat.'}), 500

    try:
        data = request.get_json()
        logging.info(f"Request JSON diterima: {data}")

        data_df = pd.DataFrame([data])
        data_df, error = preprocess_data(data_df)

        if error:
            return jsonify({'status': 'error', 'message': error}), 400

        prediction = model.predict(data_df)[0]
        logging.info(f"Hasil prediksi: {prediction}")

        return jsonify({'status': 'success', 'prediction': int(prediction)})

    except Exception as e:
        logging.error(f"Error saat prediksi: {str(e)}")
        return jsonify({'status': 'error', 'message': 'Terjadi kesalahan pada server'}), 500

if __name__ == '__main__':
    app.run(debug=True)