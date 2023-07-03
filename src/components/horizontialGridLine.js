export default function HorizontialGridLine({ x, n }) {
  const style = (n) => {
    return {
      backgroundColor: "#eeeeee",
      width: "2px",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: `${(n + 1) * x}px`, //add 1 so first line is not at x=0
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
