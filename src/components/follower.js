import useIntersect from "../hooks/useIntersect2";

export default function Follower({ trackID }){
  const stylePos = {
    color: "blue",
    backgroundColor: "white",
    width: "200px",
    height: "100px",
    borderRadius: "10px",
      margin: "5px",
    position: "absolute",
      marginTop: "-110px",
      marginLeft: "-40px",
      border: "1px solid black",
      textAlign: "center",
      userSelect: "none",
      fontSize: "30px"
  };
  const titleStyle = {
    display: "block"
  }
  //useDragger([trackID[0]]);
  //useDragger([trackID[1]]);
  useIntersect("center2", trackID[0], trackID[1]);
  //return <div  style={stylePos}></div>;
    
  return (
    <div id="center2" style={stylePos}>
    
      <u style={titleStyle}>Supply: <span id="pasta">{/*document.getElementById("center").offsetLeft*/}</span></u>
    
      <u style={titleStyle}>Demand: <span id="pizza">{/*document.getElementById("center").offsetTop*/}</span></u>
    </div>
  );
}