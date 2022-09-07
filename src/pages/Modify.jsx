import Header from "../components/Header/index";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

export default function Modify() {
  const params = useParams();
  console.log("params", params);

  // path
  const PROFIL_URL = "api/notes";

  // supprimer un post
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`${PROFIL_URL}/${params.id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Create_Title">
        <div className="Create_Box">
          <div className="Create_Index">
            <h1>Modifier ma publication</h1>
          </div>
          <br />
          <form action="publication" className="Create_Form">
            <label className="post_label" htmlFor="Content">
              Quoi de neuf ?
            </label>
            <br />
            <input
              type="text"
              name="description"
              id="description"
              maxLength="140"
            />
            <br />
            <br />
            <button>Mettre à jour</button>
          </form>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </div>
    </div>
  );
}
