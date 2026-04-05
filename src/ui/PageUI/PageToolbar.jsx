export default function PageToolbar() {
  return <div className="flexbox" style={{fontFamily: "W95FA"}}>
    <div className="page-toolbar">
      <span><u>F</u>ile</span>
      <span><u>E</u>dit</span>
      <span><u>V</u>iew</span>
      <span><u>G</u>o</span>
      <span><u>F</u>avorites</span>
      <span><u>H</u>elp</span>
    </div>
      
    <div className="page-toolbar">
        test
    </div>
    
    <div style={{display: "flex"}}>
    <div className="page-toolbar">
        Adress
    </div>
    <div className="win-panel"
    style={{margin: "4px", width: "100%", padding: "0px 2px", fontSize: "14px"}}
    >
      https://mry.dev/about-me
    </div>
    </div>
    
  </div>
}