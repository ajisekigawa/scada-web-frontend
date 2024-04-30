import React from "react";

const LayoutContent = ({ children }) => {
  return (
    <div
      className="container-fluid vh- d-flex align-items-center justify-content-center bg-light"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row">
        <div className="col">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default LayoutContent;
