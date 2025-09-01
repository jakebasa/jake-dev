import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: ${theme.spacing.lg} 0;

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.xl} 0;
    }
`;

const SectionTitle = styled(motion.h2)`
    text-align: center;
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: calc(${theme.spacing.xl} * 1.5);
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

    @media (min-width: ${theme.breakpoints.md}) {
        margin-bottom: calc(${theme.spacing.xl} * 2);
    }
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: ${theme.spacing.lg};
    width: 100%;
    margin-top: ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.md}) {
        gap: ${theme.spacing.xl};
        margin-top: ${theme.spacing.xl};
    }
`;

const ProjectCard = styled(motion.div)`
    background: ${theme.colors.primary};
    border-radius: 12px;
    overflow: hidden;
    color: ${theme.colors.text};
    transition: all ${theme.transitions.default};
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 180px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: relative;

    @media (min-width: ${theme.breakpoints.md}) {
        height: 220px;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
    }
`;

const ProjectContent = styled.div`
    padding: ${theme.spacing.md};
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.lg};
    }
`;

const ProjectTitle = styled.h3`
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.light};
    font-weight: 600;
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.lg};
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
    flex: 1;
    opacity: 0.9;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.md};

    @media (min-width: ${theme.breakpoints.md}) {
        gap: ${theme.spacing.sm};
        margin-bottom: ${theme.spacing.lg};
    }
`;

const TechTag = styled.span`
    background: ${theme.colors.secondary};
    color: ${theme.colors.accent};
    padding: 4px 10px;
    border-radius: 20px;
    font-size: clamp(0.75rem, 2vw, 0.85rem);
    font-weight: 500;
    transition: all ${theme.transitions.default};

    @media (min-width: ${theme.breakpoints.md}) {
        padding: 6px 12px;
    }

    &:hover {
        background: ${theme.colors.gradient.accent};
        color: ${theme.colors.secondary};
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
`;

const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-top: auto;
    padding-top: ${theme.spacing.md};
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    a {
        color: ${theme.colors.accent};
        font-size: clamp(1rem, 2vw, 1.2rem);
        transition: all ${theme.transitions.default};
        padding: ${theme.spacing.xs};
        border-radius: 4px;

        &:hover {
            color: ${theme.colors.light};
            background: ${theme.colors.secondary};
            transform: translateY(-2px);
        }
    }
`;

const ViewProjectButton = styled.button`
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.secondary};
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all ${theme.transitions.default};
    margin-left: auto;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
`;

const ViewAllButton = styled(motion.button)`
    background: transparent;
    border: 2px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    transition: all ${theme.transitions.default};
    margin: ${theme.spacing.xl} auto 0;
    display: block;

    &:hover {
        background: ${theme.colors.accent};
        border: none;
        color: ${theme.colors.secondary};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
`;

import { featuredProjects } from '../../data/projects';

const Projects = () => {
    console.log('Projects component mounted');
    const navigate = useNavigate();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <ProjectsSection
            id='projects'
            role='region'
            aria-label='Featured Projects'
        >
            <div className='container'>
                <SectionTitle
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    role='heading'
                    aria-level={2}
                >
                    Featured Projects
                </SectionTitle>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <ProjectGrid role='list'>
                        {featuredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                variants={itemVariants}
                                role='listitem'
                                aria-labelledby={`project-title-${project.id}`}
                            >
                                <ProjectImage
                                    imageUrl={project.image}
                                    role='img'
                                    aria-label={`Screenshot of ${project.title}`}
                                />
                                <ProjectContent>
                                    <ProjectTitle
                                        id={`project-title-${project.id}`}
                                    >
                                        {project.title}
                                    </ProjectTitle>
                                    <ProjectDescription>
                                        {project.description}
                                    </ProjectDescription>
                                    <TechStack
                                        role='list'
                                        aria-label={`Technologies used in ${project.title}`}
                                    >
                                        {project.techStack.map((tech) => (
                                            <TechTag key={tech} role='listitem'>
                                                {tech}
                                            </TechTag>
                                        ))}
                                    </TechStack>
                                    <ProjectLinks>
                                        {project.githubUrl !== 'no-link' && (
                                            <a
                                                href={project.githubUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={`View ${project.title} source code on GitHub`}
                                            >
                                                <FaGithub aria-hidden='true' />
                                                <span className='sr-only'>
                                                    GitHub repository
                                                </span>
                                            </a>
                                        )}

                                        {project.liveUrl !== 'no-link' && (
                                            <a
                                                href={project.liveUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={`Visit ${project.title} live site`}
                                            >
                                                <FaExternalLinkAlt aria-hidden='true' />
                                                <span className='sr-only'>
                                                    Live site
                                                </span>
                                            </a>
                                        )}

                                        <ViewProjectButton
                                            onClick={() =>
                                                navigate(
                                                    `/project/${project.id}`
                                                )
                                            }
                                            aria-label={`View details of ${project.title}`}
                                        >
                                            View Details
                                        </ViewProjectButton>
                                    </ProjectLinks>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                    <ViewAllButton
                        onClick={() => {
                            navigate('/projects');
                            window.scrollTo(0, 0);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        aria-label='View all projects'
                    >
                        View All Projects
                    </ViewAllButton>
                </motion.div>
            </div>
        </ProjectsSection>
    );
};

export default Projects;
