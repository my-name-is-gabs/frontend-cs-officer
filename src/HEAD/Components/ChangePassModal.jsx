import { useState } from "react";
import axios from "../../api/api_connection";

const ChangePassModal = () => {
  const [passwordCred, setPassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(passwordCred);

    if (passwordCred.new_password !== passwordCred.confirm_password) {
      alert("password mismatch");
      return;
    }

    try {
      const res = await axios.patch(
        "/accounts/change-password/",
        JSON.stringify(passwordCred)
      );
      if (res.status === 200) {
        alert("Password changed successfully");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="modal fade"
      id="changePasswordModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="changePasswordModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-secondary bg-gradient">
            <h1
              className="modal-title text-white fs-5"
              id="changePasswordModalLabel"
            >
              Change Password
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-* my-2">
                <label htmlFor="firstname" className="form-label fw-bold">
                  Old password:
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control bg-light-subtle"
                  onChange={(e) =>
                    setPassword({
                      ...passwordCred,
                      old_password: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-* my-2">
                <label htmlFor="middlename" className="form-label fw-bold">
                  New password:
                </label>
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  className="form-control bg-light-subtle"
                  onChange={(e) =>
                    setPassword({
                      ...passwordCred,
                      new_password: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-* my-2">
                <label htmlFor="lastname" className="form-label fw-bold">
                  Re-enter new password:
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control bg-light-subtle"
                  onChange={(e) =>
                    setPassword({
                      ...passwordCred,
                      confirm_password: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassModal;
