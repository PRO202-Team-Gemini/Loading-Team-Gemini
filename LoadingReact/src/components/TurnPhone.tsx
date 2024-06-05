import React from "react";
import { useNavigate } from "react-router-dom";

const TurnPhone: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/signIn");
  };

  return (
    <>
      <section>
        <div>
          <img
            src="/images/turnPhone.png"
            alt="Turn Phone"
            className="turn-phone-img"
          />
        </div>
        <div className="text-center">
          <button id="custom" className="btn mt-3" onClick={handleClick}>
            Fortsett
          </button>
        </div>
      </section>
    </>
  );
};

export default TurnPhone;
