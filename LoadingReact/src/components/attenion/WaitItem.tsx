import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const Wait = () => {
  const { player } = useContext(PlayerContext);

  return (
    <article className="row justify-content-center align-items-center mt-5">
      <section className="col-6">
        <img
          src="./images/fox.png"
          alt="Placeholder avatar"
          className="img-fluid card2 rounded shadow"
        />
      </section>
      <section className="col-6 text-center">
        <h1>{player.name}</h1>
        <br />
        <h4>Følg med på scenen</h4>
      </section>
    </article>
  );
};

export default Wait;
