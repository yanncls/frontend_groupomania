import ProfileLogo from "../action_bar/photo-man.jpeg";
import ArticleLogo from "../action_bar/thread.svg";
import ImageLogo from "../action_bar/image.svg";
import VideoLogo from "../action_bar/video.svg";
import "./Action.scss";

// Pour mettre une barre de publication comme sur facebook

const Action = () => {
  return (
    <div className="PostBar">
      <div className="image-cropper">
        <img src={ProfileLogo} alt="profile-logo" className="profile-pic" />
      </div>
      <form action="post">
        <input
          type="text"
          name="post"
          id="post"
          placeholder="Que se passe t'il ?"
        />
        <div className="post-btn">
          <div className="post-btn_image">
            <button id="image">
              <img src={ImageLogo} alt="ImageLogo" />
              Photo
            </button>
          </div>
          <div className="post-btn_video">
            <button id="video">
              <img src={VideoLogo} alt="VideoLogo" />
              Vidéo
            </button>
          </div>
          <div className="post-btn_article">
            <button id="article">
              <img src={ArticleLogo} alt="ArticleLogo" />
              Article
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Action;
