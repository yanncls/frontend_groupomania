import "../utils/style/Profil.scss";
import Header from "../components/Header/index";
import MyFeed from "../components/MyFeed/MyFeed";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import { useState } from "react";

function Profil() {
  // states
  const [thisUser, setThisUser] = useState("");

  console.log(thisUser);

  return (
    <div>
      <Header />
      <div className="Dashboard">
        <div className="Profil-Card">
          <AccountInfo setThisUser={setThisUser} />
        </div>
        <div className="Main-Card">
          <div className="Feed">
            <MyFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
