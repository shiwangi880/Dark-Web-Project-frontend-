import React from "react";
import "../styles/global.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <span className="brand">FraudDetect</span>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="profile">
        <img src="https://i.pravatar.cc/40" alt="profile" />
        <span className="profile-name">Analyst</span>
      </div>
    </div>
  );
};

export default TopNavbar;
