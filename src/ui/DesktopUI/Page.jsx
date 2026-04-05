import { useEffect, useState, useRef, Suspense } from "react"
import PageTag from "./PageTag"
import PageWrapper from "../PageUI/PageWrapper"

function Page({
  id, 
  tag, 
  size, 
  focusTab, 
  opened, 
  focused, 
  closePopup, 
  topZIndex, 
  iconSrc, 
  desktopRef, 
  mousePos,
  draggingWindow, 
  setDraggingWindow,
  desktopManager}) {
  const [myPos, setMyPos] = useState({x: 0, y: 0})
  const [offset, setOffset] = useState({x: 0, y: 0})

  const pageRef = useRef(null)

  useEffect(() => {
    setMyPos({x: desktopRef.current.offsetWidth / 2 - pageRef.current.offsetWidth / 2, 
      y: desktopRef.current.offsetHeight / 2 - pageRef.current.offsetHeight / 2})
  }, [desktopRef])

  const handleMouseDown = () => {
    focusTab(id)
    setDraggingWindow(id)
    setOffset({x: mousePos.x - myPos.x, y: mousePos.y - myPos.y})
  }
  
  const handleMouseUp = () => {
    setMyPos({x: mousePos.x - offset.x, y: mousePos.y - offset.y})
    setDraggingWindow(0)
  }

  return <Suspense fallback="loading">
  <div className={`page ${opened ? "open" : "closed"}`}
  style={{
    width: size[0], 
    height: size[1],
    left: draggingWindow == id ? mousePos.x - offset.x : myPos.x,
    top: draggingWindow == id ? mousePos.y - offset.y : myPos.y,
    zIndex: focused && topZIndex,
    transition: draggingWindow == id ? "none" : "0.15s linear"
  }}
  ref={pageRef}
  >
    <PageTag tag={tag} 
      closePopup={closePopup} 
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      focused={focused}
      iconSrc={iconSrc}
    />
    <PageWrapper tag={tag} desktopManager={desktopManager} />
  </div>
  </Suspense>
}

export default Page