import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PlayerService from "../../services/PlayerService";
import { useNavigate } from "react-router-dom";

type Player = {
  name: string;
};

const LoadingPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await PlayerService.getAllPlayers();
      setPlayers(players);
    };
    fetchPlayers();
  }, []);

  const handleClick = (): void => {
    navigate("/wait");
  };
  return (
    <section
      className="background d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <article
        className="p-3 d-flex flex-column justify-content-center align-items-center w-100"
        onClick={handleClick}
      >
        <div className="col-8">
          <h1 className="text-center"> Venter på spillere </h1>
          <div className="card2 rounded p-1 m-1 card-body text-center">
            {<div className="spinner"></div>}
            <p className="text-center player-count">
              {" "}
              <FontAwesomeIcon icon={faUser} />
              <br />
              <span>{players.length}</span>
            </p>
            <div className="text-center">
              {players.length > 0
                ? players
                    .slice(-5)
                    .reverse()
                    .map((player, index) => (
                      <div key={index}>{player.name}</div>
                    ))
                : "--Placeholder--"}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LoadingPlayers;
