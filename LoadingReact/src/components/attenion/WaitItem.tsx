import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const Wait = () => {
  const { player, selectedCaracter } = useContext(PlayerContext);

  console.log(selectedCaracter)
  return (
    <article className="row justify-content-center align-items-center mt-5">
      <section className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
        <img
          src={`/images/${selectedCaracter}.png`}
          alt="Placeholder avatar"
          className="img-fluid card2 rounded shadow"
        />
      </section>
      <section className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-center ml-5">
          <h1>{player.name}</h1>
          <h4>Følg med på scenen</h4>
        </div>
      </section>
    </article>
  );
};

export default Wait;
