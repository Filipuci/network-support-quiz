import { QuestionType } from "@/types/QuestionType"
import { useState } from "react"

type QuestionProps = {
  questions: QuestionType
  count: number
  onAnswer: (key: number) => void
}

export const Question = ({ questions, onAnswer, count }: QuestionProps) => {

  const { question, answers } = questions
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key)
      setTimeout(() => {
        onAnswer(key)
        setSelectedAnswer(null)
      }, 1000)
    }
  }

  return (
    <>
      <p className="font-bold text-xl mb-4">{count}. {question}</p>

      <ul className="flex flex-col gap-3">

        {answers.map((answer, index) => (
          <li
            key={index}
            className={`
              bg-blue-100
              p-2
              rounded-xl
              border
              border-blue-300
              transition
              duration-300
              ${selectedAnswer !== null ? 'cursor-auto' : 'hover:opacity-60 cursor-pointer'}
              ${selectedAnswer !== null && selectedAnswer === index && selectedAnswer === questions.answer && 'bg-green-100 border-green-300'}
              ${selectedAnswer !== null && selectedAnswer === index && selectedAnswer !== questions.answer && 'bg-red-100 border-red-300'}
              `}
            onClick={() => checkQuestion(index)}
          >
            {answer}
          </li>
        ))}

      </ul>
    </>
  )
}