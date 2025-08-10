export const theme = {
    colors: {
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        accent: 'hsl(345.3, 82.7%, 40.8%)',
        light: '#111827',
        text: '#334155',
        textLight: '#475569',
        textDark: '#111827',
        gradient: {
            main: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            accent: 'linear-gradient(135deg, hsl(345.3, 82.7%, 40.8%) 0%, hsl(345.3, 82.7%, 55%) 100%)',
            // Subtle left-side accent overlay for glass
            accentGlass:
                'linear-gradient(90deg, hsla(345.3, 82.7%, 40.8%, 0.05) 0%, transparent 40%)',
        },
        overlay: {
            light: 'rgba(255, 255, 255, 0.9)',
            dark: 'rgba(15, 23, 42, 0.05)',
        },
        glass: {
            light: 'rgba(255, 255, 255, 0.6)', // frosted white
            dark: 'rgba(15, 23, 42, 0.4)', // frosted dark
        },
    },
    effects: {
        glassBlur: 'blur(12px)',
        glassBorder: '1px solid rgba(255, 255, 255, 0.18)',
        glassShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    fonts: {
        body: "'Inter', sans-serif",
        heading: "'Poppins', sans-serif",
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
    },
    transitions: {
        default: '0.3s ease',
    },
};

export type Theme = typeof theme;
