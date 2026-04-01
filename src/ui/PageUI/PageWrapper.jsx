import Home from "../../pages/Home"
import AboutMe from "../../pages/AboutMe"

function PageWrapper({key, tag}) {
  if(tag == "Home") return <Home />
  
  else if(tag == "About Me") return <AboutMe />
}

export default PageWrapper