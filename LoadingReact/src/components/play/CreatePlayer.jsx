import PlayService from "../../services/PlayerService";
import { useState } from "react";

const CreatePlayer = () => {
  const [playerName, setPlayerName] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "playerName":
        setPlayerName(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const savePlayer = async (e) => {
    try {
      const newPlayer = {
        name: playerName,
      };
      await PlayService.postPlayer(newPlayer);
      console.log(`Player "${playerName}" created successfully`);
      //setFeedback(`Player "${playerName}" created successfully`);
    } catch (error) {
      console.error(`Error creating player ${error}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="playerName"
        value={playerName}
        onChange={handleChange}
      />
      <button onClick={() => savePlayer()}>Create player</button>
    </div>
  );
};

export default CreatePlayer;
