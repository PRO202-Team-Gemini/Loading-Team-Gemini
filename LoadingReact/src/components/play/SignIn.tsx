import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PlayService from "../../services/PlayerService";
import badwords from "./badwords.json";

//TODO Change the styling for "SelectedCharacter" to be more exiting
//TODO When database is implemented, add a save of username and character to database. Include "list of bad words" to prevent bad usernames.

const SignIn: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");

  const characters: string[] = ["fox", "lion", "rabbit", "racoon", "owl"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    switch (e.target.name) {
      case "playerName":
        setPlayerName(e.currentTarget.value);
        break;
      default:
        console.log("No input");
        break;
      /* case "character":
         setSelectedCharacter(e.currentTarget.files[0]);
         break; */
    }
  };
  const profanityFilter = (text: string) => {
    const words = text.toLowerCase();
    return badwords.some((word) => words.includes(word));
  };

  const savePlayer = async () => {
    try {
      if (profanityFilter(playerName)) {
        alert("Brukernavnet ditt inneholder uakseptable ord, prøv på nytt");
        return;
      }

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
        <button className="btn btn-success mb-5" onClick={() => savePlayer()}>
          Godta
        </button>
      </div>
    </section>
  );
};
export default SignIn;
