import "./App.css";
import Line from "./components/line";
import Point from "./components/point";
import VerticleGridLine from "./components/verticleGridLine";
import HorizontialGridLine from "./components/horizontialGridLine";
import Follower from "./components/follower";
import xyText from "./components/xyText";

function App() {
  const size = {
    height: "800px",
    width: "800px",
  };
  const width = 25;
  const numberY = Math.floor(parseInt(size.height) / width);
  const numberX = Math.floor(parseInt(size.width) / width);
  return (
    <div className="App">
      <div className="textHeader">Supply & Demand Live</div>

      <div style={{ display: "Grid", gridTemplateColumns: "30px auto", gap: "2px" }}>
        <div
          style={{
            width: "30px",
            height: size.height,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "100px" }}></div>
          {[...Array(7).keys()].map((n) => (
            <div key={n} style={{ textAlign: "right", height: "100px" }}>
              {7 - n}
            </div>
          ))}
        </div>
        <div className="container" style={size}>
          <VerticleGridLine y={width} n={numberY}></VerticleGridLine>
          <HorizontialGridLine x={width} n={numberX}></HorizontialGridLine>
          <Line id={"line1"} angle={45} x={0} y={500} l={600}>
            Supply
          </Line>
          <Line id={"line2"} angle={-45} x={0} y={500} l={600}>
            Demand
          </Line>
          <Point trackID={["line1", "line2"]}></Point>
          <Follower trackID={["line1", "line2"]}></Follower>
        </div>
        <div style={{ width: "30px", height: "30px" }}></div>
        <div
          style={{
            width: size.height,
            height: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100px" }}></div>
          {[...Array(7).keys()].map((n) => (
            <div key={n} style={{ width: "100px" }}>
              {n + 1}
            </div>
          ))}
        </div>
      </div>

      <div id="quantityLegend">Quantity of Strawberries</div>
      <div id="priceLegend">Price of Strawberries</div>
    </div>
  );
}

export default App;
