"use client";
import { useState } from "react";

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

  const InputField = ({ label, name, type, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-black mb-1">{label}</label>
      {type === "select" ? (
        <select
          className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-black"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );

  return (
    <div className="max-w-xl mx-20 sm:mx-14 justify-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-black font-main">Depression Risk Assessment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Age" name="Age" type="number" />
        <InputField label="CGPA" name="Cgpa" type="number" />
        <InputField label="Academic Pressure (0-5)" name="Academic_Pressure" type="number" />
        <InputField label="Study Satisfaction (0-5)" name="Study_Satisfaction" type="number" />
        <InputField label="Sleep Duration" name="Sleep_Duration" type="select" options={sleepDurationOptions} />
        <InputField label="Dietary Habits" name="Dietary_Habits" type="select" options={dietaryHabitsOptions} />
        <InputField label="Degree" name="Degree" type="select" options={degreeOptions} />
        <InputField label="Work/Study Hours per Day (0-12)" name="WrkStdy_Hours" type="number" />
        <InputField label="Financial Stress (1-5)" name="Financial_Stress" type="number" />
        <InputField label="Suicidal Thoughts" name="Suicidal_Thoughts" type="select" options={yesNoOptions} />
        <InputField label="Family Mental History" name="Family_Mental_History" type="select" options={yesNoOptions} />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 text-lg font-medium shadow-md"
          disabled={loading}
        >
          {loading ? "Processing..." : "Assess Depression Risk"}
        </button>
      </form>
      {result && (
        <div className={`mt-6 p-4 border rounded-lg shadow-md ${result.status === "error" ? "bg-red-50 border-red-500" : "bg-green-50 border-green-500"}` }>
          <h2 className="text-xl font-bold mb-3">Assessment Result</h2>
          {result.status === "success" ? (
            <p className="text-lg">Risk Level: {result.prediction === 1 ? "High Risk of Depression" : "Low Risk of Depression"}</p>
          ) : (
            <p className="text-red-500">{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DepressionForm;