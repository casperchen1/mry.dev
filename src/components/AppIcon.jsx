function AppIcon({key, name, src, selected, onClick, openPopups}) {
  const img = src;

  const selectFilter = "sepia(180%) saturate(800%) hue-rotate(190deg) brightness(90%) contrast(90%)"
  
  return <div className="app-icon">
    <img src={img} 
      alt="icon" 
      id="icon" 
      onClick={onClick}
      onDoubleClick={openPopups}
      style={{
        filter: selected ? selectFilter : "none"
      }}
    />
    <div className="label">{name}</div>
    </div>
}

export default AppIcon;