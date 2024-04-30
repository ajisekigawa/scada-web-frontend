import React from "react";
import ControlRoom from "../asset/ctrl.jpg";
import Crane from "../asset/pipagas.PNG";
import Cooling from "../asset/cooling.jpg";
import { useNavigate } from "react-router-dom";

const ContentHome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/overview");
  };

  return (
    <div
      className="container-fluid  justify-content-center "
      style={{ marginLeft: 10 }}
    >
      <div className="row w-100 justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div className="col">
            <div className="card h-100 shadow">
              <img
                src={ControlRoom}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ROOM CONTROLLER</h5>
                <p className="card-text">
                  MONITORING KONTROL TEMPERATUR RUANGAN
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary" onClick={handleButtonClick}>
                  RUNNING
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Crane}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">GAS CONTROLLER</h5>
                <p className="card-text">mONITORING KONTROL UTILITY GAS</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary" onClick={handleButtonClick}>
                  RUNNING
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Cooling}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">COOLING WATER SYSTEM</h5>
                <p className="card-text">
                  MONITORING KONTROL COOLING WATER SYSTEM
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary" onClick={handleButtonClick}>
                  RUNNING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
