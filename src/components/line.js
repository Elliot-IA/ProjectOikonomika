import env from "../env.js";

export default function Line({ angle, id, color }) {
  const styleColor = {
    backgroundColor: color,
    width: `${env.lengthLine}px`,
    height: `${10}px`,
    borderRadius: "5px",
    cursor: "pointer",
  };
  const stylePos = {
    padding: "4px 0px 4px 0px",
    transform: `rotate(${angle}deg)`,
  };
  return (
    <div id={id} className="moveable" style={stylePos}>
      <div style={styleColor}></div>
    </div>
  );
}
