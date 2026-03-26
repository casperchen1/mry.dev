import cat from "../assets/cat.gif"
import avatar from "../assets/avatar.png"
import info from "../assets/info.png"

import free from "../assets/free.gif"
import computer from "../assets/computer.gif"
import win95 from "../assets/win95.gif"

import MessageRoller from "./MessageRoller"
import WiggleText from "./WiggleText"

function Home() {
  return <div className="page-content">
    <div style={{textAlign: "center", color: "rgb(0, 0, 122)"}}>
      <h1>WELCOME TO MRY.DEV!</h1>
      <br />
      <WiggleText amp={1} time="0.8" texts="*Message of the Day*" font="Times" color="black" />
    </div>
    <MessageRoller />
    <br />
    <br />
    <div style={{display: "flex", alignItems: "center"}}>
      <img src={avatar} 
        alt="avatar" 
        id="avatar"
        style={{display: "inline-block",
        position: "relative",
        width: "200px", 
        animation: "rotate 2.5s ease-in-out infinite"
      }}/>
      <div style={{display: "flex", flexDirection: "column"}}>
          <div className="tab" style={{maxHeight: "20px", margin: "0px", maxWidth: "130px"}}>
            <img src={info} alt="info" style={{width: "30px", objectFit: "contain"}} />
            Introduction
          </div>
        <div className="win-panel">
          Hi, I'm mry, right now I'm a sophomore student majoring in CS, who only codes when he feels like it.
          <br />
          <br />
          I really like to play video games, and one of my dreams is to make one my own.
          <br />
          <br />
        </div>
      </div>
    </div>
    <br />
    <div className="box">
      <div>
        <span style={{fontFamily: "TimesB"}}>“This website is made ugly intentionally, which is perfect since I have no artistic talent whatsoever” </span>
        <br />
        <span style={{fontFamily: "TimesB"}}>--proudly by me</span>
      </div>
      <img src={cat} alt="cat" style={{width: "200px"}}/>
    </div>
    <br />
    <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
      <img src={win95} alt="" />
      <img src={computer} alt="" />
      <img src={free} alt="" />
    </div>
  </div>
}

export default Home