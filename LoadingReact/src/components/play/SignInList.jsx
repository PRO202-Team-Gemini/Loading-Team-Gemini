import { useEffect, useState } from "react";
import PlayService from "../../services/PlayerService";
import SignIn from "./SignIn";

const PlayList = () => {
  const [player, setPlayer] = useState("");

  useEffect(() => {
    getPlayersFromService();
  }, []);

  const getPlayersFromService = async () => {
    const playersFromService = await PlayService.getAllPlayers();
    setPlayer(playersFromService);
  };

  const getPlayersJSX = () => {
    const playersJSX = player.map((player, i) => (
      <SignIn key={i} player={player} />
    ));
    return playersJSX;
  };

  return (
    <div>
      <div>{getPlayersJSX()}</div>
    </div>
  );
};

export default PlayList;
