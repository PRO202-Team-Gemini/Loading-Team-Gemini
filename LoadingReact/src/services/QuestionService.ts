import axios from "axios";
import { IQuestion } from "../interfaces/IQuestion";

const QuestionService = (() => {
  const questionController = "http://localhost:5157/api/Question";

  const getAllQuestions = async (): Promise<IQuestion[]> => {
    try {
      const result = await axios.get(questionController);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const getQuestionById = async (id: number) => {
    try {
      const result = await axios.get(`${questionController}/${id}`);
      console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    getAllQuestions,
    getQuestionById,
  };
})();

export default QuestionService;
