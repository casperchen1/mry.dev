import MessageRoller from "./MessageRoller"
import tv from "../assets/tv.gif"
import game from "../assets/game.gif"
import disk from "../assets/disk.gif"
import cat from "../assets/cat.gif"
import avatar from "../assets/avatar.png"
import info from "../assets/info.png"

import free from "../assets/free.gif"
import ms from "../assets/microsoft.gif"
import win95 from "../assets/win95.gif"

function WiggleText({amp, time, texts, font, color}) {
  return <span>
    {texts.split("").map((char, i) => {
      return <span 
        key={i}
        style={{
        fontFamily: `${font}`,
        color: `${color}`,
        "--amp": `${amp}px`,
        animation: `wiggle ${time}s ease-in-out infinite`,
        animationDelay: `${i * 50}ms`,
        display: "inline-block"
      }}>
        {char === " " ? <span>&nbsp;</span> : char}
      </span>
    })}
  </span>
}

function PageContent({key, tag}) {
  if(tag == "About Me")
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
    <div className="title"><img src={game} alt="game" style={{width: "60px"}} /> Games that I like:</div>
    <div className="win-panel" style={{padding: "0px"}}>
      <ul>
        <li>Minecraft</li>
        <li>Undertale</li>
        <li>Omori</li>
        <li>Stardew Valley</li>
        <li>Elden Ring</li>
        <li>And a lot more...</li>
      </ul> 
    </div>
    <br />
    I enjoy anime and music a lot too, though i recently stop watching as much as before :(
    <br />
    <br />
    <div className="title"><img src={tv} alt="tv" style={{width: "60px"}} /> Animes I like:</div>
    <div className="win-panel" style={{padding: "0px"}}>
      <ul>
        <li>Chainsaw man</li>
        <li>JJK</li>
        <li>CPK</li>
        <li>Death Note</li>
        <li>Kimetsu no Yaiba</li>
      </ul>
    </div>
    <br />
    <div className="title"><img src={disk} alt="disk" style={{width: "60px"}} />And here are some facts about me:</div>
    <div className="win-panel" style={{padding: "0px"}}>
      <ul>
        <li>I'm from Taiwan.</li>
        <li>My favorite drink is {<WiggleText amp={1} time={1} texts="black milk tea" font="TimesB" color="#57392a"/>}! (no sugar)</li>
        <li>I could play very very little guitar. (trying my best rn)</li>
        <li>And I also like to play basketball.</li>
      </ul>
    </div>
    <br />
    <div className="box">
      <img src={cat} alt="cat" style={{width: "200px"}}/>
      <div style={{marginLeft: "20px"}}>
        <span style={{fontFamily: "TimesB"}}>“This website is made ugly intentionally, which is perfect since I have no artistic talent whatsoever” </span>
        <br />
        <span style={{fontFamily: "TimesB"}}>--proudly by me</span>
      </div>
    </div>
    <div style={{display: "flex", justifyContent: "right", gap: "5px"}}>
      <img src={win95} alt="" />
      <img src={ms} alt="" />
      <img src={free} alt="" />
    </div>
  </div>
}

export default PageContent