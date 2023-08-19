import { useEffect, useRef } from "react";

function useDragger(centerID, id1, id2, env) {
  const isClicked1 = useRef(false);
  const isClicked2 = useRef(false);

  const coords1 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords2 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords = useRef({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    //gets targets
    const target1 = document.getElementById(id1);
    const target2 = document.getElementById(id2);
    const center = document.getElementById(centerID);
    const container = target1.parentElement;

    //other items
    const follower = document.getElementById("center2");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const side = document.getElementById("side");
    const up = document.getElementById("up");

    coords.x1 = target1.offsetLeft;
    coords.y1 = target1.offsetTop;
    coords.x2 = target2.offsetLeft;
    coords.y2 = target2.offsetTop;

    //func to do math to find center
    const moveIntersect = () => {

      const centers = getCenter(coords, env);
      const centerX = centers[0];
      const centerY = centers[1];

      center.style.top = `${centerY-10}px`;
      center.style.left = `${centerX-10}px`;
      //10 is width of ball/2

      price.innerHTML = ((env.height - centerY) / env.scaleY).toFixed(2);
      quantity.innerHTML = (centerX / env.scaleX).toFixed(2);

      side.style.width = `${centerX}px`;
      side.style.top = `${centerY - 1}px`;
      up.style.left = `${centerX-1}px`;
      up.style.top = `${centerY}px`;
      up.style.height = `${env.height - centerY}px`;
      
      follower.style.top = `${centerY}px`;
      follower.style.left = `${centerX}px`;
      if (centerX < 0.75 * env.width) follower.style.marginLeft = '40px';
      else follower.style.marginLeft = '-165px';
      
    };
    //initialize center



    moveIntersect();

    //saves initial positions
    coords1.current.lastX = target1.offsetLeft;
    coords1.current.lastY = target1.offsetTop;
    coords2.current.lastX = target2.offsetLeft;
    coords2.current.lastY = target2.offsetTop;

    //when clicked save pos of click
    const onMouseDown1 = (e) => {
      isClicked1.current = true;
      coords1.current.startX = e.clientX;
      coords1.current.startY = e.clientY;
      container.addEventListener("mouseleave", onMouseUp1);
    };
    //when let go save pos
    const onMouseUp1 = (e) => {
      
      isClicked1.current = false;

      const nextY = target1.offsetTop;
      const nextX = target1.offsetLeft;

      target1.style.top = `${nextY}px`;
      target1.style.left = `${nextX}px`;
      coords.x1 = nextX;
      coords.y1 = nextY;
      coords1.current.lastX = target1.offsetLeft;
      coords1.current.lastY = target1.offsetTop;

      moveIntersect()
      container.removeEventListener("mouseleave", onMouseUp1);
    };
    //when moved, set pos to last pos plus change in mouse from start
    const onMouseMove1 = (e) => {
      if (!isClicked1.current) return;

      let nextX = e.clientX - coords1.current.startX + coords1.current.lastX;
      let nextY = e.clientY - coords1.current.startY + coords1.current.lastY;
      
      target1.style.top = `${nextY}px`;
      target1.style.left = `${nextX}px`;
      coords.x1 = nextX;
      coords.y1 = nextY;
      moveIntersect();
    };
    //same as above. I tried for about an hour ro combine these but could not
    const onMouseDown2 = (e) => {
      isClicked2.current = true;
      coords2.current.startX = e.clientX;
      coords2.current.startY = e.clientY;
      container.addEventListener("mouseleave", onMouseUp2);
    };
    const onMouseUp2 = (e) => {
      isClicked2.current = false;

      const nextY = target2.offsetTop;
      const nextX = target2.offsetLeft;
      
      target2.style.top = `${nextY}px`;
      target2.style.left = `${nextX}px`;
      coords.x2 = nextX;
      coords.y2 = nextY;
      coords2.current.lastX = target2.offsetLeft;
      coords2.current.lastY = target2.offsetTop;

      moveIntersect()
      container.removeEventListener("mouseleave", onMouseUp2);
    };
    const onMouseMove2 = (e) => {
      if (!isClicked2.current) return;

      let nextX = e.clientX - coords2.current.startX + coords2.current.lastX;
      let nextY = e.clientY - coords2.current.startY + coords2.current.lastY;

      target2.style.top = `${nextY}px`;
      target2.style.left = `${nextX}px`;
      coords.x2 = nextX;
      coords.y2 = nextY;
      moveIntersect();
    };

    //event listeners for 1
    target1.addEventListener("mousedown", onMouseDown1);
    target1.addEventListener("mouseup", onMouseUp1);
    container.addEventListener("mousemove", onMouseMove1);
    //event listeners for 2
    target2.addEventListener("mousedown", onMouseDown2);
    target2.addEventListener("mouseup", onMouseUp2);
    container.addEventListener("mousemove", onMouseMove2);
    

    const reset = () => {
      isClicked1.current = false;
      isClicked2.current = false;
    };
    container.addEventListener("mouseup", reset);

    //removes event listeners
    const cleanup = () => {
      container.removeEventListener("mouseup", reset);

      target1.removeEventListener("mousedown", onMouseDown1);
      target1.removeEventListener("mouseup", onMouseUp1);
      container.removeEventListener("mousemove", onMouseMove1);

      target2.removeEventListener("mousedown", onMouseDown2);
      target2.removeEventListener("mouseup", onMouseUp2);
      container.removeEventListener("mousemove", onMouseMove2);
      
    };

    return cleanup;
  }, [centerID, id1, id2, env]);
}

function round(number, to){
  const rem = number % to;
  if (rem < to/2) return  -1*rem
  else return to - rem 
}

function getCenter(coords, env){

  //from center
  const x1=coords.x1+5;
  const y1=coords.y1+5;
  const x2=coords.x2+5 + 500;
  const y2=coords.y2+5;


  //difference of two circles
  const f = (x) => Math.sqrt(500*500-Math.pow((x-x1), 2)) - Math.sqrt(500*500-Math.pow((x-x2), 2)) - y2 + y1;
  //derivative of above
  const d = (x) => (x1-x)/Math.sqrt(500*500-Math.pow((x-x1), 2)) - (x2-x)/Math.sqrt(500*500-Math.pow((x-x2), 2))

  //guess the average x
  let g = (x1+x2)/2

  //newtons method
  for (let i = 0; i < 5; i++){
    g = g - f(g)/d(g)
  }

  const centerX = g -5
  const centerY = Math.sqrt(500*500 - Math.pow(centerX - x1, 2)) + y1 - 10
  console.log(centerY)
  return [centerX, centerY];
}



export default useDragger;
