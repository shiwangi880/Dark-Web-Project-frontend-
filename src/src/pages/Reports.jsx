import React from "react";
import {Pie, Bar} from "react-chartjs-2";
import{
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/reports.css"

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function Reports(){
    //-----------Pie chart data--------------
    const pieData = {
        labels: ["High Risk", "Medium Risk", "Low Risk"],
        datasets: [
            {
                data: [45, 35, 20],
                backgroundColor :["#ff6b6b", "#f6a623", "#4caf50"],
            },
        ],
    };

    //----------------Bar chart data---------------------
    const barData = {
        labels: ["Drak Web", "Telegram", "Forums"],
        datasets:[
            {
                labels: "Fraud Listings",
                data: [60, 30, 15],
                backgroundColor: "#6c63ff",
            },
        ],
    };

    return (
  <div className="reports-page">
    <h2>Fraud Analysis Report</h2>

    <div className="reports-grid">
      <div className="report-card">
        <h3>Risk Level Distribution</h3>
        <Pie data={pieData} />
      </div>

      <div className="report-card">
        <h3>Platform-wise Fraud</h3>
        <Bar data={barData} />
      </div>
    </div>

    <div className="report-summary">
      <h3>Summary</h3>
      <p>
        The analysis shows that a significant number of fraudulent listings
        originate from dark web platforms. High-risk listings form the
        majority, indicating the need for continuous monitoring and automated
        fraud detection using machine learning models.
      </p>
    </div>
  </div>
);
}

export default Reports;