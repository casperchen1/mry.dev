import { useState } from "react"
import nukoForwardRoll from "../assets/nukoForwardRoll.gif"

import NavButton from "../ui/PageUI/NavButton"

function AboutMe() {
  const [currentPage, setCurrentPage] = useState("Home") 

  return <div className="page-content" 
  style={{backgroundImage: "url(/src/assets/omori_bg3.png)",
    backgroundSize: "30%"
  }}>
    <div className="container">
      <div className="banner"><span style={{fontFamily: "Times", fontSize: "50px"}}>Mry's Room</span></div>
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "stretch"
      }}>
        <div className="flexbox">
          <div className="block" style={{backgroundColor: "#DCE6F7", padding: "6px 6px 30px 6px", gap: "10px"}}>
            Menu
            <NavButton label="Home" />
            <NavButton label="About Me" />
            <NavButton label="Blog" />
            <NavButton label="Gallery" />
            <img src={nukoForwardRoll} alt="" style={{position: "absolute", left: "0", bottom: "0", width: "100%"}} />
          </div>
          <div className="block" style={{flex: 0, backgroundColor: "#DCE6F7", padding: "6px 6px 30px 6px", gap: "10px"}}>
            My Status
          </div>
        </div>
        <div className="flexbox" style={{flex: "3"}}>
          <div className="block" style={{gap: "10px"}}>
            <strong>Home</strong>
            You may be wondering: "why the hell would you put a personal webiste inside your personal website?"
            <br />
            Well I got inspired by those websites hosted on nekoweb, and didn't want to discard my original idea, so here we are :)
            <br />
            Anyways, this is the place where I would be talking more about myself!
            <br />
            <hr />
            <span>Here are some quick facts about me:</span>
            <ul style={{marginBlockStart: "2px"}}>
              <li>I'm fron Taiwan</li>
              <li>My favorite drink is milk tea (no sugar)</li>
            </ul>
            <hr />
            <strong>Update Log</strong>
            <div className="text-box">
              <strong>2026/03/27</strong>: This page was created!
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="block"></div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  </div>
}

export default AboutMe