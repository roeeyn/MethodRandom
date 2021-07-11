import { Canvas } from "../Canvas/Canvas";
import { createRandomHexColor } from "../../utils/colors";
import { useEffect, useRef, useState } from "react";
import "./Painting.css";

interface PaintingProps {
  sectionNumber?: number;
  initialWidth?: number;
  initialHeight?: number;
  squareSize?: number;
}

export const Painting = ({
  sectionNumber = 5,
  initialWidth = 6,
  initialHeight = 17,
}: PaintingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // TODO: Maybe trigger new render with each resize?
      setParentWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef]);

  const draw = (ctx: CanvasRenderingContext2D | null, frameCount: number) => {
    if (ctx) {

      for (let i = 0; i < sectionNumber; i++) {

        const exponentFactor = Math.pow(2, i)
        const squareSize = parentWidth / sectionNumber / (initialWidth * exponentFactor);

        for (let j = 0; j < (initialWidth * exponentFactor); j++) {
          for (let k = 0; k < (initialHeight * exponentFactor); k++) {
            const color = createRandomHexColor();

            const topX = i * (initialWidth * exponentFactor) * squareSize + squareSize * j;
            const topY = squareSize * k;
            const bottomX = i * (initialWidth * exponentFactor) * squareSize + squareSize * (j + 1);
            const bottomY = squareSize * (k + 1);

            ctx.fillStyle = color;
            ctx.fillRect(topX, topY, bottomX, bottomY);
          }
        }
      }
    }
  };

  return (
    <div className="painting-container" ref={containerRef}>
      <h2>Y yo juanito</h2>
      <Canvas
        draw={draw}
        width={parentWidth}
        height={(parentWidth / sectionNumber / initialWidth) * initialHeight}
      />
    </div>
  );
};
