import "./App.css";
import useDragger from "./hooks/useDragger";
import Line from "./components/line";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Line id={"line1"} angle={45}></Line>
        <Line id={"line2"} angle={-45}></Line>
      </div>
    </div>
  );
}

export default App;
