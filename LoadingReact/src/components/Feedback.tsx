import React from "react";
import "./feed.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <p>Gi oss gjerne en smiley basert på din opplevelse!</p>
      <div className="smileys">
        <span role="img" aria-label="angry">
          😡
        </span>
        <span role="img" aria-label="meh">
          😕
        </span>
        <span role="img" aria-label="neutral">
          😐
        </span>
        <span role="img" aria-label="good">
          🙂
        </span>
        <span role="img" aria-label="happy">
          😃
        </span>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default Feedback;
