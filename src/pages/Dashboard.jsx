import React from "react";
import Header from "../components/Header/index";
import "../utils/style/Dashboard.scss";
import Profile from "../components/Profile/Profile";
import Action from "../components/action_bar/Action";
import Feed from "../components/Feed";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Header />
      <div className="Dashboard">
        <div className="Profil-Card">
          <Profile />
        </div>
        <div className="Main-Card">
          {/* <div className="Publish-Card">
            <Action />
          </div> */}
          <div className="Feed">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
