export interface IAnswer {
  id: number;
  questionId: number;
  answerText: string;
  isCorrect: boolean;
  nextQuestion: number;
}
