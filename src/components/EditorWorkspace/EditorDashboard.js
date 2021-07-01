import React from "react";
import { Link } from "react-router-dom";

const EditorDashboard = () => {
  return (
    <div className="card-header">
      <h4>Editor Dashboard</h4>
      <div className="">
        <div className="row" style={{ marginLeft: "5%", marginTop: "15%" }}>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card-body"
                className="shadow p-3 mb-5 bg-body rounded"
              >
                <h3 className="card-title">Keynote Speakers</h3>
                <p className="card-text">Manage Keynote Speaker Details</p>
                <Link to="/editor/addSpeaker" className="btn btn-primary">
                  Add Speakers
                </Link>
                <Link to="/editor/viewSpeaker" className="btn btn-success">
                  View Speakers
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div
                className="card-body"
                className="shadow p-3 mb-5 bg-body rounded"
              >
                <h3 className="card-title">Conference News</h3>
                <p className="card-text">Manage conference news details</p>
                <Link to="/editor/addNews2" className="btn btn-primary">
                  Add News
                </Link>
                <Link to="/editor/viewNews" className="btn btn-success">
                  View News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorDashboard;
