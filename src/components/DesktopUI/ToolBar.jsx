import { useState, useEffect } from "react"
import start from "../../assets/start.png"
import start_pressed from "../../assets/start_pressed.png"
import Tab from "./Tab"

function timeToString(time) {
  let hours = time.getHours()
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const AMPM = hours >= 12 ? "AM" : "PM"
  
  hours = hours % 12
  hours = hours === 0 ? 12 : hours;

  return `${hours}:${minutes} ${AMPM}`
}

function ToolBar({pages, focusedTab, activeTabs, setFocusedTab}) {
  const [time, setTime] = useState(new Date())
  const [startPressed, setStartPressed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 60000)

    return () => clearInterval(timer) 
  }, [])

  return <div className="toolbar">
    <img src={startPressed ? start_pressed : start} 
      alt="start" 
      className="start"
      onClick={() => {
        setStartPressed(!startPressed)
      }}
     />
    {activeTabs.map(tab => (
      <Tab 
        key={tab}
        name={pages[tab - 1].tag}
        handleClick={() => {
          setFocusedTab(tab)
        }}
        focused={focusedTab === tab}
        iconSrc={pages[tab - 1].icon.src}
      />
    ))}
    <div className="clock">
      {timeToString(time)}
    </div>
  </div>
}

export default ToolBar 