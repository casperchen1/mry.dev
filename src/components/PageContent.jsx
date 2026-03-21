import MessageRoller from "./MessageRoller"
import clouds from "../assets/clouds.png"

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
      <WiggleText amp={1} time="0.8" texts="Message of the Day" font="Times"/>
    </div>
    <MessageRoller />
    <br />
    <br />
    Hi, I'm mry, right now I'm a sophomore student majoring in CS, who only codes when he feels like it.
    <br />
    <br />
    I really like to play video games, and one of my dreams is to make one my own.
    <br />
    <br />
    Games that I like:
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
    Animes I like:
    <ul>
      <li>Chainsaw man</li>
      <li>JJK</li>
      <li>CPK</li>
      <li>Death Note</li>
    </ul>
    <br />
    And here's some facts about me:
    <ul>
      <li>I'm from Taiwan.</li>
      <li>My favorite drink is {<WiggleText amp={1} time={1} texts="black milk tea" font="TimesB" color="#57392a"/>}! (no sugar)</li>
      <li>I could play very very little guitar. (trying my best rn)</li>
      <li>And I also like to play basketball.</li>
    </ul>
  </div>
}

export default PageContent