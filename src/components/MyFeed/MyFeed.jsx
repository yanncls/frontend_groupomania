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
    <div>
      {notes
        .slice(0)
        .reverse()
        .map((note) => {
          return (
            <div key={note._id}>
              <div className="post-card">
                <div className="post-container">
                  <div className="post-content_file">
                    <div className="post-content">
                      <div className="post-card-top">
                        <Author note={note} />
                        <div className="description-flex">
                          <p>{note.description}</p>
                        </div>
                      </div>

                      <div className="imageUrl-container">
                        <img
                          src={note.imageUrl}
                          alt="imageUrl"
                          className="imageUrl"
                        />
                      </div>
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
  );
}
