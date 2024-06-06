import { useState, ReactNode } from "react";
import { PlayerContext } from "./PlayerContext";

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [player, setPlayer] = useState({});

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
