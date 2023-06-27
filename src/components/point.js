import useDragger from "../hooks/useDragger";
import useIntersect from "../hooks/useIntersect";

export default function Point({ trackID }) {
  const style = {
    backgroundColor: "red",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    position: "absolute",
  };
  //useDragger([trackID[0]]);
  //useDragger([trackID[1]]);
  useIntersect("center", trackID[0], trackID[1]);
  return <div id="center" style={style}></div>;
}
