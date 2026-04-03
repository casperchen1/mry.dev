import com from "../assets/com.png"
import networks from "../assets/networks.png"
import projects from "../assets/bin.png"
import journal from "../assets/journal.png"
import internet from "../assets/internet.png"


export const icons = [
  { id: 1, name: "Home", src: com},
  { id: 2, name: "Connects", src: networks},
  { id: 3, name: "Projects", src: projects},
  { id: 4, name: "About Me", src: internet}
]

export const pages = [
  { id: 1, tag: "Home", size: { width: "600px", height: "450px" }, icon: icons[0] },
  { id: 2, tag: "Connects", size: { width: "800px", height: "500px" }, icon: icons[1] },
  { id: 3, tag: "Projects", size: { width: "800px", height: "500px" }, icon: icons[2] },
  { id: 4, tag: "About Me", size: { width: "800px", height: "600px" }, icon: icons[3] }
]