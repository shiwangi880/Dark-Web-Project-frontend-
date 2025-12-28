import React from "react";
import "../styles/global.css";

const Sidebar = ({ setActivePage, activePage }) => {
  const menu = ["dashboard", "listing", "reports", "settings"];
  return (
    <div className="sidebar">
      <h2 className="logo">FraudDetect</h2>
      <ul>
        {menu.map((item) => (
          <li
            key={item}
            className={activePage === item ? "active" : ""}
            onClick={() => setActivePage(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;