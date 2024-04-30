import React from "react";
import { useNavigate } from "react-router-dom";

const FooterContent = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div
      className="mt-5 m-4 px-2 d-flex justify-content-end align-items-center gap-2 rounded  bg-light"
      style={{ borderBottom: "2px solid #2986cc" }}
    >
     <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/home")}>
        HOME
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/overview")}>
        OVERVIEW
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/settingparameter")}>
        SET PARAMETER
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/monitoringio")}>
        MONITOR I/O
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/temperature")}>
        CHART
      </button>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/alarm")}>
         ALARM
      </button>
      <div className="ms-auto">
        {/* <button type="button" className="btn btn-success m-2">
          SETTING
        </button> */}
      </div>
      <button type="button" className="btn btn-primary m-2" onClick={() => handleButtonClick("/")}>
     LOGOUT
      </button>
    </div>
  );
};

export default FooterContent;
