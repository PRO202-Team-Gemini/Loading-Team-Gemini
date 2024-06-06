import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { useNavigate } from "react-router-dom";

const Wait = () => {
  const { player, selectedCaracter } = useContext(PlayerContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/option");
  };

  return (
    <article
      onClick={handleClick}
      className="row justify-content-center align-items-center"
    >
      <section className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
        <img
          src={`/images/${selectedCaracter}.png`}
          alt="avatar, player character"
          className="img-fluid card2 rounded shadow p-4"
        />
      </section>
      <section className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-center ml-5">
          <h1 className="app-h1">{player.name}</h1>
          <p className="app-p">Følg med på scenen</p>
        </div>
      </section>
    </article>
  );
};

export default Wait;
