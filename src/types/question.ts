import { Option } from "./option";

export interface Question {
    statement: string;
    options?: Option[];
}