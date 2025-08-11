import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const CursorWrapper = styled.div<{ isVisible: boolean }>`
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 9999999;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 0.3s ease-out;

    @media (hover: none) and (pointer: coarse),
        (max-width: ${theme.breakpoints.sm}) {
        display: none;
    }
`;

const DotCursor = styled.div<{ isClicking: boolean }>`
    position: absolute;
    background-color: ${theme.colors.accent};
    border-radius: 50%;
    width: ${(props) => (props.isClicking ? '16px' : '8px')};
    height: ${(props) => (props.isClicking ? '16px' : '8px')};
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
    z-index: 51; // Ensure dot is above the border
`;

const BorderCursor = styled.div<{ isHovering: boolean }>`
    position: absolute;
    border: 2px solid ${theme.colors.accent};
    border-radius: 50%;
    width: ${(props) => (props.isHovering ? '44px' : '28px')};
    height: ${(props) => (props.isHovering ? '44px' : '28px')};
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
`;

export default function SmoothFollower() {
    const initialPos =
        typeof window !== 'undefined'
            ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
            : { x: 0, y: 0 };

    const mousePosition = useRef(initialPos);
    const dotPosition = useRef(initialPos);
    const borderDotPosition = useRef(initialPos);

    const [renderPos, setRenderPos] = useState({
        dot: initialPos,
        border: initialPos,
    });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const BORDER_DOT_SMOOTHNESS = 0.15; // Faster outer border following

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const interactiveElements = document.querySelectorAll(
            'a, button, img, input, textarea, select, [role="button"]'
        );
        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Animation function for smooth movement
        const animate = () => {
            const lerp = (start: number, end: number, factor: number) => {
                return start + (end - start) * factor;
            };

            // Inner dot follows the mouse position directly
            dotPosition.current = mousePosition.current;

            // Border follows the dot position with smoothing
            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS
            );

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: {
                    x: borderDotPosition.current.x,
                    y: borderDotPosition.current.y,
                },
            });

            requestAnimationFrame(animate);
        };

        // Start animation loop
        const animationId = requestAnimationFrame(animate);

        // Clean up
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);

            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });

            cancelAnimationFrame(animationId);
        };
    }, []);

    if (typeof window === 'undefined') return null;

    return (
        <CursorWrapper isVisible={isVisible}>
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
