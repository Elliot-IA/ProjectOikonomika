const env = {
  //size of canvas
  width: 650,
  height: 650,
  //space between grid lines (lineWidth should divide width and height)
  lineWidth: 50,
  // numberY = Math.floor(height / lineWidth);
  // numberX = Math.floor(width / lineWidth);

  //number of labels (labelD+1 should divide width/lineWidth)
  labelX: 12,
  labelY: 12,

  //cords are divided by scale
  scaleY: 25,
  scaleX: 50,

  //length of line
  lengthLine: 1202, //should be Math.floor((min(env.labelX, env.labelY)+5)*Math.sqrt(2)*lineWidth),
  widthLine: 18,

  //ball radius
  radiusBall: 10,

  //names
  name: "",
};

export default env;
