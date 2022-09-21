import { useState } from "react";
import LikeBtn from "./like.svg";
import axios from "../../api/axios";
import "./LikeButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon="fa-solid fa-heart" />;

export default function LikeButton({ noteId, noteLike, usersLiked }) {
  // URL API
  const API_URL = "api/notes/";

  const userId = localStorage.getItem("userId");
  console.log(userId);

  // states
  const [like, setLike] = useState("");
  const [numLikes, setNumLikes] = useState(noteLike);
  const [hasLiked, setHasLiked] = useState(usersLiked.includes(userId));

  // const hasLiked = usersLiked.includes(userId);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log("click 1");
      setLike(1);
      console.log(like);
      const res = await axios(`${API_URL}/${noteId}/like`, {
        method: "POST",
        data: { userId },
      });
      console.log("click 2");
      console.log("response data", res);

      const newLike = !hasLiked;
      setHasLiked(newLike);

      if (newLike) {
        setNumLikes(numLikes + 1);
      } else {
        setNumLikes(numLikes - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="like_section">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faHeart} className="faHeart" />
      </button>
      <p className={hasLiked ? "hasLiked" : "hasNotLiked"}>{numLikes}</p>
    </div>
  );
}
