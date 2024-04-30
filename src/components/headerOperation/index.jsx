import React from "react";
import CurrentDate from "../currentDate";
import Clock from "../clock";
import Logo from "../asset/logo.jpg";
import "./index.css";

import { UserOutlined } from "@ant-design/icons";

const HeaderOperation = () => {
  return (
    <div>
      <header className="container-fluid header-bg" style={{ paddingTop: 10 }}>
        <div className="row">
          <div className="col text-start d-flex alig-items-center">
            <img src={Logo} style={{ height: 40 }} alt="" />
            <span
              style={{ paddingTop: 0, paddingLeft: 20 }}
              className="text-white"
            >
              <CurrentDate />
              <Clock />
            </span>
          </div>
          <div className="col text-center">
            <p className="text-white fs-3 fw-bold">OPERATION</p>
          </div>
          <div className="col text-end">
            <UserOutlined
              style={{
                fontSize: "24px",
                width: "30px",
                height: "30px",
                paddingRight: 10,
                marginRight: 0,
              }}
            />
            Aji {""}
            <img
              src={Logo}
              style={{ height: 40, margin: 5 }}
              alt="Right Logo"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderOperation;
