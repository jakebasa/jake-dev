import styled from '@emotion/styled';
import { motion, useScroll, useSpring, animate } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useEffect, useState } from 'react';

const NavContainer = styled(motion.nav)`
    position: fixed;
    right: ${theme.spacing.lg};
    top: 50%;
    transform: translateY(-50%);
    z-index: 49; /* just below the cursor */

    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.sm};
    pointer-events: auto;

    @media (hover: none) and (pointer: coarse),
        (max-width: ${theme.breakpoints.sm}) {
        display: none;
    }

    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    }
`;

const NavDot = styled(motion.button)<{ active: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid
        ${(props) =>
            props.active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
    position: relative;
    transition: all ${theme.transitions.default};
    padding: 0;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${(props) =>
            props.active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
        transition: all ${theme.transitions.default};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
        width: 8px;
        height: 8px;

        &::after {
            width: 3px;
            height: 3px;
        }

        &:hover::after {
            width: 4px;
            height: 4px;
        }
    }

    &:hover {
        border-color: ${theme.colors.accent};
        transform: scale(1.2);

        &::after {
            background: ${theme.colors.accent};
            width: 6px;
            height: 6px;
        }
    }

    &:focus {
        outline: none;
        border-color: ${(props) =>
            props.active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
    }

    &::before {
        content: attr(data-tooltip);
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.75rem;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: all ${theme.transitions.default};
        z-index: 1;
        color: ${theme.colors.text};
        font-weight: 500;

        @media (max-width: ${theme.breakpoints.sm}) {
            right: auto;
            left: -16px;
            transform: translate(-100%, -50%);
            font-size: 0.85rem;
            padding: 6px 12px;
        }
    }

    &:hover::before {
        opacity: 1;
        transform: translate(-100%, -50%);

        @media (min-width: ${theme.breakpoints.sm}) {
            right: 32px;
            transform: translateY(-50%) scale(1.02);
        }
    }

    @media (hover: none) {
        &:active {
            transform: scale(0.95);
        }
    }
`;

const ProgressBar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${theme.colors.accent};
    transform-origin: 0%;
    z-index: 1000;
    opacity: 0.8;

    @media print {
        display: none;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
        display: none;
    }
`;

const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
];

// Smooth scroll with framer-motion
const smoothScrollTo = (targetY: number) => {
    const start = window.scrollY || window.pageYOffset;
    animate(start, targetY, {
        duration: 0.5,
        onUpdate(value) {
            window.scrollTo(0, value);
        },
        ease: [0.22, 1, 0.36, 1],
    });
};

export const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            sections.forEach(({ id, name }) => {
                const element = document.getElementById(id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
                        setActiveSection(id);
                        const liveRegion =
                            document.getElementById('section-announcer');
                        if (liveRegion) {
                            liveRegion.textContent = `Current section: ${name}`;
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                setActiveSection(sectionId);
                const targetY =
                    element.getBoundingClientRect().top + window.scrollY;
                smoothScrollTo(targetY);
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const currentIndex = sections.findIndex(
                ({ id }) => id === sectionId
            );
            if (currentIndex === -1) return;

            let nextIndex = currentIndex;
            if (e.key === 'ArrowUp') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            } else if (e.key === 'ArrowDown') {
                nextIndex =
                    currentIndex < sections.length - 1
                        ? currentIndex + 1
                        : sections.length - 1;
            }

            if (nextIndex !== currentIndex) {
                const nextSection = sections[nextIndex];
                const element = document.getElementById(nextSection.id);
                if (element) {
                    setActiveSection(nextSection.id);
                    const targetY =
                        element.getBoundingClientRect().top + window.scrollY;
                    smoothScrollTo(targetY);
                }
            }
        }
    };

    return (
        <>
            <ProgressBar
                style={{ scaleX }}
                role='progressbar'
                aria-label='Reading progress'
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scrollYProgress.get() * 100)}
            />
            <div
                id='section-announcer'
                className='sr-only'
                role='status'
                aria-live='polite'
            />
            <NavContainer role='navigation' aria-label='Section navigation'>
                {sections.map(({ id, name }) => (
                    <NavDot
                        key={id}
                        active={activeSection === id}
                        onClick={(e) => {
                            e.currentTarget.blur(); // remove focus to avoid stuck highlight
                            setActiveSection(id); // instantly update
                            const element = document.getElementById(id);
                            if (element) {
                                const targetY =
                                    element.getBoundingClientRect().top +
                                    window.scrollY;
                                smoothScrollTo(targetY);
                            }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, id)}
                        data-tooltip={name}
                        tabIndex={0}
                        aria-label={`${name} section ${
                            activeSection === id ? '(current section)' : ''
                        }`}
                        aria-current={activeSection === id ? 'true' : undefined}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        role='button'
                    />
                ))}
            </NavContainer>
        </>
    );
};
