import React from "react";
import { useNavigate } from "react-router-dom";

const TurnPhone: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/signIn");
  };

  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="col-12 col-md-6 col-lg-4 text-center">
        <img
          src="/images/turnPhone.png"
          alt="Turn Phone"
          className="turn-phone-img mx-auto d-block"
        />
        <button className="btn btn-success mt-5" onClick={handleClick}>
          Fortsett
        </button>
      </div>
    </section>
  );
};

export default TurnPhone;
