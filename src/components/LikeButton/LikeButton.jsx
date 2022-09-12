import { useState, useEffect } from "react";
import LikeBtn from "./like.svg";
import axios from "../../api/axios";

export default function LikeButton(note) {
  // URL API
  const API_URL = "api/notes/";

  // note data
  const idItem = note.noteId;

  const numbersOfLikes = note.noteLike;
  console.log("numbersOfLikes", numbersOfLikes);

  // states
  const [like, setLike] = useState("");
  // const [numLikes, setNumLikes] = useState("");

  const userId = localStorage.getItem("userId");
  console.log(userId);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log("click 1");
      setLike(1);
      console.log(like);
      const res = await axios(`${API_URL}/${idItem}/like`, {
        method: "POST",
        data: { userId, like },
      });
      console.log("click 2");
      console.log("response data", res);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const numberOfLike = async () => {
  //     const res = await axios(`${API_URL}/${idItem}`);
  //     setNumLikes(res);
  //     console.log("useEffect res", res);
  //   };
  //   console.log("activate");
  //   numberOfLike();
  // }, []);

  return (
    <div>
      <button onClick={handleClick}>
        <img src={LikeBtn} alt="like" />
      </button>
      <p>{note.noteLike}</p>
    </div>
  );
}
