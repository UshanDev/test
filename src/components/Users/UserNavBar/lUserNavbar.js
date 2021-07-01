import React from "react";

const lUserNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          CMS
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/sign-up">
                Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/downloads/dashboard">
                Downloads
              </a>
            </li>
            <li className="nav-item" style={{ marginLeft: "900px" }}>
              <a className="nav-link" href="/login">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default lUserNavbar;
