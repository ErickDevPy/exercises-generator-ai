import type { Exercises } from "~/types";
import { Question } from "./Question";

export function QuestionsList({exercises}: { exercises: Exercises }) {
    return exercises.map((exercise, index) => {
        const { question, answer, options, explanation } = exercise;
        return <Question key={index} number={index + 1} question={question} options={options} answer={answer} explanation={explanation} />
    })
}