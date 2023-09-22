export default function Key({ env }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
      <div
        style={{
          border: "1pt solid black",
          borderRadius: "5px",
          margin: "10px",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "20px 100px", alignItems: "center" }}>
          {items(env.macro)}
        </div>
      </div>
    </div>
  );
}

function items(macro) {
  if (macro) {
    return (
    <>
      <div style={{ width: "10px", height: "10px", backgroundColor: "red", margin: "5px" }}></div>
      <div className="not-selectable">Price Level</div>
      <div style={{ width: "10px", height: "10px", backgroundColor: "blue", margin: "5px" }}></div>
      <div className="not-selectable">Real GDP</div>
      <div style={{ width: "10px", height: "10px", backgroundColor: "black", margin: "5px" }}></div>
      <div className="not-selectable">Potential GDP</div>
    </>
    );
  }
  else {
    return (
    <>
      <div style={{ width: "10px", height: "10px", backgroundColor: "red", margin: "5px" }}></div>
      <div className="not-selectable">Supply</div>
      <div style={{ width: "10px", height: "10px", backgroundColor: "blue", margin: "5px" }}></div>
      <div className="not-selectable">Demand</div>
    </>
    );
  }
}
