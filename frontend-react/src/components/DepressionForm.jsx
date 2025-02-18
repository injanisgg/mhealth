"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';

function DepressionForm() {
  const [formData, setFormData] = useState({
    Age: "",
    Academic_Pressure: "",
    Cgpa: "",
    Study_Satisfaction: "",
    Sleep_Duration: "",
    Dietary_Habits: "",
    Degree: "",
    Suicidal_Thoughts: "",
    WrkStdy_Hours: "",
    Financial_Stress: "",
    Family_Mental_History: "",
  });

  const sleepDurationOptions = [
    "Less than 5 hours",
    "5-6 hours",
    "7-8 hours",
    "More than 8 hours",
    "Others",
  ];
  const dietaryHabitsOptions = ["Healthy", "Moderate", "Unhealthy", "Others"];
  const degreeOptions = [
    "B.Pharm", "BSc", "BA", "BCA", "M.Tech", "PhD", "Class 12", "B.Ed", "LLB",
    "BE", "M.Ed", "MSc", "BHM", "M.Pharm", "MCA", "MA", "B.Com", "MD", "MBA",
    "MBBS", "M.Com", "B.Arch", "LLM", "B.Tech", "BBA", "ME", "MHM", "Others",
  ];
  const yesNoOptions = ["Yes", "No"];

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const processedData = {
      ...formData,
      Age: parseInt(formData.Age) || 0,
      Academic_Pressure: parseInt(formData.Academic_Pressure) || 0,
      Cgpa: parseFloat(formData.Cgpa) || 0,
      Study_Satisfaction: parseInt(formData.Study_Satisfaction) || 0,
      WrkStdy_Hours: parseInt(formData.WrkStdy_Hours) || 0,
      Financial_Stress: parseInt(formData.Financial_Stress) || 0,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedData),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ status: "error", message: "Terjadi kesalahan saat memproses prediksi" });
    }
    setLoading(false);
  };

  // Auto scroll ke bawah ketika result muncul
  useEffect(() => {
    if (result) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [result]);
  

  const InputField = ({ label, name, type, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-black ml-5 mb-1">{label}</label>
      {type === "select" ? (
        <select
          className="w-full py-3 px-4 border border-black rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        >
          <option value="" className="text-sm">Pilih {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="w-full py-3 px-4 border border-black rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 text-black"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );

  return (
    <div className="max-w-xl mx-20 sm:mx-10 flex flex-col justify-center p-4">
      <p className="text-black text-center font-main font-bold">Prediksi</p>
      <h1 className="text-2xl font-bold mb-6 text-center text-black font-main">Prediksi Resiko Depresi</h1>
      <form onSubmit={handleSubmit} className="space-y-4 font-main">
        <InputField label="Umur" name="Age" type="number" />
        <InputField label="IPK" name="Cgpa" type="number" />
        <InputField label="Tekanan Akademik (1-5)" name="Academic_Pressure" type="number" />
        <InputField label="Kepuasan Akademik (1-5)" name="Study_Satisfaction" type="number" />
        <InputField label="Durasi Tidur" name="Sleep_Duration" type="select" options={sleepDurationOptions} />
        <InputField label="Kebiasaan Makan" name="Dietary_Habits" type="select" options={dietaryHabitsOptions} />
        <InputField label="Gelar" name="Degree" type="select" options={degreeOptions} />
        <InputField label="Durasi Jam Bekerja/Belajar Perhari (0-12)" name="WrkStdy_Hours" type="number" />
        <InputField label="Stress Finansial (1-5)" name="Financial_Stress" type="number" />
        <InputField label="Pemikiran untuk Bunuh Diri" name="Suicidal_Thoughts" type="select" options={yesNoOptions} />
        <InputField label="Riwayat Kesehatan Mental dari Keluarga" name="Family_Mental_History" type="select" options={yesNoOptions} />
        <button
          type="submit"
          className="w-full bg-button text-white px-6 py-4 rounded-xl hover:bg-orange-600 disabled:bg-orange-300 text-lg font-medium shadow-md"
          disabled={loading}
        >
          {loading ? "Memprediksi..." : "Prediksi Resiko Depresi"}
        </button>
      </form>
      {result && (
        <div className={`mt-6 p-4 border rounded-xl shadow-md 
        ${result.status === "error" ? "bg-red-50 border-red-500" 
          : result.prediction === 1 ? "bg-button border-black" 
          : 'bg-gradient-to-r from-light-green to-thick-green'}` }>
          {result.status === "success" ? (
            <div className="flex flex-col justify-around text-center items-center text-white gap-5">
              <FontAwesomeIcon 
                icon={result.prediction === 1 ? faFaceFrown : faFaceLaughBeam} 
                className="text-yellow-400 text-6xl"
              />
              <p className='text-sm font-secondary'>{result.prediction === 1 ? "Mohon maaf hasil prediksi resiko depresi anda adalah" : "Selamat! Hasil prediksi resiko depresi anda adalah"}</p>
              <p className="text-xl font-bold font-main">{result.prediction === 1 ? 'Tinggi/Berpotensi memiliki depresi' : 'Rendah/Tidak berpotensi memiliki depresi'}</p>
            </div>
          ) : (
            <p className="text-red-500">{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DepressionForm;