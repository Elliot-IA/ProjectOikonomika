import env from "../env.js";

export default function Line({ angle, id, x, y }) {
  const styleColor = {
    backgroundColor: "black",
    width: `${env.lengthLine}px`,
    height: `${env.widthLine}px`,
    borderRadius: "5px",
    cursor: "pointer",
  };
  const stylePos = {
    padding: "4px 0px 4px 0px",
    left: `${x}px`,
    top: `${y}px`,
    transform: `rotate(${angle}deg)`,
  };
  return (
    <div id={id} className="moveable" style={stylePos}>
      <div style={styleColor}></div>
    </div>
  );
}
