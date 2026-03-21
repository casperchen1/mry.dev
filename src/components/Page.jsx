import { useState } from "react"
import PageTag from "./PageTag"
import PageContent from "./PageContent"

function Page({key, tag, size, setFocused, opened, focused, closePopup, topZIndex, iconSrc}) {
  const [isDragging, setIsDragging] = useState(false)
  const [myPos, setMyPos] = useState({x: 0, y: 0})
  const [offset, setOffset] = useState({x: 0, y: 0})

  const handleMouseDown = (e) => {
    setFocused()
    setIsDragging(true)
    setOffset({x: e.clientX - myPos.x, y: e.clientY - myPos.y})
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if(isDragging) {
      setMyPos({x: e.clientX - offset.x, y: e.clientY - offset.y})
    }
  }

  return <div className={`page ${opened ? "open" : "closed"}`}
  style={{
    width: size[0], 
    height: size[1],
    left: myPos.x,
    top: myPos.y,
    transition: isDragging ? "none" : "0.2s linear",
    zIndex: focused && topZIndex
  }}
  >
    <PageTag tag={tag} 
      closePopup={closePopup} 
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleMouseMove={handleMouseMove}
      focused={focused}
      iconSrc={iconSrc}
    />
    <PageContent tag={tag} />
  </div>
}

export default Page