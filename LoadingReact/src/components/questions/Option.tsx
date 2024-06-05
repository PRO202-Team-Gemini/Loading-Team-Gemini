import React, { useState, useEffect } from "react";
import "../shared/App.css";

const Option = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    // simulerer en fetch fra  backend, endre når backend er på plass
    setTimeout(() => {
      setQuestion("Hvilket våpen skal Askeladden velge?");
      setAnswers(["Sverd 🗡️", "Øks 🪓", "Spyd ⛏️", "Kjepp 🏒"]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (question) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [question]);

  return (
    <article>
      <section className="text-center rounded shadow">
        <h1>{question}</h1>
      </section>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${(timer / 60) * 100}%` }}
        ></div>
      </div>
      <p className="text-center">{timer} sekunder igjen</p>
      <section className="row">
        {answers.slice(0, 2).map((answer, index) => (
          <div className="col-6 mb-3" key={answer + "-" + index}>
            <button className="card2 answer-box text-center rounded w-100 p-3">
              {answer}
            </button>
          </div>
        ))}
      </section>
      <section className="row">
        {answers.slice(2).map((answer, index) => (
          <div className="col-6 mb-3" key={answer + "-" + (index + 2)}>
            <button className="card2 answer-box text-center rounded w-100 p-3">
              {answer}
            </button>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Option;
