import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";
const Chart = (props) => {
  // We will return a div with the chartbar components
  // When we add different properties of a component, in another components
  // we must pass down the props to the original component as well, otherwise it will not work
  // This is because we are expecting those components.

  // Extracting values as an array
  const dataPointValues = props.points.map((point) => point.value);

  // Find the max value out of all individual values
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
