import React from "react";
import HeaderTemperature from "../../components/headerTemperature";
import ContentTemperature from "../../components/contentTemperature";
import FooterContent from "../../components/footer";

const TemperatureTrend = () => {
  return (
    <div>
      <HeaderTemperature />
      <ContentTemperature />
      <FooterContent/>
    </div>
  );
};

export default TemperatureTrend;
