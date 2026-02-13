import { questionList } from "@/data/questionList"
import { useState } from "react"

type Props = {
  answers: number[]
}

export const Results = ({ answers }: Props) => {

  const totalCorrectAnswers = questionList.reduce((total, item, i) => (
    answers[i] === item.answer ? total + 1 : total
  ), 0)

  return (
    <>
      {questionList.map((item, i) => (
        <div className="mb-3" key={i}>
          <p className="font-bold text-sm">{i + 1}. {item.question}</p>
          <p><span>{answers[i] === item.answer ? '✔' : '❌'}</span> {item.answers[answers[i]]}</p>
        </div>
      ))}

      <div className="text-center">
        Você acertou {(totalCorrectAnswers / questionList.length) * 100}% das questões
      </div>
    </>
  )
}