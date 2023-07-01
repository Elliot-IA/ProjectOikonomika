export default function HorizontialGridLine({ id, x, y }) {
  const styleColor = {
    backgroundColor: "#eeeeee",
    width: "2px",
    height: "100%",
      position: "absolute",
      top: "0px"
  };
  const stylePos = {
    padding: "4px 0px 4px 0px",
    marginLeft: `${x}px`,
    marginTop: `${x}px`,
  };
  return (
    <div id={id} style={stylePos}>
      <div style={styleColor}></div>
    </div>
  );
}