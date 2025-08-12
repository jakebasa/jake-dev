import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { keyframes } from '@emotion/react';
import { lazy, Suspense, useState, useEffect } from 'react';

const FaGithub = lazy(() =>
    import('react-icons/fa').then((mod) => ({ default: mod.FaGithub }))
);
const FaLinkedin = lazy(() =>
    import('react-icons/fa').then((mod) => ({ default: mod.FaLinkedin }))
);
const FaEnvelope = lazy(() =>
    import('react-icons/fa').then((mod) => ({ default: mod.FaEnvelope }))
);

type TypedTextOptions =
    | 'Code Craftsman'
    | 'Innovation Seeker'
    | 'Curiosity Driven'
    | 'Lifelong Learner'
    | 'Solution Artist';

// Typing effect hook
const useTypingEffect = (
    words: TypedTextOptions[],
    speed = 100,
    delay = 1500
) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = speed;

        if (isDeleting) typingSpeed /= 2;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, words, wordIndex, speed, delay]);

    return text;
};

const fadeUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
    min-height: calc(100vh - 4.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${theme.spacing.md};
    color: ${theme.colors.textLight};

    @media (min-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing.lg};
    }
`;

const Title = styled.h1`
    animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
    font-size: clamp(2rem, 5vw, 4.5rem);
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.light};
    line-height: 1.1;
    letter-spacing: -0.02em;

    @media (min-width: ${theme.breakpoints.md}) {
        margin-bottom: ${theme.spacing.md};
    }
`;

const SubtitleWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const Subtitle = styled.h3`
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 600;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: ${theme.breakpoints.sm}) {
        flex-direction: row;
    }
`;

const Separator = styled.span`
    display: none;
    color: ${theme.colors.accent};
    margin: 0 0.5rem;

    @media (min-width: ${theme.breakpoints.sm}) {
        display: inline;
    }
`;

const TypedText = styled.span`
    color: ${theme.colors.accent};
    min-width: 150px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.sm}) {
        min-width: 200px;
        text-align: left;
    }
`;

const HighlightSpan = styled.span`
    position: relative;
    display: inline-block;
    padding-bottom: 6px;
`;

const Underline = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
`;

const UnderlineComponent = () => (
    <Underline
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 228.5198715755622 27.028075912462953'
        preserveAspectRatio='none'
    >
        <g strokeLinecap='round'>
            <g
                strokeOpacity='0.5'
                fillOpacity='0.5'
                transform='translate(11.643437444595634 16.256458948420743) rotate(0 103.5 -2.378846305897355)'
            >
                <path
                    d='M-0.12 0.77 C17.98 -0.02, 73.62 -3.94, 108.12 -4.35 C142.62 -4.76, 190.58 -2.31, 206.88 -1.69 M-1.64 0.13 C16.44 -1.06, 73.15 -6.11, 107.76 -6.25 C142.38 -6.39, 189.75 -1.87, 206.05 -0.72'
                    stroke='#e03131'
                    strokeWidth='2'
                    fill='none'
                />
            </g>
        </g>
    </Underline>
);

const Description = styled.p`
    animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
    opacity: 0;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    max-width: 600px;
    margin-top: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.md};
    opacity: 0.8;
    line-height: 1.7;
    padding: 0 ${theme.spacing.sm};

    @media (min-width: ${theme.breakpoints.md}) {
        margin-top: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.lg};
        padding: 0;
    }
`;

const SocialLinks = styled.div`
    animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
    opacity: 0;
    display: flex;
    gap: ${theme.spacing.md};

    a {
        color: ${theme.colors.textLight};
        font-size: 1.5rem;
        transition: all ${theme.transitions.default};
        padding: ${theme.spacing.xs};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.secondary};

        &:hover {
            color: ${theme.colors.accent};
            transform: translateY(-3px);
            background: ${theme.colors.secondary};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
    }

    @media (min-width: ${theme.breakpoints.md}) {
        gap: ${theme.spacing.lg};

        a {
            font-size: 1.75rem;
        }
    }
`;

export const Hero = () => {
    const typedText = useTypingEffect([
        'Code Craftsman',
        'Innovation Seeker',
        'Curiosity Driven',
        'Lifelong Learner',
        'Solution Artist',
    ]);

    return (
        <HeroSection id='hero' role='region' aria-label='Introduction'>
            <Title>Hi, I'm Jake Basa</Title>
            <SubtitleWrapper>
                <Subtitle>
                    <HighlightSpan>
                        Full Stack Developer
                        <UnderlineComponent />
                    </HighlightSpan>
                    <Separator>|</Separator>
                    <TypedText>{typedText}</TypedText>
                </Subtitle>
            </SubtitleWrapper>
            <Description>
                I build elegant, user-focused web solutions with clean, modern
                code.
            </Description>
            <SocialLinks>
                <a
                    href='https://github.com/jakebasa'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Suspense
                        fallback={
                            <div
                                style={{ width: '1.5rem', height: '1.5rem' }}
                            />
                        }
                    >
                        <FaGithub />
                    </Suspense>
                </a>
                <a
                    href='https://www.linkedin.com/in/jakebasa/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Suspense
                        fallback={
                            <div
                                style={{ width: '1.5rem', height: '1.5rem' }}
                            />
                        }
                    >
                        <FaLinkedin />
                    </Suspense>
                </a>
                <a href='mailto:jakebasa0428@gmail.com'>
                    <Suspense
                        fallback={
                            <div
                                style={{ width: '1.5rem', height: '1.5rem' }}
                            />
                        }
                    >
                        <FaEnvelope />
                    </Suspense>
                </a>
            </SocialLinks>
        </HeroSection>
    );
};
