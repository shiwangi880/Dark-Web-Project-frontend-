# Dark-Web-Fraud-Detection Dashboard (Frontend)

Dark-Web-Project is a **React-based admin dashboard** for monitoring and detecting fraudulent listings, phishing attempts, and suspicious transactions. The dashboard provides real-time analytics, charts, reports, and settings management for fraud detection.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [License](#license)  

---

## Features

- **Dashboard**: Real-time overview of listings and fraud statistics with interactive charts.  
- **Listings Page**: View, search, and filter all listings.  
- **Reports**: Visual representation of risk levels and platform-wise fraud.  
- **Phishing Detection**: Analyze messages for phishing risks.  
- **Transaction Fraud Detection**: Predict potential fraudulent transactions based on input.  
- **Settings**: Customize notifications, card styles, and themes.  
- Fully **responsive design** for desktop and mobile.

---

## Tech Stack

- **Frontend:**  
  - React.js (functional components & hooks)  
  - Axios (API requests)  
  - Chart.js (charts & graphs)  
  - CSS3 (custom styling, responsive layout)

---

## Project Structure
Dark-Web-Project
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── api.js # Axios instance & API calls
│ ├── components/
│ │ ├── Sidebar.jsx
│ │ └── TopNavbar.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── Listings.jsx
│ │ ├── Reports.jsx
│ │ ├── Settings.jsx
│ │ ├── Phishing.jsx
│ │ └── Transactions.jsx
│ ├── styles/
│ │ ├── dashboard.css
│ │ ├── global.css
│ │ ├── listings.css
│ │ ├── reports.css
│ │ └── settings.css
│ └── App.jsx
└── package.json


---

## Installation

1. Clone the repository:
git clone https://github.com/<your-username>/Dark-Web-Project(frontend).git
cd Dark-Web-Project(frontend)

2. Install dependencies:
npm install

3. Start the development server:
npm start

The app will run at http://localhost:3000. Make sure the backend server is running at http://localhost:5000.
---
---
## Usage

- Use the sidebar to navigate between Dashboard, Listings, Reports, and Settings.
- Search listings by title or status.
- View charts for trends and risk distribution.
- Detect phishing by pasting messages into the Phishing page.
- Detect transaction fraud by entering transaction details on the Transactions page.
- Update preferences and themes in the Settings page.
---
## API Endpoints (Frontend Integration)
**The frontend communicates with a backend API at http://localhost:5000. Endpoints used:**
Endpoint	          Method	          Description
/listings	            GET	          Fetch all listings
/dashboard	          GET	          Fetch dashboard statistics
/chart-data           GET         	Fetch chart data for trends
/detect/phishing	   POST	          Analyze phishing messages
/detect/transaction  	POST	        Analyze transaction fraud
/settings       	   GET            Fetch user settings
/settings         	 POST	          Update user settings

---
## License

This project is licensed under the MIT License.
---

This version is:  
- **Professional**: Structured for GitHub usage.  
- **Clear**: Explains frontend usage and setup without filler.  
- **Complete**: Includes tech stack, project structure, API endpoints, and navigation guidance.  

