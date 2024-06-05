import React, { useCallback, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import PlayService from "../../services/PlayerService";
import badwords from "./badwords.json";

//TODO Change the styling for "SelectedCharacter" to be more exiting
//TODO Add a function to save the selected character to... somewhere

const SignIn: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  //const [feedback, setFeedback] = useState<string>("");
  const navigate = useNavigate();

  const characters: string[] = ["fox", "lion", "rabbit", "racoon", "owl"];

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerName(e.currentTarget.value);
    },
    [],
  );

  const profanityFilter = (text: string) => {
    const words = text.toLowerCase();
    return badwords.some((word) => words.includes(word));
  };

  const savePlayer = async () => {
    try {
      if (profanityFilter(playerName)) {
        //setFeedback("Player name contains profanity.");
        return;
      }

      await PlayService.postPlayer({ name: playerName });
      //setFeedback(`Player "${playerName}" created successfully`);

      // Navigate to the waiting room
      navigate("/waiting-room");
    } catch (error) {
      //setFeedback(`Error creating player: ${error}`);
    }
  };

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
                onClick={() => setSelectedCharacter(character)}
              >
                <img
                  className={
                    selectedCharacter === character
                      ? "d-block w-100 selectedCaracter carousel-image"
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
        {/*{feedback && <p>{feedback}</p>} */}
        <button className="btn btn-success mb-5" onClick={() => savePlayer()}>
          Godta
        </button>
      </div>
    </section>
  );
};
export default SignIn;
