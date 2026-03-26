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

export default WiggleText