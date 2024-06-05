import React from "react";
import "./result.css";
import "../shared/App.css";

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
  return (
    <section>
      <article>
        {/* //TODO ersatt tekst med props */}
        <p>Hvilket våpen skal Askeladden plukke opp?</p>
        <div>
          {/* Placeholder for the graph */}
          <div className="img">
            <img src="https://media.giphy.com/media/3o6Zt7lX2U6n5JyfQ8/giphy.gif" />
          </div>
          <div id="graph"></div>
        </div>
      </article>
    </section>
  );
};

export default Result;
