import Header from "../components/Header/index";

export default function Modify() {
  const handleDelete = async (req, res, next) => {
    try {
      const reqId = req.params.id;
      console.log(reqId);
    } catch (error) {
      console.log(error);
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
            <h1>Modifier ma publication</h1>
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
            />
            <br />
            <br />
            <button>Mettre à jour</button>
          </form>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </div>
    </div>
  );
}
