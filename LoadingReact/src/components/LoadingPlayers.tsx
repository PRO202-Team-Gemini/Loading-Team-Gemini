import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { io } from "socket.io-client"; //Utkommenter når vi har server

type Player = {
  name: string;
};

const LoadingPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("http://localhost:5157/api/players")
      .then((response) => response.json())
      .then((data: Player[]) => setPlayers(data));
  }, []);

  return (
    <article className="col-12 col-md-6 col-lg-4">
      <h1 className="text-center"> Venter på spillere </h1>
      <div className=" text-center card2 shadow rounded p-1 m-1 card-body">
        {players.length === 0 && <div className="spinner"></div>}
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
// Utkommenter når vi har server
/*
    const socket = io("http://vår-server-link.com");
    socket.on("playerConnected", (player) => {
        setPlayers((prevPlayers) => [...prevPlayers, player]);
    });
    */
export default LoadingPlayers;
