import { useState, useContext } from "react";
import { SubmitButton } from "../components";
import AuthContext from "../context/AuthContext";
import LoadingPage from "../LoadingPage";

import "./login.css";

const Login = () => {
  const { handleAdminLogin, error, isLoading } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      {isLoading && <LoadingPage />}
      <div className="login-page_container">
        <aside className="login-page_sidebar">
          <div className="login-page_header">
            <img src="/assets/img/logo_degree.png" alt="Logo" />
            <div className="d-block text-white">
              <h3 className="fw-bold head-title">ABC City</h3>
              <p className="fs-5">Scholarship Programs</p>
            </div>
          </div>
          <div className="display-6 fw-bold text-white p-4 mt-4">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
          </div>
        </aside>
        <main className="login-page_main">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form
            className="login-page_form_container shadow"
            onSubmit={handleAdminLogin}
            method="post"
          >
            <h1 className="fw-bold fs-2 mt-5 text-center">
              Welcome to Centro Secretariat <br /> Admin Page
            </h1>
            <div className="mt-5">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                type="text"
                className="form-control rounded login-border-primary"
                id="username"
                name="admin_username"
                autoComplete="off"
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control rounded login-border-primary"
                id="password"
                name="admin_password"
                required
              />
            </div>
            <div className="mt-4 mb-5">
              <input
                className="form-check-input border border-1 border-dark"
                type="checkbox"
                id="showPassord"
                onClick={() => setShowPass(!showPass)}
              />
              <label className="form-check-label ms-2" htmlFor="showPassord">
                Show Password
              </label>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <SubmitButton>Login</SubmitButton>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
