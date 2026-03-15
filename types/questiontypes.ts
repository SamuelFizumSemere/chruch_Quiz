
export interface Question {
    id: string;
    text: string;
    options: Option[];
    correctOptionId: number;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}