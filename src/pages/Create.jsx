import Header from "../components/Header/index";
import "../utils/style/create.scss";
import UploadImages from "../components/UploadImg/UploadImages";
import { useState } from "react";
import axios from "../api/axios";

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
      console.log(imageLink);
      const res = await axios(POST_URL, {
        method: "post",
        data: JSON.stringify({ description, imageLink }),
        headers: { "Content-Type": "application/json" },
      });
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            <br />
            <UploadImages imageLink={imageLink} setImageLink={setImageLink} />
            <br />
            <button onClick={handleSubmit}>Publier</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
