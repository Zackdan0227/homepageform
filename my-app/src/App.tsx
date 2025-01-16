import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/formPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
