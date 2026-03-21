function Tab({name, handleClick, focused, iconSrc}) {
  return <div 
    className={`tab ${focused ? "focused" : ""}`}
    onClick={handleClick}
  >
    <img src={iconSrc} alt="icon" />
    {name}
  </div>
}

export default Tab