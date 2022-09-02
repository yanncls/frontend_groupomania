import Header from "../components/Header/index";
import "../utils/style/create.scss";
import UploadImages from "../components/UploadImg/UploadImages";

function Create() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Create_Title">
        <div className="Create_Box">
          <div className="Create_Index">
            <h1>Postez votre contenu du jour</h1>
          </div>
          <br />
          <form action="publication" className="Create_Form">
            <label className="post_label" htmlFor="Content">
              Que se passe t'il ?
            </label>
            <br />
            <input type="text" name="content" id="Content" maxLength="140" />
            <br />
            <UploadImages />
            <br />
            <button>Publier</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
