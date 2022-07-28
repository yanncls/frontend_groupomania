import React from "react";
import "./Header.scss";
import ReactLogo from "../Header/icon-left-font-monochrome-white.svg";
import HomeLogo from "../Header/home_white.svg";
import ProfileLogo from "../Header/account_circle_white.svg";
import LogoutLogo from "../Header/logout_white.svg";

const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={ReactLogo} alt="React Logo" />
      </div>
      <div className="navlinks">
        <Link to="/dashboard" style={{ padding: "10px" }}>
          <img src={HomeLogo} alt="home" />
          Acceuil
        </Link>
        <Link to="/Profil" style={{ padding: "10px" }}>
          <img src={ProfileLogo} alt="profile" />
        </Link>
        <Link to="/" style={{ padding: "10px" }}>
          <img src={LogoutLogo} alt="logout" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
