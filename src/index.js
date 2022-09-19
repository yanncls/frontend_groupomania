import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import "../src/utils/style/index.scss";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Error from "./components/Error/NotFoundPage";
import Create from "./pages/Create";
import Modify from "./pages/Modify";
import "normalize.css";
import "./utils/style/global.css";
import { AuthProvider } from "./context/AuthProvider";
import HideImageContextProvider from "./context/HideImageContext";

// const Profil = () => <h1>Profil (Private)</h1>;
// const Dashboard = () => <h1>Dashboard (Private)</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="font-link">
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/create" element={<Create />} />
          <Route path="/modify/:id" element={<Modify />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  </div>
);
