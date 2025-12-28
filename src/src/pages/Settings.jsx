import React, { useState } from "react";
import "../styles/settings.css";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [cardStyle, setCardStyle] = useState("rounded");

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <div className="settings-grid">

        {/* Preferences Card */}
        <div className="settings-card">
          <h3>Preferences</h3>

          <div className="field toggle-field">
            <label>Enable Notifications</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="field">
            <label>Card Style</label>
            <select value={cardStyle} onChange={(e) => setCardStyle(e.target.value)}>
              <option value="rounded">Rounded</option>
              <option value="square">Square</option>
              <option value="shadow">Shadow</option>
            </select>
          </div>

          <button className="save-btn">Save Preferences</button>
        </div>

        {/* About / Info Card */}
        <div className="settings-card">
          <h3>About</h3>
          <p>
            FraudDetect Dashboard v1.0  
            <br />
            Designed for monitoring and detecting fraudulent listings.
          </p>
          <button className="save-btn">Check for Updates</button>
        </div>

        {/* Theme Card */}
        <div className="settings-card">
          <h3>Theme Options</h3>
          <div className="field">
            <label>Sidebar Color</label>
            <input type="color" defaultValue="#0369a1" />
          </div>
          <div className="field">
            <label>Card Color</label>
            <input type="color" defaultValue="#ffffff" />
          </div>
          <button className="save-btn">Apply Theme</button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
