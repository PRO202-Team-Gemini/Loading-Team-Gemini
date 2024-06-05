import { useEffect, useState } from "react";
import "../shared/App.css";

const Wait = () => {
  const [player, setPlayer] = useState({ userName: "", avatar: "" });

  useEffect(() => {
    // simulerer en fetch fra en backend
    setTimeout(() => {
      setPlayer({ userName: "CoolGuy04", avatar: "fox.png" });
    }, 1000);
  }, []);

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
        <h1>{player.userName}</h1>
        <br />
        <h4>Følg med på scenen</h4>
      </section>
    </article>
  );
};

export default Wait;
