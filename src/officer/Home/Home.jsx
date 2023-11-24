import Modal from "../Components/Modal";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-end h-100">
            <div className="container input-group">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="search"
                name="search_field"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="type" className="form-label">
            Scholar filter
          </label>
          <select name="type" id="type" className="form-select">
            <option value="1">Scholar Option 1</option>
            <option value="1">Scholar Option 2</option>
            <option value="1">Scholar Option 3</option>
          </select>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <div className="container d-flex justify-content-between">
            <div className="d-inline-flex gap-2 align-items-center">
              <img src="/assets/icons/folder.png" alt="folder" />
              <h5 className="fw-bold">Applicant Records</h5>
            </div>
            <div className="d-inline-flex gap-5 justify-content-around align-items-center">
              <h6>
                Remaining: <strong>60</strong>
              </h6>
              <h6>Current Page: 2</h6>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover w-100">
            <thead>
              <th scope="col">Applicant ID</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Applying for Semester</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>John Doe</td>
                <td>jd@gmail.com</td>
                <td>second</td>
                <td>pending</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#officerModal"
                  >
                    View <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FORM */}
      <Modal />
    </>
  );
};

export default Home;
