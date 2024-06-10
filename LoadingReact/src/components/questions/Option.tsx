import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Option = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

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

  const handleClick = (): void => {
    navigate("/result");
  };

  return (
    <article className=" d-flex justify-content-center align-items-center vh-100">
      <section className="text-center rounded  p-4 card2">
        <h1>{question}</h1>
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
              <button
                id="optionBtn"
                className="card3 answer-box text-center rounded w-100 p-3"
                onClick={handleClick}
              >
                {answer}
              </button>
            </div>
          ))}
        </section>
        <section className="row">
          {answers.slice(2).map((answer, index) => (
            <div className="col-6 mb-3" key={answer + "-" + (index + 2)}>
              <button
                id="optionBtn"
                className="card3 answer-box text-center rounded w-100 p-3"
                onClick={handleClick}
              >
                {answer}
              </button>
            </div>
          ))}
        </section>
      </section>
    </article>
  );
};
export default Option;
/*
 QuestionService.getAllQuestions()
     .then((questions) => {
       const randomQuestion =
         questions[Math.floor(Math.random() * questions.length)];
       setQuestion(randomQuestion.questionText);
       setAnswers(Array(randomQuestion.answerAmount).fill(null));
       setLoading(false);
     })
     .catch((error) => {
       console.error("Error fetching question", error);
       setAnswers([]); // set to empty array if API request fails
       setLoading(false);
     });
 }, []);
 */
