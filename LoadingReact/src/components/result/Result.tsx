import React from "react";
import "./result.css";
import { useNavigate } from "react-router-dom";

/* interface ResultProps {
  data: { label: string; value: number }[];
} */

const Result: React.FC<{
  /*ResultProps*/
}> = (
  {
    /*data*/
  }
) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/stats");
  };
  return (
    <section>
      <article onClick={handleClick}>
        {/* //TODO ersatt tekst med props */}
        <p>Hvilket våpen skal Askeladden plukke opp?</p>
        <div>
          {/* Placeholder for the graph */}
          <div className="img">
            <img src="./images/resultater.png" />
          </div>
          <div id="graph"></div>
        </div>
      </article>
    </section>
  );
};

export default Result;
