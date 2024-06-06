import { useEffect, useState } from "react";
import { IPlayer } from "../../interfaces/IPlayer";
import PlayerService from "../../services/PlayerService";
import WaitItem from "./WaitItem";


const WaitList = () => {
    const [players, setPlayers] = useState<IPlayer[]>([]);

    useEffect(() => {
        getPlayersFromService();
    }, []);

    const getPlayersFromService = async () => {
        const playersFromService = await PlayerService.getAllPlayers();
        setPlayers(playersFromService);
    }

    const getPlayersById = async (id: number) => {
        const result = await PlayerService.getPlayerById(id);
        console.log(result);
        return result;
    }

    const getPlayersJSX = () => {
        return players.map((player, i) => {
            return <WaitItem key={i} player={player} />;
        });
    }

    return <div>{getPlayersJSX()}</div>;
}

export default WaitList;