import MessageRoller from "./MessageRoller"
import tv from "../assets/tv.gif"
import game from "../assets/game.gif"
import disk from "../assets/disk.gif"
import cat from "../assets/cat.gif"
import avatar from "../assets/avatar.png"

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
    <div style={{textAlign: "center"}}>
      <h1>WELCOME TO MRY.DEV!</h1>
      <br />
      <WiggleText amp={1} time="0.8" texts="*Message of the Day*" font="Times"/>
    </div>
    <MessageRoller />
    <br />
    <br />
    <div style={{display: "flex", alignItems: "center"}}>
      <img src={avatar} alt="com" 
        style={{display: "inline-block",
        position: "relative",
        top: "-15px",
        width: "200px", 
        animation: "rotate 2.5s ease-in-out infinite"
      }}/>
      <div>
        Hi, I'm mry, right now I'm a sophomore student majoring in CS, who only codes when he feels like it.
        <br />
        <br />
        I really like to play video games, and one of my dreams is to make one my own.
        <br />
        <br />
      </div>
    </div>
    <div className="title"><img src={game} alt="game" style={{width: "60px"}} /> Games that I like:</div>
    <ul>
      <li>Minecraft</li>
      <li>Undertale</li>
      <li>Omori</li>
      <li>Stardew Valley</li>
      <li>Elden Ring</li>
      <li>And a lot more...</li>
    </ul> 
    <br />
    I enjoy anime and music a lot too, though i recently stop watching as much as before :(
    <br />
    <br />
    <div className="title"><img src={tv} alt="tv" style={{width: "60px"}} /> Animes I like:</div>
    <ul>
      <li>Chainsaw man</li>
      <li>JJK</li>
      <li>CPK</li>
      <li>Death Note</li>
      <li>Kimetsu no Yaiba</li>
    </ul>
    <br />
    <div className="title"><img src={disk} alt="disk" style={{width: "60px"}} />And here are some facts about me:</div>
    <ul>
      <li>I'm from Taiwan.</li>
      <li>My favorite drink is {<WiggleText amp={1} time={1} texts="black milk tea" font="TimesB" color="#57392a"/>}! (no sugar)</li>
      <li>I could play very very little guitar. (trying my best rn)</li>
      <li>And I also like to play basketball.</li>
    </ul>
    <br />
    <div className="box">
      <img src={cat} alt="cat" style={{width: "200px"}}/>
      <div>
        <span style={{fontFamily: "TimesB"}}>“If it ain't broke, don't fix it” </span>
        <br />
        <span style={{fontFamily: "TimesB"}}>--presumably my cat</span>
        <br />
        <span style={{fontFamily: "TimesB"}}>--on the left is not my cat</span>
      </div>
    </div>
  </div>
}

export default PageContent