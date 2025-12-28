import React, { useState } from "react";
import { API } from "../api/api";
import "../styles/dashboard.css";

function Transactions() {
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await API.post("/detect/transaction", {
      amount: Number(amount),
      transactions_last_hour: Number(count),
      account_age_days: Number(age),
    });
    setResult(res.data);
  };

  return (
    <div className="dashboard-page">
      <h2>Transaction Fraud Detection</h2>

      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Tx count" onChange={(e) => setCount(e.target.value)} />
      <input placeholder="Account age" onChange={(e) => setAge(e.target.value)} />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div className="result-card">
          <p><b>Fraud:</b> {result.fraud ? "YES" : "NO"}</p>
          <p><b>Risk Score:</b> {result.risk_score}</p>
        </div>
      )}
    </div>
  );
}

export default Transactions;
