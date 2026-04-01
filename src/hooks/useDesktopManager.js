import { useState } from "react";

export function useDesktopManager(appCount) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [activePopups, setActivePopups] = useState(Array(appCount).fill(false))
  
  const [activeTabs, setActiveTabs] = useState([])
  
  const [focusedTab, setFocusedTab] = useState(0)
  
  const [topZIndex, setTopZIndex] = useState(100)

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
    selectedIcon,
    setSelectedIcon,
    activePopups,
    setActivePopups,
    activeTabs,
    setActiveTabs,
    focusedTab,
    setFocusedTab,
    topZIndex,
    setTopZIndex,
    openPopups,
    closePopup,
    focusTab
  }
}