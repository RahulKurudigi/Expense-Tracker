import "./Chart.css";

import React from "react";
import ChartBar from "./ChartBar";

export const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((data) => data.value); //Get all values type NUMBER
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
