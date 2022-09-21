import { useState, useEffect } from "react";
import axios from "../../api/axios";
import Author from "../Author/Author";
import EditButton from "../EditButton/EditButton";
import LikeButton from "../LikeButton/LikeButton";

export default function MyFeed() {
  // parametre user
  const userId = localStorage.getItem("userId");

  // Path ver api notes
  const API_URL = "/api/notes";

  //   states
  const [notes, setNotes] = useState([]);

  //   logique
  useEffect(() => {
    console.log(userId);
    const myNotes = async () => {
      const res = await axios(`${API_URL}/${userId}`, {
        method: "GET",
      });
      setNotes(res);
    };
    myNotes();
  }, []);

  return (
    <>
      {notes ? (
        <div>
          {notes
            .slice(0)
            .reverse()
            .map((note) => {
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
                          <img src={note.imageUrl} alt="st tropez" />
                        </div>
                      </div>
                      <div className="post-like-btn">
                        <LikeButton
                          noteId={note._id}
                          noteLike={note.like}
                          usersLiked={note.usersLiked}
                        />
                        <EditButton note={note} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <h2>Pas de contenu</h2>
        </div>
      )}
    </>
  );
}
