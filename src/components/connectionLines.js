export default function ConnectionLines({ trackID }) {
  const style = {
    position: "absolute",
    border: "1px solid black",
    width: "0px",
    top: "400px",
  };
  return (
    <div>
      <div id="side" style={style}></div>
      <div id="up" style={style}></div>
    </div>
  );
}
