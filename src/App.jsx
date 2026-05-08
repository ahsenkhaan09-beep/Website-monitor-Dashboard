import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import AddWebsite from "./components/AddWebsite";
import WebsiteList from "./components/WebsiteList";
import SpeedCheck from "./components/SpeedCheck";
import EmailPanel from "./components/EmailPanel";
import AnalyticsChart from "./components/AnalyticsChart";
import ThemeToggle from "./components/ThemeToggle";

import Login from "./Login";
import Signup from "./Signup";


import "./Appp.css";



function Dashboard() {
  return (
    <div className="dashboard-grid">
      <WebsiteList />
      <AddWebsite />
      <SpeedCheck />
      <EmailPanel />
      <AnalyticsChart />
      <ThemeToggle />
    </div>
  );
}


function Analytics() {
  return (
    <div>
      <h2>Analytics Page</h2>
      <AnalyticsChart />
    </div>
  );
}



function Settings() {
  return (
    <div>
      <h2>Settings Page</h2>
      <ThemeToggle />
    </div>
  );
}



function DashboardLayout() {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-body">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}



export default function App() {
  return (
    <Routes>

     
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
    
      

    
      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/settings" element={<Settings />} />

      </Route>

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}