import { useState } from "react"

export default function NavButton({label, handleClick}) {
  const [hasEnter, setHasEnter] = useState(false)

  return <div className={`nav-btn ${hasEnter && "hover"}`}
    onMouseEnter={() => {setHasEnter(true)}}
    onMouseLeave={() => {setHasEnter(false)}}
    onClick={handleClick}
  >
    {label}
  </div>
}