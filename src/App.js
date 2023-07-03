import "./App.css";
import Line from "./components/line";
import Point from "./components/point";
import VerticleGridLine from "./components/verticleGridLine";
import HorizontialGridLine from "./components/horizontialGridLine";

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
      <div className="container" style={size}>
        <VerticleGridLine y={width} n={numberY}></VerticleGridLine>
        <HorizontialGridLine x={width} n={numberX}></HorizontialGridLine>
        <Line id={"line1"} angle={45} x={0} y={500} l={600}></Line>
        <Line id={"line2"} angle={-45} x={0} y={500} l={600}></Line>
        <Point trackID={["line1", "line2"]}></Point>
      </div>
    </div>
  );
}

export default App;
