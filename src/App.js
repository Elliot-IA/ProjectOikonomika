import "./App.css";
import Line from "./components/line";
import Point from "./components/point";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Line id={"line1"} angle={45}></Line>
        <Line id={"line2"} angle={-45}></Line>
        <Point trackID={["line1", "line2"]}></Point>
      </div>
    </div>
  );
}

export default App;
