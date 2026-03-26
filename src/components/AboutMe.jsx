import banner from "../assets/banner.png"

function AboutMe() {
  return <div className="page-content" 
  style={{backgroundImage: "url(/src/assets/omori_bg3.png)",
    backgroundSize: "30%"
  }}>
    <div className="container">
        <img src={banner} alt="" style={{width: "350px"}} />
        <div className="content">
          <div className="flexbox" style={{width: "150px", marginTop: "20px"}}>
            <div className="block">
              <div className="tag">navigation</div>
              Home
              <br />
              About Me 
              <br />
              Blog
            </div>
            <div className="block">
              <div className="tag">my status</div>
            </div>
          </div>
          <div className="flexbox" style={{width: "300px", marginTop: "20px"}}>
            <div className="block">
              <div className="tag">navigation</div>
            </div>
            <div className="block">
              <div className="tag">my status</div>
            </div>
          </div>
        </div>
    </div>
  </div>
}

export default AboutMe