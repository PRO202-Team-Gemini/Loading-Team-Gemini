import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionService from "../../services/QuestionService";
import AnswerService from "../../services/AnswerService";
import { IAnswer } from "../../interfaces/IAnswer";

const Option = () => {
  const [question, setQuestion] = useState<{
    id: number;
    questionText: string;
  } | null>(null);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [timer, setTimer] = useState(30);
  const [, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      try {
        const questions = await QuestionService.getAllQuestions();

        if (localStorage.getItem("questionCount") === null) {
          localStorage.setItem(
            "questionCount",
            (questions.length - 1).toString()
          );
          localStorage.setItem("questionIndex", "0");
        }

        const currentQuestion =
          questions[parseInt(localStorage.getItem("questionIndex") as string)];

        setQuestion(currentQuestion);

        const fetchedAnswers = await AnswerService.getAnswersByQuestionId(
          currentQuestion.id
        );
        setAnswers(fetchedAnswers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question", error);
        setAnswers([]); // set to empty array if API request fails
        setLoading(false);
      }
    };
    fetchQuestionAndAnswers();
  }, []);

  useEffect(() => {
    if (question) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [question]);

  useEffect(() => {
    if (timer === 0) {
      navigate("/result");
    }
  }, [timer]);

  const handleAnswerClick = (answer: IAnswer): void => {
    navigate("/result", {
      state: {
        question: question?.questionText,
        answers: answers,
        selectedAnswer: answer,
      },
    });
  };

  return (
    <article className=" d-flex justify-content-center align-items-center vh-100">
      <section className="text-center rounded shadow">
        <h1>{question?.questionText}</h1>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${(timer / 30) * 100}%` }}
          ></div>
        </div>
        <p className="text-center">{timer} sekunder igjen</p>
        <section className="row">
          {answers.slice(0, 2).map((answer) => (
            <div className="col-6 mb-3" key={answer.id}>
              <button
                id="optionBtn"
                className="card3 answer-box text-center rounded w-100 p-3"
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.answerText}
              </button>
            </div>
          ))}
        </section>
        <section className="row">
          {answers.slice(2).map((answer) => (
            <div className="col-6 mb-3" key={answer.id}>
              <button
                id="optionBtn"
                className="card3 answer-box text-center rounded w-100 p-3"
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.answerText}
              </button>
            </div>
          ))}
        </section>
      </section>
    </article>
  );
};

export default Option;
