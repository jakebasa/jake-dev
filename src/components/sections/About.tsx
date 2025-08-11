import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';

const fadeUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutSection = styled.section`
    min-height: calc(100vh - 4.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.md};
    position: relative;
    color: ${theme.colors.textLight};

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.lg};
    }
`;

const AboutContent = styled.div`
    max-width: 800px;
    text-align: center;
    position: relative;
    z-index: 1;
    animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
`;

const AboutTitle = styled.h2`
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: ${theme.spacing.xl};
    position: relative;
    display: inline-block;
    color: ${theme.colors.light};

    &:after {
        content: '';
        position: absolute;
        bottom: -${theme.spacing.md};
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: ${theme.colors.accent};
        border-radius: 2px;
    }
`;

const AboutText = styled.p`
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    opacity: 0.8;
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    &:last-child {
        margin-bottom: 0;
    }
`;

const About = () => {
    return (
        <AboutSection id='about' role='region' aria-label='About Me'>
            <AboutContent>
                <AboutTitle>About Me</AboutTitle>
                <AboutText>
                    I'm a passionate developer with an unwavering commitment to
                    self-improvement and personal growth. Every day presents a
                    new opportunity to learn, adapt, and evolve – whether it's
                    mastering a new technology stack or refining my
                    problem-solving skills. I believe in the power of continuous
                    learning and pushing beyond comfort zones to achieve
                    excellence.
                </AboutText>
                <AboutText>
                    My journey in software development is deeply intertwined
                    with my philosophy of constant growth. I approach each
                    project not just as a task to complete, but as an
                    opportunity to innovate and challenge myself. When I'm not
                    coding, you'll find me exploring new technologies, reading
                    about personal development, or implementing productivity
                    systems to optimize my workflow.
                </AboutText>
            </AboutContent>
        </AboutSection>
    );
};

export default About;
