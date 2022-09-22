import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header/index";
import Profile from "../components/Profile/Profile";
import Feed from "../components/Feed";
import "../utils/style/Dashboard.scss";

function Dashboard() {
  // redirection vers page d'acceuil si user logout
  const token = localStorage.getItem("token");
  if (!token) {
    toast.info("Au revoir");
    return <Navigate to="/login" />;
  }
  return (
    <div className="main-div">
      <div className="Dashboard">
        <div className="header">
          <Header />
        </div>
        <div className="first-block">
          <div className="Profil-Card">
            <Profile />
          </div>

          <div className="Feed">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
