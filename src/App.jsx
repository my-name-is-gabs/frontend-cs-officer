import { Routes, Route } from "react-router-dom";
import HeadOfficerBase from "./HEAD/HeadOfficerBase";
// import Login from "./login/Login";
// import OfficerBase from "./officer/OfficerBase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<HeadOfficerBase />} />
      </Routes>
    </>
  );
}

export default App;
