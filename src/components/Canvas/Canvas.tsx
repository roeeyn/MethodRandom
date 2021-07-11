import "./Canvas.css";
import { useCanvas } from "../../hooks/useCanvas";

interface IProps {
  draw: (ctx: CanvasRenderingContext2D | null, frameCount: number) => void;
  width: number;
  height: number;
}

export const Canvas = ({ draw, width, height }: IProps) => {
  const canvasRef = useCanvas(draw);

  return (
    <canvas className="canvas" width={width} height={height} ref={canvasRef} />
  );
};
