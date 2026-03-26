import Home from "./Home"
import AboutMe from "./AboutMe"

function PageContent({key, tag}) {
  if(tag == "Home") return <Home />
  
  else if(tag == "About Me") return <AboutMe />
}

export default PageContent