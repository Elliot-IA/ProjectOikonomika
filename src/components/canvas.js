import Line from "./line";
import Point from "./point";
import GridLine from "./gridLine";
import Follower from "./follower";
import Numbers from "./numbers";
import ConnectionLines from "./connectionLines";
import env from "../env.js";

export default function Canvas() {
  const width = env.width;
  const height = env.height;

  return (
    <div style={{ width: `${width + 20}px`, height: `${height + 20}px`, position: "relative" }}>
      <Numbers></Numbers>
      <div
        className="container"
        style={{ width: `${width}px`, height: `${height}px`, left: "20px", top: "0px", position: "absolute" }}
      >
        <GridLine></GridLine>
        <ConnectionLines></ConnectionLines>

        <Line id={"demand"} angle={45} x={-100} y={400 - 9}></Line>
        <Line id={"supply"} angle={-45} x={-100} y={400 - 9}></Line>
        <Point trackID={["demand", "supply"]}></Point>
        <Follower trackID={["demand", "supply"]}></Follower>
      </div>
    </div>
  );
}
