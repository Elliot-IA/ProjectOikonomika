import "./App.css";
import env from "./env.js";
import Grid from "./components/gird";

function App() {
  const width = env.width;
  const height = env.height;

  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <div>Supply & Demand Live</div>
      <Grid></Grid>
    </div>
  );
}

export default App;
