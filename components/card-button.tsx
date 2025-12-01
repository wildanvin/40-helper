"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface CardButtonProps {
  card: string
  state: number
  onClick: () => void
}

export default function CardButton({ card, state, onClick }: CardButtonProps) {
  const getImagePath = (card: string) => {
    const imageMap: Record<string, string> = {
      A: "/images/card-a.jpg",
      "2": "/images/card-2.jpg",
      "3": "/images/card-3.jpg",
      "4": "/images/card-4.jpg",
      "5": "/images/card-5.jpg",
      "6": "/images/card-6.jpg",
      "7": "/images/card-7.jpg",
      J: "/images/card-j.jpg",
      Q: "/images/card-q.jpg",
      K: "/images/card-k.jpg",
    }
    return imageMap[card]
  }

  // Determine background color based on state: 0=white, 1=green, 2=orange, 3=red
  const getBgColor = (state: number) => {
    switch (state) {
      case 0:
        return "bg-white"
      case 1:
        return "bg-green-500"
      case 2:
        return "bg-orange-500"
      case 3:
        return "bg-red-500"
      default:
        return "bg-white"
    }
  }

  const imagePath = getImagePath(card)

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-20 h-28 sm:w-24 sm:h-32 rounded-2xl border-2 border-foreground",
        "flex flex-col items-start justify-start p-2",
        "transition-colors duration-200",
        "hover:opacity-80 active:scale-95",
        "relative overflow-hidden",
        getBgColor(state),
      )}
      aria-label={`Card ${card}, click to cycle through states`}
    >
      <Image
        src={imagePath || "/placeholder.svg"}
        alt={`Card ${card} illustration`}
        fill
        className="absolute inset-0 object-cover opacity-70"
      />

      <span
        className={cn("text-2xl sm:text-3xl font-bold relative z-10", state === 0 ? "text-foreground" : "text-white")}
      >
        {card}
      </span>
    </button>
  )
}
