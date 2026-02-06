import { useState, useEffect, useRef } from 'react'

export function useCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)
  const startTime = useRef(null)
  const animFrame = useRef(null)

  useEffect(() => {
    if (!shouldStart) {
      setCount(0)
      startTime.current = null
      return
    }

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        animFrame.current = requestAnimationFrame(animate)
      }
    }

    animFrame.current = requestAnimationFrame(animate)
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current)
    }
  }, [target, duration, shouldStart])

  return count
}
