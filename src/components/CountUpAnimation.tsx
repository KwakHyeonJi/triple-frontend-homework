import { useEffect, useState } from 'react'

interface CountUpAnimationProps {
  duration?: number
  children: number
}

const frameDelay = 20

const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3)
}

const CountUpAnimation = ({
  duration = 2000,
  children: countTo,
}: CountUpAnimationProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const totalFrames = Math.round(duration / frameDelay)
    const countUp = setInterval(() => {
      frame = frame + 1
      const progress = easeOutCubic(frame / totalFrames)
      setCount(progress * countTo)

      if (frame === totalFrames) {
        clearInterval(countUp)
      }
    }, frameDelay)
    return () => clearInterval(countUp)
  }, [])

  return <>{Math.floor(count)}</>
}

export default CountUpAnimation
