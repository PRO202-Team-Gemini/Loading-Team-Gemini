import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import PlayService from "../../services/PlayerService";
import { testApiConnection } from "./test";

//TODO Change the styling for "SelectedCharacter" to be more exiting
//TODO When database is implemented, add a save of username and character to database. Include "list of bad words" to prevent bad usernames.

const SignIn: React.FC = () => {
  const [player, setPlayer] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");

  const characters: string[] = ["fox", "lion", "rabbit", "racoon", "owl"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    switch (e.target.name) {
      case "player":
        setPlayer(e.currentTarget.value);
        break;
      /* case "character":
         setSelectedCharacter(e.currentTarget.files[0]);
         break; */
    }
  };

  testApiConnection();

  const savePlayer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newPlayer = {
      name: player,
      //image: selectedCharacter,
    };
    await PlayService.postPlayer(newPlayer /*selectedCharacter*/);
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
              name="player"
              onChange={handleInputChange}
              className="form-control input-field"
              placeholder="Skriv inn brukernavn..."
              value={player}
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
        <button
          className="btn btn-success mb-5"
          onClick={() => {
            //console.log("{player} has been saved");
            savePlayer;
          }}
        >
          Godta
        </button>
      </div>
    </section>
  );
};
export default SignIn;
