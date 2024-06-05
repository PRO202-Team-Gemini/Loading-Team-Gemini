import { useEffect } from "react";
import PlayService from "../services/PlayerService";

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    getPlayersFromService();
  }, []);

  const postPlayerFromService = async (newPlayer) => {
    const result = await axios.post(`${PlayService.playController}`, newPlayer);

    const formData = new FormData();
  };
};
