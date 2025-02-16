from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import logging
from sklearn.preprocessing import LabelEncoder

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

        # Pastikan fitur kategori ada
        categorical_features = ['Sleep_Duration', 'Dietary_Habits', 'Suicidal_Thoughts', 'Family_Mental_History', 'Degree']
        for col in categorical_features:
            if col in label_encoders:
                # Pastikan semua kategori yang diberikan ada dalam encoder
                data_df[col] = data_df[col].map(lambda x: label_encoders[col].classes_.tolist().index(x) if x in label_encoders[col].classes_ else -1)
            else:
                return None, f"Encoder untuk fitur {col} tidak ditemukan"

        # Pastikan semua fitur ada
        expected_features = NUMERIC_FEATURES + CATEGORICAL_FEATURES
        missing_features = [f for f in expected_features if f not in data_df.columns]
        if missing_features:
            return None, f"Fitur yang hilang: {missing_features}"

        logging.info(f"Data setelah encoding: \n{data_df}")

        # Standarisasi numerik
        data_df = scaler.transform(data_df)
        logging.info(f"Data setelah scaling: \n{data_df}")

        return data_df, None

    except Exception as e:
        logging.error(f"Error saat preprocessing: {str(e)}")
        return None, str(e)

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None or scaler is None or label_encoders is None:
        return jsonify({'error': 'Model atau encoder tidak berhasil dimuat. Periksa kembali konfigurasi.'}), 500

    try:
        data = request.get_json()
        logging.info(f"Data JSON yang diterima: {data}")

        # Konversi ke DataFrame
        data_df = pd.DataFrame([data])

        # Periksa apakah semua fitur ada
        missing_keys = [key for key in NUMERIC_FEATURES + CATEGORICAL_FEATURES if key not in data]
        if missing_keys:
            logging.error(f"Fitur yang hilang dalam request: {missing_keys}")
            return jsonify({'error': f'Fitur yang hilang dalam request: {missing_keys}'}), 400

        # Preprocessing
        data_df, error = preprocess_data(data_df)
        if error:
            logging.error(f"Error preprocessing: {error}")
            return jsonify({'error': f'Error preprocessing: {error}'}), 400

        # Prediksi
        prediction = model.predict(data_df)[0]
        logging.info(f"Hasil prediksi: {prediction}")

        return jsonify({'prediction': int(prediction)})
    
    except Exception as e:
        logging.error(f"Error saat prediksi: {str(e)}")
        return jsonify({'error': 'Terjadi kesalahan pada server'}), 500

if __name__ == '__main__':
    app.run(debug=True)