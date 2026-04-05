import Home from "../../pages/Home"
import AboutMe from "../../pages/AboutMe"

function PageWrapper({tag, desktopManager}) {
  if(tag == "Home") return <Home desktopManager={desktopManager}/>
  
  else if(tag == "About Me") return <AboutMe />
}

export default PageWrapper