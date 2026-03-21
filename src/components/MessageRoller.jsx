import { useEffect, useRef, useState } from "react"

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function MessageRoller({dict}) {
  const [offset, setOffset] = useState(0)
  const textRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset(prev => {
        if(prev > -1 * textRef.current.offsetWidth) return prev - 2
        return (boxRef.current.offsetWidth)
      })
    }, 50)

    return () => clearInterval(timer) 
  }, [])
  
  return <div ref={boxRef} className="message-roller">
    <span ref={textRef}
      style={{ transform: `translateX(${offset}px)` }}>
      <h3>this is just a test</h3>
    </span>
  </div>
}

export default MessageRoller