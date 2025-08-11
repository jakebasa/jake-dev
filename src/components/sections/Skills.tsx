import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiPostman } from 'react-icons/si';
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiMongodb,
    SiPostgresql,
    SiRedux,
} from 'react-icons/si';

const MoreToolsText = styled(motion.div)`
    position: absolute;
    right: 15%;
    bottom: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e03131a2;
    font-size: 1.1rem;

    svg {
        width: 60px;
        height: auto;
        margin-bottom: 10px;
        transform: rotate(0deg); /* Point down */
        rect {
            fill: transparent;
        }
    }

    span {
        white-space: nowrap;
    }
`;

const SkillsSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${theme.colors.textLight};
    padding: ${theme.spacing.lg} ${theme.spacing.md};

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.xl} ${theme.spacing.lg};
    }
`;

const SectionTitle = styled(motion.h2)`
    text-align: center;
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.light};
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -${theme.spacing.md};
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background-color: ${theme.colors.accent};
        border-radius: 2px;
    }
`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.spacing.lg};
    width: 100%;
    max-width: 1200px;
    margin-top: ${theme.spacing.xl};

    @media (min-width: ${theme.breakpoints.md}) {
        grid-template-columns: repeat(3, 1fr);
        gap: ${theme.spacing.xl};
    }
`;

const SkillCategory = styled(motion.div)`
    background: ${theme.colors.primary};
    border-radius: 20px;
    padding: ${theme.spacing.lg};
    transition: all ${theme.transitions.default};
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
    }
`;

const CategoryTitle = styled.h3`
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.light};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    font-weight: 600;
    position: relative;
    padding-bottom: ${theme.spacing.md};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 3px;
        background-color: ${theme.colors.accent};
        border-radius: 2px;
    }

    svg {
        font-size: clamp(1.75rem, 3vw, 2rem);
        color: ${theme.colors.accent};
    }
`;

const SkillsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
    flex: 1;
    width: 100%;
`;

const SkillItem = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    padding: ${theme.spacing.md};
    border-radius: 12px;
    transition: all ${theme.transitions.default};
    background: ${theme.colors.secondary};

    svg {
        font-size: clamp(1.1rem, 2vw, 1.5rem);
        color: ${theme.colors.accent};
        transition: all ${theme.transitions.default};
    }

    &:hover {
        color: ${theme.colors.secondary};
        background: ${theme.colors.gradient.accent};
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

        svg {
            transform: scale(1.1) rotate(5deg);
            color: ${theme.colors.secondary};
        }
    }
`;

/* Tech Row */
const TechRowWrapper = styled.div`
    width: 100%;
    overflow: visible;
    margin-top: ${theme.spacing.xl};
    padding: 70px ${theme.spacing.lg}; /* increased vertical space for bigger wave */
    position: relative;
`;

const TechRow = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.lg};
    white-space: nowrap;
    width: max-content;
`;
const TechItem = styled(motion.div)`
    background: ${theme.colors.secondary};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        max-width: 65%;
        max-height: 65%;
        object-fit: contain;
        display: block;
    }
