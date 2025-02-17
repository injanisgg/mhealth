from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd
import logging

app = Flask(__name__)
CORS(app)

# Konfigurasi logging
logging.basicConfig(level=logging.INFO)

# Path model dan encoder
MODEL_PATH = "models/lgbm_mhealth3.pkl"
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