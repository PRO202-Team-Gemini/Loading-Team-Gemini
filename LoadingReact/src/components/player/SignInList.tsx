import { useEffect, useState } from "react";
import PlayService from "../../services/PlayerService";
import SignInItem from "./SignInItem";
import { IPlayer } from "../../interfaces/IPlayer";

const PlayList = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    getPlayersFromService();
  }, []);

  const getPlayersFromService = async () => {
    const playersFromService = await PlayService.getAllPlayers();
    //console.log("Players from Service ", playersFromService);
    setPlayers(playersFromService);
  };

  const getPlayersJSX = () => {
    const playersJSX = players.map((player: any, i: number) => (
      <SignInItem
        key={i}
        id={player.id}
        name={player.name}
        character={player.character}
      />
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
