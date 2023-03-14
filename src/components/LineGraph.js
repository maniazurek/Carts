import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const LineGraph = ({ listOfProducts }) => {
  console.log(listOfProducts);
  const [graphData, setGraphData] = useState({
    labels: listOfProducts.map((data) => data.title),
    datasets: [
      {
        label: "Prices",
        data: listOfProducts.map((data) => data.price),
      },
    ],
  });

  return <Line data={graphData} />;
};

export default LineGraph;
