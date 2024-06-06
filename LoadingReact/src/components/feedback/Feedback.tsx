import "./feed.css";

const Feedback = () => {
  return (
    <article className="feedback">
      <div className="row">
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
    </article>
  );
};

export default Feedback;
