import axios from "axios";
import { IAnswer } from "../interfaces/IAnswer";

const AnswerService = (() => {
  const answerController = "http://localhost:5157/api/Answer";

  const getAllAnswers = async (): Promise<IAnswer[]> => {
    try {
      const result = await axios.get(answerController);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
  const getAnswerById = async (id: number) => {
    try {
      const result = await axios.get(`${answerController}/${id}`);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };
  const getAnswersByQuestionId = async (questionId: number) => {
    try {
      const result = await axios.get(
        `${answerController}/question/${questionId}`
      );
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    getAllAnswers,
    getAnswerById,
    getAnswersByQuestionId,
  };
})();
export default AnswerService;
