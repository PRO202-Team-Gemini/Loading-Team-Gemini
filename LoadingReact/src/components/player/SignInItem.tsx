import React, { useCallback, useContext, useState } from "react";
import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";
import PlayerService from "../../services/PlayerService";
import badwords from "./badwords.json";

const SignIn: FC = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const { selectedCaracter, setPlayer, setSelectedCaracter } =
    useContext(PlayerContext);
  const navigate = useNavigate();

  const characters: string[] = ["fox", "lion", "rabbit", "racoon", "owl"];

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerName(e.currentTarget.value);
    },
    []
  );

  const profanityFilter = (text: string): boolean => {
    const words = text.toLowerCase();
    return badwords.some((word) => words.includes(word));
  };

  const savePlayer = useCallback(async () => {
    try {
      if (profanityFilter(playerName)) {
        alert("Brukernavnet inneholder ugyldige ord, vennligst prøv igjen");
        return;
      }

      await PlayerService.postPlayer({
        name: playerName,
        character: selectedCaracter,
      });
      setPlayer({ name: playerName, character: selectedCaracter });

      navigate("/waiting-room");
    } catch (error) {
      console.error("Error saving player: ", error);
    }
  }, [playerName, selectedCaracter, setPlayer, navigate]);

  return (
    <section className="section-background">
      <article className="p-3 d-flex">
        <div className="input-group m-1 input-group-custom">
          <p className="paragraph-shadow signin-txt">
            Skriv inn ditt brukernavn
          </p>
          <div>
            <input
              type="text"
              name="playerName"
              onChange={handleInputChange}
              className="form-control input-field"
              placeholder="Skriv inn brukernavn..."
              value={playerName}
            />
          </div>
        </div>
        <div className="rounded m-4 p-3 div-background">
          <Carousel interval={null} indicators={false} slide={false}>
            {characters.map((character) => (
              <Carousel.Item
                key={character}
                onClick={() => {
                  setSelectedCaracter(character);
                }}
              >
                <img
                  className={
                    selectedCaracter === character
                      ? "d-block w-100 selectedIMG carousel-image"
                      : "d-block w-100 carousel-image"
                  }
                  src={`/images/${character}.png`}
                  alt={character}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </article>
      <div className="text-center">
        <button className="btn btn-success mb-5" onClick={savePlayer}>
          Godta
        </button>
      </div>
    </section>
  );
};

export default SignIn;
