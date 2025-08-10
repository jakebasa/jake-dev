import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const TechWrapper = styled.section`
    width: 100%;
    overflow-x: hidden;
    background: ${theme.colors.light};
    padding: ${theme.spacing.lg} 0;
`;

const TechRow = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: ${theme.spacing.lg};
    flex-wrap: nowrap;
    width: max-content;
`;

const TechItem = styled(motion.div)`
    background: ${theme.colors.secondary};
    padding: ${theme.spacing.md};
    border-radius: 50%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

export default function TechIcons() {
    const icons = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    ];

    const offsets = [0, -10, -20, -10, 0, 10, 20, 10, 0, -10, -20, -10, 0];

    return (
        <TechWrapper role='region' aria-label='Technologies'>
            <TechRow
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 20,
                }}
            >
                {[...icons, ...icons].map((icon, index) => (
                    <TechItem
                        key={index}
                        style={{
                            transform: `translateY(${
                                offsets[index % offsets.length]
                            }px)`,
                        }}
                    >
                        <img src={icon} alt={`tech-${index}`} />
                    </TechItem>
                ))}
            </TechRow>
        </TechWrapper>
    );
}
