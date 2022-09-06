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

    try {
      //   const image = imageLink[0].name;
      //   console.log(image);
      //   console.log(description);
      const userId = localStorage.getItem("userId");
      const res = await axios(POST_URL, {
        method: "POST",
        data: JSON.stringify({
          description: description,
          userId: userId,
          imageUrl: imageLink,
        }),
        headers: { "Content-Type": "application/json" },
      });
      //   const resJson = await res.json();
      //   if (res.status === 200) {
      //     setDescription("");
      //     setImageLink("");
      //     console.log("publication crée avec succès");
      //   }
      console.log(JSON.stringify(res));
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
