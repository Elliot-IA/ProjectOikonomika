export default function Line({ angle, id, x, y }) {
  const style = {
    backgroundColor: "black",
    width: "300px",
    height: "10px",
    borderRadius: "5px",
    left: `${x}px`,
    top: `${y}px`,
    transform: `rotate(${angle}deg)`,
  };
  return <div id={id} className="moveable" style={style}></div>;
}
