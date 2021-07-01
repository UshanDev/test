import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeadmin">
      <div className="container mt-2" style={{ border: "1px solid black" }}>
        <center>
          <h1 style={{ fontSize: "1.5rem", color: "black" }}>
            Admin Dashboard
          </h1>
        </center>
      </div>
      <div className="container mt-5" style={{ border: "1px solid black" }}>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text">Pending Posts</h1>
                  <i className="fas fa-users fa-2x"></i>
                  <br />
                  <Link to="/admin/news">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text">Approved Posts</h1>
                  <i className="fas fa-user-check fa-2x"></i>
                  <br />
                  <Link to="/admin/approvednews">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text">Add Users</h1>
                  <i className="fas fa-user-plus fa-2x"></i>
                  <br />
                  <Link to="/admin/users">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text">Keynote Speakers</h1>
                  <i class="fas fa-user-shield fa-2x"></i>
                  <br />
                  <Link to="/admin/speakers">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <center>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div
                  className="container"
                  style={{ display: "inline-block", textAlign: "center" }}
                >
                  <h1 className="card-text fs-6">View Statistics</h1>
                  <i class="fas fa-chart-line fa-2x"></i>
                  <br />
                  <Link to="/admin/stats">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Home;
