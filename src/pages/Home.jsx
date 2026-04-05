import leftPanel from "../assets/leftpanel.png"
import info from "../assets/info.png"
import lightbulb from "../assets/lightbulb.png"

import { WindowButton } from "../ui/PageUI/WindowButton"

import { tips } from "../constants/welcomeTips"

import { randomItem } from "../utils/randomItem"
import { defaultPageID } from "../constants/desktopConfig"
import { useEffect, useState } from "react"

function Home({desktopManager}) {
  const [tip, setTip] = useState("")

  const randomTip = () => {
    setTip(tips[Math.floor(Math.random() * tips.length)])
  }

  useEffect(randomTip, [])

  return <div className="page-content" style={{fontFamily: "W95FA", overflow: "hidden", border: "none"}}>
    <div style={{display: "flex", gap: "20px", alignItems: "flex-start", height: "100%"}}>
      <img src={leftPanel} alt="" style={{width: "160px"}} />
      <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <span style={{
          color: "rgb(0, 0, 122)",
          fontFamily: "SS",
          fontSize: "28px",
          marginTop: "0.67em",
          marginBottom: "0.67em"
          }}>WELCOME TO <strong>MRY.DEV!</strong>
        </span>
          <div className="tab" style={{maxHeight: "20px", margin: "0px", maxWidth: "130px"}}>
            <img src={info} alt="info" style={{width: "30px", objectFit: "cover"}} />
            Message
          </div>
        <div className="win-panel" style={{backgroundColor: "#FFFFF0"}}>
          This is my personal website that I made as a passion project, as well as making a platform to share pieces of my life.
          <br />
          <br />
          As for the theme, I'm very bad at drawing assets anyways, so I thought going with this is actually a very good choice,
          since I could cover my bad drawings with crappy filter and it wouldn't feel weird.
          <br />
          <br />
          Anyways, hope you have fun exploring this website!
          <br />
          <br />
          <div style={{
            display: "flex",
            gap: "12px",
            justifyContent: "left",
            alignItems: "flex-start"
          }}>
            <img src={lightbulb} alt="" style={{width: "20px", height: "20px", objectFit: "contain"}} />
            <div style={{maxWidth: "90%"}}>
            <strong>Did you know...</strong>
            <br />
            <br />
            {tip}
            </div>
          </div>
        </div>
        <hr style={{
          borderBottom: "1px solid #ffffff",
          borderTop: "1px solid #a9a9a9",
          width: "100%",
          marginTop: "auto"
        }} />
        <div style={{
          display: "flex",
          justifyContent: "right",
          gap: "12px",
          padding: "0px 20px"
        }}>
          <WindowButton text="More Tips" handleClick={() => setTip(randomItem(tips))} />
          <WindowButton text="Close" handleClick={() => {desktopManager.closePopup(defaultPageID)}} />
        </div>
      </div>
    </div>
  </div>
}

export default Home