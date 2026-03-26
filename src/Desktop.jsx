import { useEffect, useRef, useState } from "react"
import "./App.css"
import AppIcon from "./components/DesktopUI/AppIcon.jsx"
import Page from "./components/DesktopUI/Page.jsx"
import ToolBar from "./components/DesktopUI/ToolBar.jsx" 

import com from "./assets/com.png"
import networks from "./assets/networks.png"
import projects from "./assets/bin.png"
import journal from "./assets/journal.png"

function Desktop() {
  const icons = [
    { id: 1, name: "Home", src: com},
    { id: 2, name: "Connects", src: networks},
    { id: 3, name: "Projects", src: projects},
    { id: 4, name: "About Me", src: journal}
  ]

  const pages = [
    {id: 1, tag: "Home", size: {width: "600px", height: "400px"}, icon: icons[0]},
    {id: 2, tag: "Connects", size: {width: "800px", height: "500px"}, icon: icons[1]},
    {id: 3, tag: "Projects", size: {width: "800px", height: "500px"}, icon: icons[2]},
    {id: 4, tag: "About Me", size: {width: "960px", height: "540px"}, icon: icons[3]}
  ]

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [activePopups, setActivePopups] = useState(Array(icons.length).fill(false))

  const [activeTabs, setActiveTabs] = useState([])

  const [focusedTab, setFocusedTab] = useState(0)

  const [topZIndex, setTopZIndex] = useState(100)

  const desktopRef = useRef(null)

  function openPopups(id) { 
    return () => {
      setFocusedTab(id)
      setActivePopups(prev => {
        const newArr = [...prev]
        newArr[id - 1] = true;
        return newArr
      })
      setActiveTabs(prev => {
        const arr = [...prev]
        if(!prev.includes(id)) {
          arr.push(id)
        }
        return arr
      })
    }
  }

  useEffect(() => {
    openPopups(1)()
  } ,[])

  return <div 
    className="desktop"
    onClick={() => setSelectedIcon(null)}
    ref={desktopRef}
    >
      <span style={{position: "absolute", right: "10px"}}> (c) 2026 mry. All Rights Reserved.</span>
    {icons.map(icon => (
        <AppIcon 
          key={icon.id}
          name={icon.name} 
          src={icon.src}
          selected={selectedIcon === icon.id}
          onClick={(e) => {
            e.stopPropagation()
            setSelectedIcon(icon.id)
          }}
          openPopups={openPopups(icon.id)}
        />
    ))}

    {pages.map(page => (
      <Page 
        key={page.id}
        tag={page.tag}
        size={[page.size.width, page.size.height]}
        focused={focusedTab === page.id}
        setFocused={() => {
          setFocusedTab(page.id)
          setTopZIndex(topZIndex + 1)
        }}
        opened={activePopups[page.id - 1]}
        closePopup={(e) => {
          e.stopPropagation()
          setActivePopups(prev => {
            const newArr = [...prev]
            newArr[page.id - 1] = false
            return newArr
          })
          setActiveTabs(prev => {
            const newArr = prev.filter(tab => tab !== page.id)
            return newArr
          })
        }}
        topZIndex={topZIndex}
        iconSrc={page.icon.src}
        desktopRef={desktopRef}
      />
    ))}

    <ToolBar 
      pages={pages.map(page => (
        {tag: page.tag, icon: page.icon}
      ))}
      activeTabs={activeTabs}
      focusedTab={focusedTab}
      setFocusedTab={setFocusedTab}
    />
  </div>
}

export default Desktop
