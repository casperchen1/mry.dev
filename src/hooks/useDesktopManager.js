import { useState } from "react";

export function useDesktopManager(appCount) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [activePopups, setActivePopups] = useState(Array(appCount).fill(false))

  const [mousePos, setMousePos] = useState({x: 0, y: 0})
  const [draggingWindow, setDraggingWindow] = useState(0)
  
  const [activeTabs, setActiveTabs] = useState([])
  
  const [focusedTab, setFocusedTab] = useState(0)
  
  const [topZIndex, setTopZIndex] = useState(100)

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const openPopups = (id) => { 
    return () => {
      setFocusedTab(id)

      setActivePopups(prev => {
        const next = [...prev]
        next[id - 1] = true;
        return next
      })

      setActiveTabs(prev => 
        prev.includes(id) ? prev : [...prev, id]
      )
    }
  }

  const closePopup = (id) => {
    setActivePopups(prev => {
      const next = [...prev]
      next[id - 1] = false
      return next
    })
    
    setActiveTabs(prev => prev.filter(tab => tab !== id))
  }

  const focusTab = (id) => {
    setFocusedTab(id)
    setTopZIndex(topZIndex + 1)
  }

  return {
    mousePos,
    handleMouseMove,
    selectedIcon,
    setSelectedIcon,
    activePopups,
    setActivePopups,
    activeTabs,
    setActiveTabs,
    draggingWindow, 
    setDraggingWindow,
    focusedTab,
    topZIndex,
    openPopups,
    closePopup,
    focusTab
  }
}