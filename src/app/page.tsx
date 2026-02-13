'use client'

import { Question } from "@/components/Question"
import { Results } from "@/components/Results"
import { questionList } from "@/data/questionList"
import { useState } from "react"

const Page = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if (questionList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const resetQuiz = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="bg-white px-5 pt-3 rounded-md md:mx-10 container lg:w-1/2 xl:w-1/3">
        <div>
          <h1 className="font-bold">Quiz de suporte técnico HELP DESK</h1>
        </div>

        <div className="border-t-2 border-b-2 border-gray-400 py-5">
          {!showResult &&
            <Question
              questions={questionList[currentQuestion]}
              onAnswer={handleAnswered}
              count={currentQuestion + 1}
            />
          }

          {showResult &&
            <Results answers={answers} />
          }
        </div>

        <div className="flex justify-center items-center py-2">
          {!showResult &&
            <p className="text-sm">{`${currentQuestion + 1} de ${questionList.length} perguntas`}</p>
          }

          {showResult &&
            <button
              onClick={resetQuiz}
              className="bg-purple-900 hover:bg-purple-950 duration-300 text-white px-3 py-2 rounded-md cursor-pointer">Reiniciar quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page

