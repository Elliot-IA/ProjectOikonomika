import env from "../env.js";
import Canvas from "./canvas";

export default function Grid() {
  const width = env.width;
  const height = env.height;

  return (
    <div style={{ display: "Grid", gridTemplateColumns: "30px auto", gap: "2px" }}>
      <div
        style={{
          height: `${env.height}px`,
          width: "30px",
          writingMode: "vertical-lr",
          transform: "rotate(-180deg)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Price
      </div>
      <Canvas></Canvas>
      <div style={{ height: "30px", width: "30px" }}>{/*SPACER*/}</div>
      <div
        style={{
          height: "30px",
          width: `${env.width}px`,
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Quantity
      </div>
    </div>
  );
}
