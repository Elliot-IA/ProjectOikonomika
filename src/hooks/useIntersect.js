import { useEffect, useRef } from "react";

function useDragger(centerID, id1, id2) {
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
    const target1 = document.getElementById(id1);
    const target2 = document.getElementById(id2);
    const center = document.getElementById(centerID);
    const container = target1.parentElement;

    const onMouseDown1 = (e) => {
      isClicked1.current = true;
      coords1.current.startX = e.clientX;
      coords1.current.startY = e.clientY;
    };
    const onMouseUp1 = (e) => {
      isClicked1.current = false;
      coords1.current.lastX = target1.offsetLeft;
      coords1.current.lastY = target1.offsetTop;
    };
    const onMouseMove1 = (e) => {
      if (!isClicked1.current) return;

      const nextX = e.clientX - coords1.current.startX + coords1.current.lastX;
      const nextY = e.clientY - coords1.current.startY + coords1.current.lastY;

      target1.style.top = `${nextY}px`;
      target1.style.left = `${nextX}px`;
      coords.x1 = nextX;
      coords.y1 = nextY;
      moveIntersect();
    };

    const onMouseDown2 = (e) => {
      isClicked2.current = true;
      coords2.current.startX = e.clientX;
      coords2.current.startY = e.clientY;
    };
    const onMouseUp2 = (e) => {
      isClicked2.current = false;
      coords2.current.lastX = target2.offsetLeft;
      coords2.current.lastY = target2.offsetTop;
    };
    const onMouseMove2 = (e) => {
      if (!isClicked2.current) return;

      const nextX = e.clientX - coords2.current.startX + coords2.current.lastX;
      const nextY = e.clientY - coords2.current.startY + coords2.current.lastY;

      target2.style.top = `${nextY}px`;
      target2.style.left = `${nextX}px`;
      coords.x2 = nextX;
      coords.y2 = nextY;
      moveIntersect();
    };

    const moveIntersect = () => {
      // 280 is width of line - width of ball
      const centerX = (coords.y2 - coords.y1 + coords.x1 + coords.x2 + 280) / 2;
      // 140 is the 280/2 and 5 is hight of line/2
      const centerY = centerX - (coords.x1 + 140) + coords.y1 - 5;
      center.style.top = `${centerY}px`;
      center.style.left = `${centerX}px`;
    };

    target1.addEventListener("mousedown", onMouseDown1);
    target1.addEventListener("mouseup", onMouseUp1);
    container.addEventListener("mousemove", onMouseMove1);
    container.addEventListener("mouseleave", onMouseUp1);

    target2.addEventListener("mousedown", onMouseDown2);
    target2.addEventListener("mouseup", onMouseUp2);
    container.addEventListener("mousemove", onMouseMove2);
    container.addEventListener("mouseleave", onMouseUp2);

    const cleanup = () => {
      target1.removeEventListener("mousedown", onMouseDown1);
      target1.removeEventListener("mouseup", onMouseUp1);
      container.removeEventListener("mousemove", onMouseMove1);
      container.removeEventListener("mouseleave", onMouseUp1);

      target2.removeEventListener("mousedown", onMouseDown2);
      target2.removeEventListener("mouseup", onMouseUp2);
      container.removeEventListener("mousemove", onMouseMove2);
      container.removeEventListener("mouseleave", onMouseUp2);
    };

    return cleanup;
  }, [centerID, id1, id2]);
}

export default useDragger;
