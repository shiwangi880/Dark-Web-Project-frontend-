import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "../styles/dashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

function Dashboard() {
  const [stats, setStats] = useState({
    total_listings: 0,
    listing_fraud: 0,
    phishing_fraud: 0,
    transaction_fraud: 0,
    total_fraud: 0,
  });

  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [recentListings, setRecentListings] = useState([]);

  const fetchDashboard = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  };

  const fetchChart = async () => {
    try {
      const res = await fetch("http://localhost:5000/chart-data");
      const data = await res.json();
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Risk Trend",
            data: data.data,
            borderColor: "#0369a1",        // professional blue
            backgroundColor: "rgba(224,242,254,0.5)", // light gradient fill
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } catch (err) {
      console.error("Chart fetch error:", err);
    }
  };

  const fetchListings = async () => {
    try {
      const res = await fetch("http://localhost:5000/listings");
      const data = await res.json();
      setRecentListings(data.slice(0, 5));
    } catch (err) {
      console.error("Listings fetch error:", err);
    }
  };

  useEffect(() => {
    const updateAll = () => {
      fetchDashboard();
      fetchChart();
      fetchListings();
    };
    updateAll();
    const interval = setInterval(updateAll, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page">
      <div className="summary-cards">
        <div className="card">
          <p>Total Listings</p>
          <h3>{stats.total_listings}</h3>
        </div>
        <div className="card">
          <p>Listing Frauds</p>
          <h3>{stats.listing_fraud}</h3>
        </div>
        <div className="card">
          <p>Phishing Frauds</p>
          <h3>{stats.phishing_fraud}</h3>
        </div>
        <div className="card">
          <p>Transaction Frauds</p>
          <h3>{stats.transaction_fraud}</h3>
        </div>
      </div>

      <div className="chart-card">
        <h2 className="welcome-text">Welcome, Analyst</h2>
        <h3>Fraud Trend</h3>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </div>

      <div className="table-card">
        <h3>Recent Listings</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Risk Score</th>
              <th>ML Prediction</th>
            </tr>
          </thead>
          <tbody>
            {recentListings.length === 0 ? (
              <tr><td colSpan="5" align="center">No data yet</td></tr>
            ) : (
              recentListings.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td className={`risk ${item.status.toLowerCase()}`}>{item.status}</td>
                  <td>{item.risk_score}</td>
                  <td className={`ml-prediction ${item.ml_prediction.toLowerCase()}`}>{item.ml_prediction}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
