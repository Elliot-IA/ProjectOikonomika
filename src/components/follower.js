import useIntersect from "../hooks/useIntersect";

export default function Follower({ env, trackID }) {
  const stylePos = {
    backgroundColor: "white",
    width: "125px",
    height: "40px",
    borderRadius: "10px",
    position: "absolute",
    marginLeft: "30px",
    marginTop: "-10px",
    border: "1px solid black",
    textAlign: "center",
    userSelect: "none",
  };
  const titleStyle = {
    display: "block",
  };
  useIntersect("center2", trackID[0], trackID[1], env);

  return (
    <div id="center2" style={stylePos}>
      <u style={titleStyle}>
        Price: <span id="price">{/*document.getElementById("center").offsetLeft*/}</span>
      </u>

      <u style={titleStyle}>
        Quantity: <span id="quantity">{/*document.getElementById("center").offsetTop*/}</span>
      </u>
    </div>
  );
}
