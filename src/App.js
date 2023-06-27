import "./App.css";
import useDragger from "./hooks/useDragger";

function App() {
  useDragger("pink-box");

  return (
    <div className="App">
      <div className="container">
        <div id="pink-box" className="box"></div>
      </div>
    </div>
  );
}

export default App;
