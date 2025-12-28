import React, { useState } from "react";
import { API } from "../api/api";
import "../styles/dashboard.css";

function Phishing() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    const res = await API.post("/detect/phishing", { text });
    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="dashboard-page">
      <h2>Phishing Detection</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste message..."
      />

      <button onClick={analyze}>Analyze</button>

      {loading && <p>Analyzing...</p>}

      {result && (
        <div className="result-card">
          <p><b>Risk:</b> {result.risk}</p>
          <p><b>Score:</b> {result.score}</p>
        </div>
      )}
    </div>
  );
}

export default Phishing;
