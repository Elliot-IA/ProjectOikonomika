export default function VerticleGridLine({ id, x, y }) {
  const styleColor = {
    backgroundColor: "#eeeeee",
    width: "100%",
    height: "2px",
      position: "absolute" 
  };
  const stylePos = {
    padding: "4px 0px 4px 0px",
    marginLeft: `${x}px`,
    marginTop: `${y}px`,
  };
  return (
    <div id={id} style={stylePos}>
      <div style={styleColor}></div>
    </div>
  );
}