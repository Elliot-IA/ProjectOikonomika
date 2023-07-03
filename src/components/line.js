export default function Line({ angle, id, x, y, l }) {
  const styleColor = {
    backgroundColor: "black",
    width: `${l}px`,
    height: "10px",
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
