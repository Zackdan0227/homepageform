import { useEffect, useState } from "react";
import { FormData } from "../model/formData";

const HistoryList = () => {
  const [history, setHistory] = useState<FormData[]>([]);

  useEffect(() => {
    const storedHistory: FormData[] = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(storedHistory);
  }, []);

  return (
    <div className="border-t pt-3">
      <h3 className="font-bold text-lg mb-2">Past Form Submissions:</h3>
      {history.length > 0 ? (
        <ul className="space-y-3">
          {history.map((item) => (
            <li key={item.id} className="p-3 border rounded-md shadow-md">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Date of Birth:</strong> {item.dob}</p>
              <p><strong>Smoking Status:</strong> {item.smokeStatus}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No form submissions yet.</p>
      )}
    </div>
  );
};

export default HistoryList;
