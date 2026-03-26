import { useEffect, useState, useRef } from "react"
import PageTag from "./PageTag"
import PageContent from "../PageContent"

function Page({key, tag, size, setFocused, opened, focused, closePopup, topZIndex, iconSrc, desktopRef}) {
  const [isDragging, setIsDragging] = useState(false)
  const [myPos, setMyPos] = useState({x: 0, y: 0})
  const [offset, setOffset] = useState({x: 0, y: 0})

  const pageRef = useRef(null)

  useEffect(() => {
    setMyPos({x: desktopRef.current.offsetWidth / 2 - pageRef.current.offsetWidth / 2, 
      y: desktopRef.current.offsetHeight / 2 - pageRef.current.offsetHeight / 2})
  }, [desktopRef])

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
  ref={pageRef}
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