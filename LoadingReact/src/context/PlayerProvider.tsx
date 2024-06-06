import { useState, ReactNode } from "react";
import { PlayerContext } from "./PlayerContext";

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [player, setPlayer] = useState({});
  const [selectedCaracter, setSelectedCaracter] = useState(null);

  return (
    <PlayerContext.Provider value={{ player, setPlayer, selectedCaracter, setSelectedCaracter }}>
      {children}
    </PlayerContext.Provider>
  );
};
