import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import OfficerBase from "./OFFICER/OfficerBase";
import PageNotFound from "./PageNotFound";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutingOfficer from "./utils/PrivateRoutingOfficer";
import ForgotPassword from "./forgot pass/ForgotPassword";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" index element={<Login />} />
          {/* Private Routing for scholar officer */}
          <Route element={<PrivateRoutingOfficer />}>
            <Route path="/officer" element={<OfficerBase />} />
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
