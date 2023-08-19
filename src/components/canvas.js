import Line from "./line";
import Point from "./point";
import GridLine from "./gridLine";
import Follower from "./follower";
import Numbers from "./numbers";
import ConnectionLines from "./connectionLines";
import Key from "./key.js";

export default function Canvas({ env }) {
  const width = env.width;
  const height = env.height;
  const offset = ((Math.sqrt(2) / 2) * env.lengthLine) / 2;

  return (
    <div style={{ width: `${width + 80}px`, height: `${height + 20}px`, position: "relative" }}>
      <Numbers env={env}></Numbers>
      <div
        className="container"
        style={{ width: `${width}px`, height: `${height}px`, left: "80px", top: "0px", position: "absolute" }}
      >
        <GridLine env={env}></GridLine>
        <Key></Key>
        <ConnectionLines></ConnectionLines>
        <Line
          id={"demand"}
          angle={45}
          color={"blue"}
        ></Line>
        <Line
          id={"supply"}
          angle={-45}
          color={"red"}
        ></Line>
        <Point env={env} trackID={["demand", "supply"]}></Point>
        <Follower env={env} trackID={["demand", "supply"]}></Follower>
      </div>
    </div>
  );
}
