import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import {
    FaArrowLeft,
    FaGithub,
    FaExternalLinkAlt,
    FaArrowUp,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useEffect, useState } from 'react';

const AllProjectsContainer = styled.div`
    min-height: 100vh;
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    background: ${theme.colors.secondary}95;
    backdrop-filter: blur(10px);
    color: ${theme.colors.text};
    position: relative;
    z-index: 1;

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.xl} ${theme.spacing.xl};
    }

    .container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 ${theme.spacing.sm};

        @media (min-width: ${theme.breakpoints.md}) {
            padding: 0 ${theme.spacing.lg};
        }
    }
`;

const BackButton = styled(motion.button)`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    background: transparent;
    border: none;
    color: ${theme.colors.accent};
    font-size: 1.1rem;
    cursor: pointer;
    padding: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.xl};
    transition: all ${theme.transitions.default};

    &:hover {
        color: ${theme.colors.light};
        transform: translateX(-5px);
    }
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    margin-top: ${theme.spacing.xl};
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${theme.spacing.md};

    @media (min-width: ${theme.breakpoints.sm}) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: ${theme.spacing.xl};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ProjectCard = styled(motion.div)`
    background: ${theme.colors.primary};
    border-radius: 12px;
    overflow: hidden;
    color: ${theme.colors.text};
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all ${theme.transitions.default};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
`;

const ProjectContent = styled.div`
    padding: ${theme.spacing.lg};
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.sm}) {
        padding: ${theme.spacing.md};
    }
`;

const ProjectTitle = styled.h2`
    font-size: 1.5rem;
    color: ${theme.colors.light};
    margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.lg};
    font-size: 0.95rem;
    line-height: 1.6;
    flex: 1;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.md};
`;

const TechTag = styled.span`
    background: ${theme.colors.secondary};
    color: ${theme.colors.accent};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
`;

const ProjectLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin-top: auto;
    padding-top: ${theme.spacing.md};
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: ${theme.breakpoints.sm}) {
        row-gap: ${theme.spacing.md};
    }

    @media (min-width: ${theme.breakpoints.sm}) {
        flex-wrap: nowrap;
        gap: ${theme.spacing.md};
        align-items: center;
    }
`;

const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.accent};
    text-decoration: none;
    font-size: 0.9rem;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;
    transition: all ${theme.transitions.default};

    &:hover {
        transform: translateY(-2px);
        color: ${theme.colors.light};
    }
`;

const ViewProjectButton = styled.button`
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.secondary};
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all ${theme.transitions.default};
    margin-left: auto;
    white-space: nowrap;
    min-width: fit-content;

    @media (max-width: ${theme.breakpoints.sm}) {
        width: 100%;
        margin-top: ${theme.spacing.sm};
        margin-left: 0;
        order: -1;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
`;

const BackToTopButton = styled(motion.button)`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    z-index: 1000;

    @media (min-width: ${theme.breakpoints.md}) {
        width: 50px;
        height: 50px;
        bottom: 40px;
        right: 40px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.3);
    }
`;

const PageTitle = styled.h1`
    color: ${theme.colors.light};
    font-size: clamp(2rem, 5vw, 2.5rem);
    margin-bottom: ${theme.spacing.xl};
    text-align: center;
`;

const AllProjects = () => {
    const navigate = useNavigate();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setShowBackToTop(currentScroll > 300);
        };

        // Initial check
        handleScroll();

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AllProjectsContainer>
            <div className='container'>
                <BackButton
                    onClick={() => navigate('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft /> Back to Home
                </BackButton>

                <PageTitle>All Projects</PageTitle>

                <ProjectGrid>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProjectImage imageUrl={project.image} />
                            <ProjectContent>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>
                                    {project.description}
                                </ProjectDescription>
                                <TechStack>
                                    {project.techStack.map((tech) => (
                                        <TechTag key={tech}>{tech}</TechTag>
                                    ))}
                                </TechStack>
                                <ProjectLinks>
                                    {project.githubUrl !== 'no-link' && (
                                        <ProjectLink
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <FaGithub /> Source
                                        </ProjectLink>
                                    )}
                                    {project.liveUrl !== 'no-link' && (
                                        <ProjectLink
                                            href={project.liveUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </ProjectLink>
                                    )}

                                    <ViewProjectButton
                                        onClick={() =>
                                            navigate(`/project/${project.id}`)
                                        }
                                    >
                                        View Details
                                    </ViewProjectButton>
                                </ProjectLinks>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectGrid>
                <AnimatePresence>
                    {showBackToTop && (
                        <BackToTopButton
                            onClick={scrollToTop}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Scroll to top'
                        >
                            <FaArrowUp size={24} />
                        </BackToTopButton>
                    )}
                </AnimatePresence>
            </div>
        </AllProjectsContainer>
    );
};

export default AllProjects;
