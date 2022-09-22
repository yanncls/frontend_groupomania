import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header/index";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import MyFeed from "../components/MyFeed/MyFeed";
import "../utils/style/Profil.scss";

function Profil() {
  // states
  const [thisUser, setThisUser] = useState("");

  // redirection vers login page si logout
  const token = localStorage.getItem("token");
  if (!token) {
    toast.info("Au revoir");
    return <Navigate to="/login" />;
  }

  console.log(thisUser);

  return (
    <div>
      <Header />
      <div className="Dashboard">
        <div className="Profil-Card">
          <AccountInfo setThisUser={setThisUser} />
        </div>
        <div className="Main-Card">
          <div className="Feed">{/* <MyFeed /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
