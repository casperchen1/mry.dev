import { useRef } from "react"

import AppIcon from "../ui/DesktopUI/AppIcon.jsx"
import Page from "../ui/DesktopUI/Page.jsx"
import ToolBar from "../ui/DesktopUI/ToolBar.jsx" 

import { useDesktopManager } from "../hooks/useDesktopManager.js"

import { icons, pages } from "../constants/desktopConfig.js"

function Desktop() {
  const desktopManager = useDesktopManager(icons.length)

  const desktopRef = useRef(null)

  return <div 
    className="desktop"
    onClick={() => desktopManager.setSelectedIcon(null)}
    onMouseMove={desktopManager.handleMouseMove}
    onMouseUp={() => { desktopManager.setDraggingWindow(0)} }
    ref={desktopRef}
    >
      <span style={{position: "absolute", right: "10px"}}> (c) 2026 mry. All Rights Reserved.</span>
    {icons.map(icon => (
        <AppIcon 
          key={icon.id}
          name={icon.name} 
          src={icon.src}
          selected={desktopManager.selectedIcon === icon.id}
          onClick={(e) => {
            e.stopPropagation()
            desktopManager.setSelectedIcon(icon.id)
          }}
          openPopups={desktopManager.openPopups(icon.id)}
        />
    ))}

    {pages.map(page => (
      <Page 
        key={page.id}
        id={page.id}
        tag={page.tag}
        size={[page.size.width, page.size.height]}
        focused={desktopManager.focusedTab == page.id}
        focusTab={desktopManager.focusTab}
        opened={desktopManager.activePopups[page.id - 1]}
        closePopup={(e) => {
          e.stopPropagation()
          desktopManager.closePopup(page.id)
        }}
        mousePos={desktopManager.mousePos}
        topZIndex={desktopManager.topZIndex}
        iconSrc={page.icon.src}
        desktopRef={desktopRef}
        draggingWindow={desktopManager.draggingWindow}
        setDraggingWindow={desktopManager.setDraggingWindow}
      />
    ))}

    <ToolBar 
      pages={pages.map(page => (
        {tag: page.tag, icon: page.icon}
      ))}
      activeTabs={desktopManager.activeTabs}
      focusedTab={desktopManager.focusedTab}
      focusTab={desktopManager.focusTab}
    />
  </div>
}

export default Desktop
