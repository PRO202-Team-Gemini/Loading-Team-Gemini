import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./result.css";
import { IAnswer } from "../../interfaces/IAnswer";
import { count } from "console";

/*interface ResultProps {
  question: string;
  answers: { label: string; count: number }[];
  total: number;
}*/

const Result: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    question,
    answers,
    selectedAnswer,
  }: { question: string; answers: IAnswer[]; selectedAnswer: IAnswer } =
    location.state;

  const answerCounts = answers.reduce(
    (acc: { [key: string]: number }, answer) => {
      acc[answer.answerText] = answer.id === selectedAnswer.id ? 1 : 0;
      return acc;
    },
    {}
  );

  const totalAnswers = 1;

  const handleClick = (): void => {
    //ADD LOGIC HERE FOR NAVIGATION




    navigate("/feedback");
  };

  const formatPrecentage = (count: number, total: number) => {
    const percentage = (count / total) * 100;
    return percentage % 1 === 0 ? percentage.toString() : percentage.toFixed(2);
  };

  return (
    <article
      onClick={handleClick}
      className=" d-flex justify-content-center align-items-center vh-100"
    >
      <section className="text-center rounded shadow p-4">
        <h1>{question}</h1>
        <section className="row">
          {Object.entries(answerCounts).map(([label, count]) => (
            <div key={label}>
              <p className="card3 answer-box text-center rounded w-100 p-3">
                {label}: {formatPrecentage(count, totalAnswers)}%
              </p>
            </div>
          ))}
        </section>
        <div>
          <div id="graph"></div>
        </div>{" "}
      </section>
    </article>
  );
};

export default Result;
