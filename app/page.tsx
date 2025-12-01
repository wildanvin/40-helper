"use client"

import { useState } from "react"
import CardButton from "@/components/card-button"
import { Button } from "@/components/ui/button"

const CARDS = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"]

export default function Home() {
  const [cardStates, setCardStates] = useState<Record<string, number>>(
    CARDS.reduce((acc, card) => ({ ...acc, [card]: 0 }), {}),
  )

  const handleCardClick = (card: string) => {
    setCardStates((prev) => ({
      ...prev,
      [card]: (prev[card] + 1) % 4, // Cycles through 0 (white), 1 (green), 2 (orange), 3 (red)
    }))
  }

  const handleReset = () => {
    setCardStates(CARDS.reduce((acc, card) => ({ ...acc, [card]: 0 }), {}))
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl">
        {/* First row: 3 cards centered */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {["A", "2", "3"].map((card) => (
            <CardButton key={card} card={card} state={cardStates[card]} onClick={() => handleCardClick(card)} />
          ))}
        </div>

        {/* Second row: 4 cards */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {["4", "5", "6", "7"].map((card) => (
            <CardButton key={card} card={card} state={cardStates[card]} onClick={() => handleCardClick(card)} />
          ))}
        </div>

        {/* Third row: 3 cards centered */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {["J", "Q", "K"].map((card) => (
            <CardButton key={card} card={card} state={cardStates[card]} onClick={() => handleCardClick(card)} />
          ))}
        </div>

        {/* Reset button */}
        <div className="flex justify-center">
          <Button onClick={handleReset} variant="outline" className="w-full sm:w-auto px-8 py-2 bg-transparent">
            Reset
          </Button>
        </div>
      </div>
    </main>
  )
}
