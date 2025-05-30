'use client'

import React, { useState, useEffect } from 'react'

interface PollProps {
  id: string
  question: string
  answers: string[]
  labels?: string[]
}

const Poll: React.FC<PollProps> = ({ id, question, answers, labels }) => {
  const [results, setResults] = useState<Record<number, number>>({})
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#ec4899']

  // Load results from localStorage on mount
  useEffect(() => {
    const savedResults = localStorage.getItem(`poll-${id}`)
    const savedAnswered = localStorage.getItem(`poll-${id}-answered`)
    
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    }
    
    if (savedAnswered === 'true') {
      setAnswered(true)
    }
  }, [id])

  const handleVote = (answerIndex: number) => {
    if (answered) return

    // Update results
    const newResults = { ...results }
    newResults[answerIndex] = (newResults[answerIndex] || 0) + 1
    
    setResults(newResults)
    setSelectedAnswer(answerIndex)
    setAnswered(true)

    // Save to localStorage
    localStorage.setItem(`poll-${id}`, JSON.stringify(newResults))
    localStorage.setItem(`poll-${id}-answered`, 'true')
  }

  const getTotalVotes = () => {
    return Object.values(results).reduce((sum, votes) => sum + votes, 0)
  }

  const getPercentage = (votes: number) => {
    const total = getTotalVotes()
    return total > 0 ? Math.round((votes / total) * 100) : 0
  }

  return (
    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">
        Poll: {question}
      </h3>

      {!answered ? (
        // Voting interface
        <div className="space-y-3">
          {answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleVote(index)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 
                         hover:border-blue-300 hover:bg-blue-50 transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="text-gray-700">{answer}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        // Results interface
        <div className="space-y-4">
          {answers.map((answer, index) => {
            const votes = results[index] || 0
            const percentage = getPercentage(votes)
            const isSelected = selectedAnswer === index
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: colors[index] }}
                    />
                    <span className={`text-sm ${isSelected ? 'font-semibold' : ''}`}>
                      {labels?.[index] || answer}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {percentage}% ({votes} votes)
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: colors[index]
                    }}
                  />
                </div>
              </div>
            )
          })}
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Total votes: {getTotalVotes()}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Poll 