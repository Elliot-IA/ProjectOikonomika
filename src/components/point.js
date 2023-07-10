import useIntersect from "../hooks/useIntersect";

export default function Point({ env, trackID }) {
  const style = {
    backgroundColor: "red",
    width: `${2 * env.radiusBall}px`,
    height: `${2 * env.radiusBall}px`,
    borderRadius: `${env.radiusBall}px`,
    position: "absolute",
  };
  useIntersect("center", trackID[0], trackID[1], env);
  return <div id="center" style={style}></div>;
}
