import MessageRoller from "./MessageRoller"

function PageContent({key, tag}) {
  if(tag == "About Me")
  return <div className="page-content">
    <div style={{textAlign: "center"}}>
      <h1>Welcome to localhost!</h1>
      <br />
      <span style={{fontFamily: "TimesB"}}>Message of the Day:</span>
    </div>
    <MessageRoller />
    <br />
    Hi, I'm mry, right now I'm a sophomore student majoring in CS, who only codes when he feels like it.
    <br />
    <br />
    I really like to play video games, and one of my dream is to make one my own.
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
    And here's some facts about me:
    <ul>
      <li>My favorite drink is black milk tea! (no sugar).</li>
      <li>I could play very very little guitar. (trying my best rn)</li>
    </ul>
  </div>
}

export default PageContent