import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';

import { DotWave } from 'ldrs/react';
import 'ldrs/react/DotWave.css';

// Default values shown

// Lazy load non-critical components
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading fallback component
const LoadingFallback = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.accent};
    font-size: 1.2rem;

    @media print {
        display: none;
    }
`;

// Lazy load project-related components
const ProjectDetail = lazy(() => import('./components/sections/ProjectDetail'));
const AllProjects = lazy(() => import('./components/sections/AllProjects'));

function HomePage() {
    return (
        <Layout>
            {/* Hero section is critical for LCP, so keep it eager loaded */}
            <Hero />

            {/* Wrap non-critical sections in Suspense */}
            <Suspense
                fallback={
                    <LoadingFallback>
                        <DotWave size='47' speed='1' color='crimson' />
                    </LoadingFallback>
                }
            >
                <Projects />
            </Suspense>
            <Suspense
                fallback={
                    <LoadingFallback>
                        <DotWave size='47' speed='1' color='crimson' />
                    </LoadingFallback>
                }
            >
                <Skills />
            </Suspense>
            <Suspense
                fallback={
                    <LoadingFallback>
                        <DotWave size='47' speed='1' color='crimson' />
                    </LoadingFallback>
                }
            >
                <Contact />
            </Suspense>
        </Layout>
    );
}

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path='/project/:id'
                        element={
                            <Layout>
                                <Suspense
                                    fallback={
                                        <LoadingFallback>
                                            <DotWave
                                                size='47'
                                                speed='1'
                                                color='crimson'
                                            />
                                        </LoadingFallback>
                                    }
                                >
                                    <ProjectDetail />
                                </Suspense>
                            </Layout>
                        }
                    />
                    <Route
                        path='/projects'
                        element={
                            <Layout>
                                <Suspense
                                    fallback={
                                        <LoadingFallback>
                                            <DotWave
                                                size='47'
                                                speed='1'
                                                color='crimson'
                                            />
                                        </LoadingFallback>
                                    }
                                >
                                    <AllProjects />
                                </Suspense>
                            </Layout>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
