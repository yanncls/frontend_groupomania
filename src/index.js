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
import Note from "./pages/Note";
import "normalize.css";
import "./utils/style/global.css";
import { AuthProvider } from "./context/AuthProvider";

// const Profil = () => <h1>Profil (Private)</h1>;
// const Dashboard = () => <h1>Dashboard (Private)</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="font-link">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Note/:id" element={<Note />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  </React.StrictMode>
);
