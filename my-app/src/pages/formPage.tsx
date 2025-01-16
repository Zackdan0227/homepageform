import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FormData } from "../model/formData";

const Form = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");

  // ✅ Make this async and use Axios for POST request
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Create the FormData object
    const formData: FormData = {
      id: crypto.randomUUID(), // Generate a unique ID
      name: name,
      dob: dateOfBirth,
      smokeStatus: smokingStatus,
    };

    try {
    //   const response = await axios.post("https://your-api-url.com/api/form", formData);

    //   if (response.status !== 200) {
    //     throw new Error("Failed to submit form data");
    //   }

      // Save locally as history (for demonstration)
      const history = JSON.parse(localStorage.getItem("history") || "[]");
      console.log(formData)
      history.push(formData);
      localStorage.setItem("history", JSON.stringify(history));

      // ✅ Navigate back to Home
      navigate("/home");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h2 className="text-2xl font-bold mb-4">Fill in the Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-md">
        {/* Name Input */}
        <label className="font-semibold">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter your name"
          required
        />

        {/* Date of Birth Input */}
        <label className="font-semibold">Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Smoking Status Input */}
        <label className="font-semibold">Smoking Status (Yes or No)</label>
        <input
          type="text"
          value={smokingStatus}
          onChange={(e) => setSmokingStatus(e.target.value)}
          className="border p-2 rounded"
          placeholder="Yes or No"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
