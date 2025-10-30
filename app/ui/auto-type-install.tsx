"use client"

import { useEffect, useState } from "react"

export function AutoTypeInstall() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "npm i alida-ui"

  useEffect(() => {
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 80) // Typing speed in milliseconds

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <div className="gap-2 px-4 rounded-lg bg-transparent border border-white/30 text-white/50 py-2.5 transition-[background-color,border-color,box-shadow,color] ease-in-out duration-300 backdrop-blur-sm inline-block">
      <code className="font-mono text-sm">
        {displayText}
        <span className="animate-pulse ml-2">|</span>
      </code>
    </div>
  )
}
