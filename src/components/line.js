export default function Line({ angle, id }) {
  const style = {
    backgroundColor: "black",
    width: "300px",
    height: "10px",
    borderRadius: "5px",
    transform: `rotate(${angle}deg)`,
  };
  return <div id={id} className="moveable" style={style}></div>;
}
