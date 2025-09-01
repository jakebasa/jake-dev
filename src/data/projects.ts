import {
    filheimImg,
    eucorpImg,
    helprImg,
    dormhubImg,
    syCipImg,
    memoraImg,
} from '../assets';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
}

// All projects for the projects page
export const projects: Project[] = [
    {
        id: 1,
        title: 'Memora Journal',
        description:
            'This AI-powered journaling platform revolutionizes personal reflection through intelligent content analysis and mood tracking. The system features Google Gemini AI integration for personalized writing prompts, automated entry analysis, and comprehensive analytics dashboards. Users can organize entries with custom tags, upload images via Cloudinary, and visualize their emotional patterns through charts, making it an essential tool for mindful self-reflection and personal growth.',
        image: memoraImg,
        techStack: [
            'React',
            'TypeScript',
            'Node.js',
            'MongoDB',
            'Google Gemini AI',
            'Cloudinary',
            'Tailwind CSS',
        ],
        githubUrl: 'https://github.com/jakebasa/memora-journal-app',
        liveUrl: 'no-link',
    },
    {
        id: 2,
        title: 'Filheim',
        description:
            'A bespoke cabinetry website built with Next.js and Strapi, designed for a premium woodworking brand. Features a modern, responsive interface and an easy-to-manage content system for showcasing custom furniture.',
        image: filheimImg,
        techStack: ['Next.js', 'Strapi', 'Tailwind CSS', 'React'],
        githubUrl: 'https://github.com/jakebasa/filheim-cms',
        liveUrl: 'https://www.filheim.com/',
    },
    {
        id: 3,
        title: 'SyCip Builders',
        description:
            'A premium residential construction company website that showcases luxury home projects in Metro Manila. The site features elegant design and seamless user experience to highlight their bespoke designs and exceptional craftsmanship in boutique residential projects.',
        image: syCipImg,
        techStack: ['Webflow'],
        githubUrl: 'no-link',
        liveUrl: 'https://www.sycipbuilders.com/',
    },

    {
        id: 4,
        title: 'Eucorp',
        description:
            'This AI-powered institutional planning system, which streamlines academic management through automated report generation, is now being used by Manuel S. Enverga University Foundation. The system intelligently evaluates institutional goals and objectives, automatically generating comprehensive reports to track progress and identify areas that need attention.',
        image: eucorpImg,
        techStack: [
            'Sveltekit',
            'Supabase',
            'PostgreSQL',
            'Typescript',
            'OpenAI',
        ],
        githubUrl: 'https://github.com/carlotesoro2003/EuCorp',
        liveUrl: 'https://eucorp.vercel.app/',
    },
    {
        id: 5,
        title: 'Helpr',
        description:
            'A UI/UX prototype for a home service booking platform designed to connect homeowners with service providers. Features include service booking, provider profiles, and real-time scheduling.',
        image: helprImg,
        techStack: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
        githubUrl: 'no-link',
        liveUrl:
            'https://www.figma.com/proto/tUoxq4TePrwwkLeVzzk871/On-Demand-Home-Service-App?page-id=0%3A1&node-id=80-130&viewport=-1001%2C-302%2C0.5&t=A9oa4HRvZRaLQ1KA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=80%3A129&show-proto-sidebar=1',
    },

    {
        id: 6,
        title: 'Dormhub',
        description:
            'A web-based application designed to simplify dormitory operations such as room assignments and tenant management. Built with Node.js, Express, and React for efficient and modern management of dormitory facilities.',
        image: dormhubImg,
        techStack: [
            'React',
            'Express.js',
            'Node.js',
            'MongoDB',
            'JWT',
            'Mongoose',
        ],
        githubUrl: 'https://github.com/jakebasa/DormHub',
        liveUrl: 'no-link',
    },
];

// Featured projects for the home page
export const featuredProjects: Project[] = [
    projects[0], // AI-Powered Task Manager
    projects[1], // E-Commerce Platform
];

export type { Project };
