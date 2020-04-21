import React, { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'

export default () => {
  const [refDiv, { width, height }] = useMeasure()

  let refCanvas = useRef();

  useEffect(() => {
    let canvas = refCanvas.current;
    let ctx = canvas.getContext('2d');

    // Scale
    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(ratio, ratio);

    // Raf
    let requestId;
    let i = 0;

    // Animation
    const animation = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        (width / 2) * Math.abs(Math.cos(i)),
        0,
        2 * Math.PI
      );

      ctx.fillStyle = 'navy';
      ctx.fill();

      ctx.fillStyle = 'white';
      ctx.font = '50px Inter';
      ctx.textAlign = "center";
      ctx.fillText('Inter', width / 2, height / 2);

      i += 0.01;
      requestId = requestAnimationFrame(animation);
    };

    animation();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <div ref={refDiv} style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <canvas width={width} height={height}
        ref={refCanvas}
        style={{ border: "1px solid gray" }}
      />
    </div>
  );
};