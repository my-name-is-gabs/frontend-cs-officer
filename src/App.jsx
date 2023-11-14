import { Routes, Route } from "react-router-dom";
// import Login from "./login/Login";
import OfficerBase from "./officer/OfficerBase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<OfficerBase />} />
      </Routes>
    </>
  );
}

export default App;
