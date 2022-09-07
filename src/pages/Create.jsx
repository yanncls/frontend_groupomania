import Header from "../components/Header/index";
import "../utils/style/create.scss";
import UploadImages from "../components/UploadImg/UploadImages";
import { useState } from "react";
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

function Create() {
  const POST_URL = "/api/notes/";

  // States

  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");

  // Logiques

  //   useEffect(() => {
  //     const myNote = async () => {
  //       const res = await axios.post(POST_URL);
  //       setNote(res);
  //     };
  //     (async () => await myNote())();
  //   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    console.log(imageLink[0]);
    const formData = new FormData();
    formData.append("image", imageLink[0]);
    formData.append("description", description);
    formData.append("userId", userId);

    try {
      const res = await axios(POST_URL, {
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log("une erreur est survenue", err);
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
            <h1>Créer une publication</h1>
          </div>
          <br />
          <form
            action="publication"
            onSubmit={handleSubmit}
            name="publication"
            className="Create_Form"
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <br />
            <UploadImages imageLink={imageLink} setImageLink={setImageLink} />
            <br />
            <button type="submit">Publier</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
