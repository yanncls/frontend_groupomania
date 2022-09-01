import Header from "../components/Header/index";
import "../utils/style/create.scss";

function Create() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Create_Title">
        <div className="Create_Box">
          <div className="Create_Index">Ma Publication</div>
          <form action="publication" className="Create_Form">
            <label htmlFor="Content">Votre contenu</label>
            <input
              type="text"
              name=""
              id="Content"
              placeholder="Votre publication"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
