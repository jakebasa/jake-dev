import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../../data/projects';

const ProjectDetailContainer = styled.div`
    min-height: 100vh;
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
    background: ${theme.colors.secondary}95;
    backdrop-filter: blur(10px);
    color: ${theme.colors.text};
    position: relative;
    z-index: 1;
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

const ProjectImage = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: ${theme.spacing.xl};
`;

const ProjectTitle = styled.h1`
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${theme.colors.light};
    margin-bottom: ${theme.spacing.lg};
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.textLight};
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.8;
    margin-bottom: ${theme.spacing.xl};
    max-width: 800px;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.xl};
`;

const TechTag = styled.span`
    background: ${theme.colors.primary};
    color: ${theme.colors.accent};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: ${theme.spacing.lg};

    a {
        display: flex;
        align-items: center;
        gap: ${theme.spacing.sm};
        color: ${theme.colors.accent};
        text-decoration: none;
        font-size: 1rem;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        border-radius: 8px;
        background: ${theme.colors.primary};
        transition: all ${theme.transitions.default};

        &:hover {
            transform: translateY(-2px);
            background: ${theme.colors.gradient.accent};
            color: ${theme.colors.secondary};
        }
    }
`;

const ProjectDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const foundProject = projects.find((p) => p.id === parseInt(id || '', 10));

    if (!foundProject) {
        return (
            <ProjectDetailContainer>
                <div className='container'>
                    <BackButton onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back to Projects
                    </BackButton>
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: theme.spacing.xl,
                        }}
                    >
                        Project not found
                    </div>
                </div>
            </ProjectDetailContainer>
        );
    }

    return (
        <ProjectDetailContainer>
            <div className='container'>
                <BackButton
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft /> Back to Projects
                </BackButton>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProjectImage
                        src={foundProject.image}
                        alt={foundProject.title}
                    />
                    <ProjectTitle>{foundProject.title}</ProjectTitle>
                    <ProjectDescription>
                        {foundProject.description}
                    </ProjectDescription>

                    <TechStack>
                        {foundProject.techStack.map((tech: string) => (
                            <TechTag key={tech}>{tech}</TechTag>
                        ))}
                    </TechStack>

                    <ProjectLinks>
                        <a
                            href={foundProject.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub /> View Source
                        </a>
                        {foundProject.liveUrl !== 'no-link' && (
                            <a
                                href={foundProject.liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </ProjectLinks>
                </motion.div>
            </div>
        </ProjectDetailContainer>
    );
};

export default ProjectDetail;
