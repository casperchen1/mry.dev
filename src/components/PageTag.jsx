import { useState } from "react"

function PageTag({tag, 
  closePopup, 
  handleMouseDown,
  handleMouseUp,
  handleMouseMove,
  focused,
  iconSrc}) {
  const [closePressed, setClosePressed] = useState(false);

  return <div className={`page-tag ${focused ? "focused" : ""}`}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}>
    <img src={iconSrc} alt="icon" />
    {tag}
    <div 
      className={`close-btn ${closePressed ? "pressed" : ""}`}
      onClick={(e) => {
        closePopup(e)
      }}
      onMouseDown={() => {
        setClosePressed(true)
      }}
      onMouseUp={() => {
        setClosePressed(false)
      }}
    >
    <strong>X</strong>
    </div>
  </div>
}

export default PageTag