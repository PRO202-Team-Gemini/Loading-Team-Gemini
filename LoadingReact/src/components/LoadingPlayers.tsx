import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

type Player = {
  name: string;
};

const LoadingPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  /*const [isLoading, setIsLoading] = useState(true);*/

  useEffect(() => {
    fetch("http://localhost:5157/api/players")
      .then((response) => response.json())
      .then((data: Player[]) => setPlayers(data));
    /*setIsLoading(false); // Set loading to false when data is fetched*/
  }, []);

  return (
    <article className="col-12 col-md-6 col-lg-4">
      <h1 className="text-center"> Venter på spillere </h1>
      <div className=" text-center card2 shadow rounded p-1 m-1 card-body">
        {/*players.length === 0 /isLoading &&*/ <div className="spinner"></div>}
        <div className="text-center">
          <p className="text-center player-count">
            {" "}
            <FontAwesomeIcon icon={faUser} />
            <br />
            <span>{players.length}</span>
          </p>
          {players.length > 0
            ? players.map((player, index) => (
                <div key={index}>{player.name}</div>
              ))
            : "--Placeholder--"}
        </div>
      </div>
    </article>
  );
};

export default LoadingPlayers;
