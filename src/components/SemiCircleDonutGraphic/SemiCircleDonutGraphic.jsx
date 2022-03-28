import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SemiCircleDonutGraphic = ({ config }) => {
  return <HighchartsReact highcharts={Highcharts} options={config} />;
};

export default SemiCircleDonutGraphic;
