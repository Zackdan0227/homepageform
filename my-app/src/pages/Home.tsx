import { useNavigate } from "react-router-dom";
import HistoryList from "../components/HistoryList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-between p-5">
      {/* Navigation Button */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md self-start"
        onClick={() => navigate("/form")}
      >
        Go to Form
      </button>

      {/* Past History List */}
      <HistoryList />
    </div>
  );
};

export default Home;
