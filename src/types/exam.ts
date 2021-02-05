import { ExamType } from "./exam-type";
import { Question } from "./question";

export interface Exam {
    name: string;
    description: string;
    type: ExamType;
    questions: Question[];
  }