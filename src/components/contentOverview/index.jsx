import React from "react";
import Tank from "../asset/overview.jpg";
import { useState } from "react";

const ContentOverview = () => {


  //untuk system====================================================
    const [isOn, setIsOn] = useState(false);
    const handleOnButtonClick = () => {
      setIsOn(true);
    }
    const handleOffButtonClick = () => {
      setIsOn(false);
    }


    // untuk mode ===================================================
    const[isAutoMode, setIsAutoMode] = useState(false);

    const handleAutoModeClick = () => {
      setIsAutoMode(true)
    }
    const handleManualModeClick = () => {
      setIsAutoMode(false)
    }

    //untuk valve ====================================================
    const [isValveOn, setIsValveOn] = useState(false)

    const handleOnValveClick = () => {
      setIsValveOn(true)
    }
    const handleOffValveClick = () => {
      setIsValveOn(false);
    }

      //untuk valve V2====================================================
      const [isValve2On, setIsValve2On] = useState(false)

      const handleOnValve2Click = () => {
        setIsValve2On(true)
      }
      const handleOffValve2Click = () => {
        setIsValve2On(false);
      }

          //untuk valve VD====================================================
          const [isValveVdOn, setIsValveVdOn] = useState(false)

          const handleOnValveVdClick = () => {
            setIsValveVdOn(true)
          }
          const handleOffValveVdClick = () => {
            setIsValveVdOn(false);
          }

                 //untuk Pump P1====================================================
                 const [isPumpP1On, setIsPumpP1On] = useState(false)

                 const handleOnPumpP1Click = () => {
                   setIsPumpP1On(true)
                 }
                 const handleOffPumpP1Click = () => {
                   setIsPumpP1On(false);
                 }

                 
                 //untuk Pump P2====================================================
                 const [isPumpP2On, setIsPumpP2On] = useState(false)

                 const handleOnPumpP2Click = () => {
                   setIsPumpP2On(true)
                 }
                 const handleOffPumpP2Click = () => {
                   setIsPumpP2On(false);
                 }


    
  return (
    <div>
      <div className="row">
        <div className="col m-1">
          <div>
            <div
            //   className="card-body bg-light text-center fs-4 fw-bold rounded"
            //   style={{ borderLeft: "5px solid #999" }}
            >
              <img src={Tank} alt="" style={{ width: 700 }} />

              <div className="card">
                <div className="card-body  bg-light rounded text-center">
                  <div className="row justify-content-center align-items-center text-center">
                    <div className="col fw-bold">SYSTEM</div>
                    <div className="col fw-bold">MODE</div>
                  </div>

                  <div className="row bg-info py-2">
                    <div className="col">
                      <div className="m-2 align-items-center justify-content-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="rounded" onClick={handleOffButtonClick} style={{ marginRight: 10 }}>
                          OFF
                        </button>
                        <span className= {isOn ? "dot_green" : "dot"}></span>
                      </div>
                      
                      </div>

                      <div className="d-flex align-items-center justify-content-center">
                        <button className="rounded" onClick={handleOnButtonClick} style={{ marginRight: 10 }}>
                          ON
                        </button>
                        <span className="dot_white"></span>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="rounded" onClick={handleAutoModeClick} style={{ marginRight: 10 }}>
                          AUTO
                        </button>
                        <span className={isAutoMode ? "dot_green" : "dot"}></span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <button className="rounded" onClick={handleManualModeClick} style={{ marginRight: 10 }}>
                          MANUAL
                        </button>
                        <span className={isAutoMode ? "dot" : "dot_green"}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col m-1">
          <div className="card">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              //   style={{ borderLeft: "5px solid #999" }}
            >
              <div className="card">
                <div className="card-header">MANUAL</div>
                <div className="card-body">
                  VALVE
                  <div className="row bg-info py-2">
                    <div className="col">
                      V1 <button className="rounded " onClick={handleOnValveClick}>ON</button>
                      <div className="m-2">
                      <span className= {isValveOn ? "dot_green" : "dot"}></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }} onClick={handleOffValveClick}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div className="col"  style={{ borderLeft: "5px solid #1250db" }}>
                      V2 <button className="rounded " onClick={handleOnValve2Click}>ON</button>
                      <div className="m-2">
                      <span className= {isValve2On ? "dot_green" : "dot"}></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }} onClick={handleOffValve2Click}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row bg-info py-2">
                  <div className="col"  >
                      VD <button className="rounded " onClick={handleOnValveVdClick}>ON</button>
                      <div className="m-2">
                      <span className= {isValveVdOn ? "dot_green" : "dot"}></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }} onClick={handleOffValveVdClick}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    ></div>
                  </div>
                  PUMP
                  <div className="row bg-info py-2">
                  <div className="col"  >
                      P1 <button className="rounded " onClick={handleOnPumpP1Click}>ON</button>
                      <div className="m-2">
                      <span className= {isPumpP1On ? "dot_green" : "dot"}></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }} onClick={handleOffPumpP1Click}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    >
                      P2 <button className="rounded " onClick={handleOnPumpP2Click}>ON</button>
                      <div className="m-2">
                      <span className= {isPumpP2On ? "dot_green" : "dot"}></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }} onClick={handleOffPumpP2Click}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOverview;
