import React from "react"; // Import React
import { useNavigate } from "react-router-dom";
import { LANDING_TEXT } from "../constants/landingpageText";
import "../styles/landing.css";
import QRCode from "qrcode.react";

const { TITLE, SUBTITLE, PARAGRAPH1, BUTTON_TEXT } = LANDING_TEXT;

const Landing = () => {
  const navigate = useNavigate();

  const qrValue = "http://localhost:5173/signIn"; // Change this to the actual URL

  const handleClick = () => {
    navigate("/turnPhone");
  };

  return (
    <article className="col-12 col-md-8 col-lg-6 mx-auto my-5">
      <div className="text-center">
        <h1>{TITLE}</h1>
        <h4>{SUBTITLE}</h4>
      </div>
      <div className="text-center card2 shadow rounded p-4 m-2 card-body">
        <p>{PARAGRAPH1}</p>
        <div className="qr-code-container mt-3">
          <QRCode value={qrValue} size={100} />
        </div>
      </div>
    </article>
  );
};

export default Landing;
