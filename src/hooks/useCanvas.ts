import { useRef, useEffect } from "react";

export const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D | null, frameCount: number) => void
) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current! as HTMLCanvasElement;

    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      // animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };

  }, [draw]);

  return canvasRef;
};
