import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const CursorWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
`;

const DotCursor = styled.div<{ isClicking: boolean }>`
  position: absolute;
  background-color: ${theme.colors.accent};
  border-radius: 50%;
  width: ${props => props.isClicking ? "16px" : "8px"};
  height: ${props => props.isClicking ? "16px" : "8px"};
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
`;

const BorderCursor = styled.div<{ isHovering: boolean }>`
  position: absolute;
  border: 2px solid ${theme.colors.accent};
  border-radius: 50%;
  width: ${props => props.isHovering ? "44px" : "28px"};
  height: ${props => props.isHovering ? "44px" : "28px"};
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
`;

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll("a, button, img, input, textarea, select");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <CursorWrapper>
      <DotCursor
        isClicking={isClicking}
        style={{
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />
      <BorderCursor
        isHovering={isHovering}
        style={{
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
        }}
      />
    </CursorWrapper>
  );
}
