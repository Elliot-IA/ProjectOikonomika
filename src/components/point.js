import useIntersect from "../hooks/useIntersect";
import env from "../env";

export default function Point({ trackID }) {
  const style = {
    backgroundColor: "red",
    width: `${2 * env.radiusBall}px`,
    height: `${2 * env.radiusBall}px`,
    borderRadius: `${env.radiusBall}px`,
    position: "absolute",
  };
  useIntersect("center", trackID[0], trackID[1]);
  return <div id="center" style={style}></div>;
}
