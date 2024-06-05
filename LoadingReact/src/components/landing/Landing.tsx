import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/turnPhone");
  };
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <h1 className="text-center"> LOADING </h1>
      <h4 className="text-center"> Velkommen til forestilling!</h4>
      <div className=" text-center card2 shadow rounded p-2 m-2 card-body">
        <p className="text-center">
          Dette er en interaktiv forestilling hvor du bestemmer handlingen.{" "}
          <br></br> Velg navn og karakter på neste side, følg deretter med på
          scenen for instrukser.
        </p>
        <button type="button" className="btn btn-success" onClick={handleClick}>
          START
        </button>
      </div>
    </article>
  );
};

export default Landing;
