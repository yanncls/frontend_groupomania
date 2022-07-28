import "./index.scss";
import FaceProfile from "./visage.jpeg";
import LikeBtn from "./like.svg";

const Feed = () => {
  return (
    <div className="post-card">
      <div className="post-card-top">
        <div className="post-profile-cropper">
          <img src={FaceProfile} alt="visage" className="post-profile-pic" />
        </div>
        <div className="post-author">
          <h3>Pseudo</h3>
          <p>2 hours ago</p>
        </div>
      </div>
      <div className="post-container">
        <div className="post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          distinctio dolore inventore iusto cum nisi. Veritatis aperiam pariatur
          quis soluta dignissimos illo excepturi corporis similique quam,
          voluptatibus nemo, recusandae nihil.
        </div>
        <div className="post-like-btn">
          <img src={LikeBtn} alt="like" />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