`;

const skillCategories = [
    {
        title: 'Frontend',
        icon: <FaReact />,
        skills: [
            { name: 'React', icon: <FaReact /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Redux', icon: <SiRedux /> },
        ],
    },
    {
        title: 'Backend',
        icon: <FaNodeJs />,
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
        ],
    },
    {
        title: 'Tools',
        icon: <FaDocker />,
        skills: [
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Vercel', icon: <IoLogoVercel /> },
            { name: 'Postman', icon: <SiPostman /> },
        ],
    },
];

const techIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    // Duplicate enough times for a seamless scroll
    const repeatedIcons = [
        ...techIcons,
        ...techIcons,
        ...techIcons,
        ...techIcons,
        ...techIcons,
        ...techIcons,
    ];

    return (
        <SkillsSection
            id='skills'
            role='region'
            aria-label='Skills and Expertise'
        >
            <SectionTitle
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                role='heading'
                aria-level={2}
            >
                Skills & Expertise
            </SectionTitle>

            <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <SkillsContainer role='list'>
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={index}
                            variants={itemVariants}
                            role='listitem'
                            aria-labelledby={`category-title-${index}`}
                        >
                            <CategoryTitle id={`category-title-${index}`}>
                                <span aria-hidden='true'>{category.icon}</span>
                                {category.title}
                            </CategoryTitle>
                            <SkillsList
                                role='list'
                                aria-label={`${category.title} skills`}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillItem
                                        key={skillIndex}
                                        variants={itemVariants}
                                        role='listitem'
                                    >
                                        <span aria-hidden='true'>
                                            {skill.icon}
                                        </span>
                                        <span>{skill.name}</span>
                                    </SkillItem>
                                ))}
                            </SkillsList>
                        </SkillCategory>
                    ))}
                </SkillsContainer>
            </motion.div>

            {/* Seamless Tech Row */}
            <TechRowWrapper>
                <TechRow
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }}
                    transition={{
                        repeat: Infinity,
                        duration: 120, // Changed from 60 to 120 seconds
                        ease: 'linear',
                        repeatType: 'loop',
                    }}
                >
                    {repeatedIcons.map((icon, index) => (
                        <TechItem
                            key={index}
                            animate={{
                                y: [0, -40, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2,
                            }}
                        >
                            <img src={icon} alt={`tech-${index}`} />
                        </TechItem>
                    ))}
                </TechRow>
                <MoreToolsText
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -20, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 86.338775185587 105.0384986062279'
                        width='86.338775185587'
                        height='105.0384986062279'
                    >
                        <metadata />
                        <defs>
                            <style className='style-fonts'></style>
                        </defs>
                        <rect
                            x='0'
                            y='0'
                            width='86.338775185587'
                            height='105.0384986062279'
                            fill='transparent'
                        />
                        <g strokeLinecap='round'>
                            <g
                                strokeOpacity='0.5'
                                fillOpacity='0.5'
                                transform='translate(75.03518886097527 94.98533186807538) rotate(0 -32.399739937008405 -42.398896653425254)'
                            >
                                <path
                                    d='M-0.59 0.05 C-8.88 -6.6, -39.6 -25.42, -50.24 -39.59 C-60.89 -53.76, -62.05 -77.64, -64.45 -84.99 M1.3 -0.96 C-7.04 -7.44, -39.71 -24.26, -50.76 -38.06 C-61.82 -51.86, -62.77 -75.83, -65.04 -83.77'
                                    stroke='#e03131'
                                    strokeWidth='2'
                                    fill='none'
                                />
                            </g>
                            <g
                                strokeOpacity='0.5'
                                fillOpacity='0.5'
                                transform='translate(75.03518886097527 94.98533186807538) rotate(0 -32.399739937008405 -42.398896653425254)'
                            >
                                <path
                                    d='M-53.04 -63.4 C-56.13 -67.41, -59.38 -73.49, -65.04 -83.77 M-53.04 -63.4 C-56.28 -68.75, -59.17 -75.64, -65.04 -83.77'
                                    stroke='#e03131'
                                    strokeWidth='2'
                                    fill='none'
                                />
                            </g>
                            <g
                                strokeOpacity='0.5'
                                fillOpacity='0.5'
                                transform='translate(75.03518886097527 94.98533186807538) rotate(0 -32.399739937008405 -42.398896653425254)'
                            >
                                <path
                                    d='M-68.94 -60.46 C-67.9 -65.16, -67 -72, -65.04 -83.77 M-68.94 -60.46 C-67.66 -66.79, -66.03 -74.51, -65.04 -83.77'
                                    stroke='#e03131'
                                    strokeWidth='2'
                                    fill='none'
                                />
                            </g>
                        </g>
                    </svg>
                    <span>More tools that I use</span>
                </MoreToolsText>
            </TechRowWrapper>
        </SkillsSection>
    );
};

export default Skills;
