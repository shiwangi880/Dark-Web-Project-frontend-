import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";

import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import "./styles/global.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <Dashboard />;
      case "listing": return <Listings />;
      case "reports": return <Reports />;
      case "settings": return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="main-content">
        <TopNavbar />
        <div className="page-content">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;
