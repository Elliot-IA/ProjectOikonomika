export default function VerticleGridLine({ y, n }) {
  const style = (n) => {
    return {
      backgroundColor: "#eeeeee",
      height: "2px",
      width: "100%",
      position: "absolute",
      top: `${(n + 1) * y}px`,
      left: "0px", //add 1 so first line is not at x=0
    };
  };

  return (
    <div>
      {[...Array(n).keys()].map((n) => (
        <div key={n} style={style(n)}></div>
      ))}
    </div>
  );
}
