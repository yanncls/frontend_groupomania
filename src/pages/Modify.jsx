import Header from "../components/Header/index";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { useEffect } from "react";
import { useState } from "react";
import UploadImages from "../components/UploadImg/UploadImages";

export default function Modify() {
  const params = useParams();
  console.log("params", params.id);

  // states
  const [note, setNote] = useState([]);
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [imageHasChange, setImageHasChange] = useState(false);

  const [showImg, setShowImg] = useState(false);

  // URLs
  const NOTES_URL = "api/notes";
  const MY_NOTE = "api/notes/search";
  const POST_URL = "/api/notes";

  // récupérer la publication
  useEffect(() => {
    const myNote = async () => {
      const res = await axios(`${MY_NOTE}/${params.id}`, {
        method: "GET",
      });
      setNote(res);
      console.log(setNote);
    };
    myNote();
  }, []);

  // mettre à jour le post
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("mon image", imageLink[0]);
    const formData = new FormData();
    formData.append("image", imageLink[0]);
    formData.append("description", description);

    try {
      const res = await axios(`${POST_URL}/${params.id}`, {
        method: "PUT",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("succes update", res);
    } catch (err) {
      console.log("une erreur est survenue sur l'update", err);
    }
  };

  // supprimer un post
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`${NOTES_URL}/${params.id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // afficher l'image si

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
          <form
            action="publication"
            className="Create_Form"
            onSubmit={handleSubmit}
          >
            <label className="post_label" htmlFor="Content">
              Quoi de neuf ?
            </label>
            <br />
            <input
              type="text"
              name="description"
              id="description"
              maxLength="140"
              placeholder={note.description}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <br />
            <UploadImages
              setImageHasChange={setImageHasChange}
              setImageLink={setImageLink}
            />
            <div className="image_container">
              {!imageHasChange ? <img src={note.imageUrl} alt="img" /> : null}
            </div>
            <br />
            <button type="submit">Mettre à jour</button>
          </form>
          <div className="DeleteButton">
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
