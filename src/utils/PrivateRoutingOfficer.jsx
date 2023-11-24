import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoutingOfficer = () => {
  const { adminUser } = useContext(AuthContext);

  if (adminUser?.role === "OFFICER" && adminUser?.isActive) {
    return <Outlet />;
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.setItem("invalidAccess", "Invalid access, unauthorized user!");
    return <Navigate to="/" />;
  }
};

export default PrivateRoutingOfficer;
