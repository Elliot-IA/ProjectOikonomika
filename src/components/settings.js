import queryString from "query-string";

export default function Settings({ env, setEnv }) {
  function setEnvHelper(name, value) {
    if (name === "xLabelsNum") {
      return { ...env, labelX: value, width: (value + 1) * env.lineWidth };
    }
    if (name === "yLabelsNum") {
      return { ...env, labelY: value, height: (value + 1) * env.lineWidth };
    }
    if (name === "space") {
      return {
        ...env,
        width: (env.labelX + 1) * value,
        height: (env.labelY + 1) * value,
        lineWidth: value,
        scaleX: (env.scaleX / env.lineWidth) * value,
        scaleY: (env.scaleY / env.lineWidth) * value,
      };
    }
    if (name === "scaleX") {
      return { ...env, scaleX: env.lineWidth * (1 / value) };
    }
    if (name === "scaleY") {
      return { ...env, scaleY: env.lineWidth * (1 / value) };
    }
  }

  const handleEnvChange = (event) => {
    const { type, name, value } = event.target;
    let setValue = {};
    if (type === "number") {
      if (Number(value) !== 0) {
        setValue = setEnvHelper(name, Number(value));
      }
    } else {
      setValue = { ...env, [name]: value };
    }
    if (Object.keys(setValue).length > 0) {
      setEnv(() => setValue);
      const encodedObject = queryString.stringify(setValue);
      window.history.pushState(null, "", `?${encodedObject}`);
    }
  };

  const values = [
    { name: "name", display: "Name", type: "text", fill: env.name },
    { name: "xLabelsNum", display: "Number of X labels", type: "number", fill: env.labelX },
    { name: "yLabelsNum", display: "Number of Y labels", type: "number", fill: env.labelY },
    { name: "space", display: "Line Space (px)", type: "number", fill: env.lineWidth },
    {
      name: "scaleX",
      display: "Scale X",
      type: "number",
      fill: env.width / (env.labelX + 1) / env.scaleX,
    },
    { name: "scaleY", display: "Scale Y", type: "number", fill: env.height / (env.labelY + 1) / env.scaleY },
  ];
  return (
    <div>
      {values.map((item) => (
        <Item
          key={item.name}
          display={item.display}
          name={item.name}
          type={item.type}
          fill={item.fill}
          handleEnvChange={handleEnvChange}
        />
      ))}
    </div>
  );
}

function Item({ display, name, handleEnvChange, type, fill }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "10px" }}>{display + ":"}</div>
      <input type={type} name={name} onChange={handleEnvChange} placeholder={fill} />
    </div>
  );
}
