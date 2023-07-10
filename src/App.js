import "./App.css";
import env from "./env.js";
import Graph from "./components/graph";
import Settings from "./components/settings";
import { useState } from "react";

function App() {
  const [envObject, setEnv] = useState(env);

  const handleEnvChange = (event) => {
    const { type, name, value } = event.target;
    if (type === "number") {
      if (Number(value) !== 0) {
        setEnv((prevObject) => ({ ...prevObject, [name]: Number(value) }));
      }
    } else {
      setEnv((prevObject) => ({ ...prevObject, [name]: value }));
    }
  };

  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <h1>Supply & Demand Live</h1>
      <Graph env={envObject}></Graph>
      <Settings env={envObject} setEnv={setEnv}></Settings>
    </div>
  );
}

export default App;
