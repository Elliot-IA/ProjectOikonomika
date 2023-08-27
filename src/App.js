import "./App.css";
import env from "./env.js";
import Graph from "./components/graph";
import AdvancedSettings from "./components/advancedSettings";
import Settings from "./components/settings";
import queryString from "query-string";
import { useState, useEffect } from "react";

function App() {
  const [envObject, setEnv] = useState(env);

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    Object.keys(urlParams).forEach((key) => {
      if (key === "name") urlParams[key] = urlParams[key]
      else if (key === "macro") urlParams[key] = (urlParams[key]) === 'true'
      else urlParams[key] = Number(urlParams[key])
    });
    if (Object.keys(urlParams).length > 0) {
      setEnv({ ...urlParams });
    }
  }, []);

  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <h1 className="not-selectable">Supply & Demand Live</h1>
      <Graph env={envObject}></Graph>
      <Settings env={envObject} setEnv={setEnv}></Settings>
    </div>
  );
}

export default App;
