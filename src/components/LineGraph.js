import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const LineGraph = ({ listOfProducts }) => {

  const [graphData, setGraphData] = useState({
    labels: listOfProducts.map((data) => data.title),
    datasets: [
      {
        label: "Price",
        data: listOfProducts.map((data) => data.price),
      },
      {
        label: "Discounted Price",
        data: listOfProducts.map((data) => data.discountedPrice),
      },
    ],
  });

  return <Line data={graphData} />;
};

export default LineGraph;
