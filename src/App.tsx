import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';
import ErrorBoundary from './components/common/ErrorBoundary';

import { DotWave } from 'ldrs/react';
import 'ldrs/react/DotWave.css';

// Default values shown

// Import components directly for homepage
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import About from './components/sections/About';

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
            <Hero />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <ErrorBoundary>
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                </ErrorBoundary>
            </div>
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
