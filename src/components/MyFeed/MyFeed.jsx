import { useState, useEffect } from "react";
import axios from "../../api/axios";
import Author from "../Author/Author";
import EditButton from "../EditButton/EditButton";

export default function MyFeed() {
  // parametre user
  const thisUser = localStorage.getItem("userId");

  // Path ver api notes
  const API_URL = "/api/notes";

  //   states
  const [notes, setNotes] = useState([]);

  //   logique
  useEffect(() => {
    console.log(thisUser);
    const myNotes = async () => {
      const res = await axios(API_URL, {
        method: "GET",
        data: JSON.stringify({
          userId: thisUser,
        }),
      });
      setNotes(res);
    };
    (async () => await myNotes())();
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return (
          <div key={note._id}>
            <div className="post-card">
              <div className="post-card-top">
                <Author note={note} />
              </div>
              <div className="post-container">
                <div className="post-content_file">
                  <div className="post-content">
                    <p>{note.description}</p>
                    <img src="" alt="st tropez" />
                  </div>
                </div>
                <div className="post-like-btn">
                  <button>
                    <img src="" alt="like" />
                  </button>
                  <p>0</p>
                  <EditButton note={note} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
