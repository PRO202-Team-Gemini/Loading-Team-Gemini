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
      <SignIn
        key={i}
        player={player}
        //image={player.image}
      />
    ));
    return playersJSX;
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>{getPlayersJSX()}</div>
    </div>
  );
};

export default PlayList;
