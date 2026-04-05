import { useState } from "react"

export function WindowButton({text, handleClick}) {
  const [pressed, setPressed] = useState(false)

  return <div className={`window-btn ${pressed && "pressed"}`}
    onClick={handleClick}
    onMouseDown={() => setPressed(true)}
    onMouseUp={() => setPressed(false)}>
      {text}
  </div>
}