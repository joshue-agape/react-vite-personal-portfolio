const bio = `
A passionate web developer with over 3 years of experience, I design modern, high-performance, user-centered applications. My growth is driven by continuous technology monitoring and hands-on projects focused on quality, maintainability, and performance.

My approach: Infrastructure as Code. I build reliable systems that enable product teams to deploy with confidence.
`;

export const personalInfo = {
    name: 'Joshué Agapé',
    birth: 'November, 27 2001',
    role: 'Full-Stack Developer with an OPS',
    experience: '3+ years',
    tagline:
        'Passionate about development, I am constantly driven by designing innovative solutions and continuously improving my technical skills.',
    location: 'Fianarantsoa 301, Madagascar',
    email: 'agapedev.dark@gmail.com',
    github: 'https://github.com/joshue-agape',
    linkedin: 'https://linkedin.com/in/joshue-agape-devops',
    availability: 'Open to opportunities',
    bio: bio,
    stats: [
        { label: 'Years of experience', value: '3+' },
        { label: 'Completed projects', value: '10+' },
        { label: 'Uptime rate', value: '99.9%' },
        { label: 'Services offered', value: '6+' },
    ],
    floating_badges: [
        {
            text: '🐘 PHP',
            color: 'var(--accent)',
            pos: 'absolute -right-4 top-8',
        },
        {
            text: '🐍 Python',
            color: 'var(--green)',
            pos: 'absolute -left-8 bottom-16',
        },
        {
            text: '🔷 Flutter Dart',
            color: 'var(--purple)',
            pos: 'absolute -right-12 bottom-10',
        },
    ],
};

export type Timeline = {
    year: string;
    type: string;
    title: string;
    company: string;
    location: string;
    description: string;
    tags: string[];
    image: string;
}

export const timeline: Timeline[] = [
    {
        year: 'Oct. 2025 - Nov. 2025',
        type: 'work',
        title: 'Email Analysis Automation via AI and n8n',
        company: 'ENI',
        location: 'Fianarantsoa 301, Madagascar',
        description:
            'Design and development of a complete solution ensuring reliability and performance. Implementation of a dynamic interface to visualize analyzed emails and integration of data processed by n8n workflows with filtering and organization.',
        tags: ['React.js', 'PostgreSQL', 'Flask', 'N8N', 'Docker'],
        image: "/experiences/n8n-autoflow.png",
    },
    {
        year: 'Oct. 2025 - Nov. 2025',
        type: 'work',
        title: 'Mobile Application Development - Mandika',
        company: 'RafalTech, Antananarivo',
        location: 'Full Remote',
        description:
            'Full development of the application including image capture and enhancement. Creation of visualization, editing, and data export interfaces, and implementation of an adaptable OCR engine to extract information according to specifications.',
        tags: ['Flutter', 'Django', 'PostgreSQL', 'Tesseract OCR', 'Hugging Face'],
        image: "/experiences/flutter-django.png",
    },
    {
        year: 'Aug. 2024 - Dec. 2024',
        type: 'work',
        title: 'Appointment Management Synchronized with Google Calendar',
        company: 'SfyriTech - Start Up',
        location: 'Antananarivo, Madagascar',
        description:
            'Design and development of an appointment management application synchronized with Google Calendar. Implementation of a RESTful and WebSocket API for real-time communication and front-end and back-end development for a smooth and responsive user interface.',
        tags: ['Quasar', 'PostgreSQL', 'Nest.js', 'Prisma ORM', 'Google Calendar API'],
        image: "/experiences/nest-vue.webp",
    },
    {
        year: 'May 2024 - Sept. 2024',
        type: 'work',
        title: 'API Development for the Hello Archi Platform',
        company: 'SfyriTech - Start Up',
        location: 'Full Remote',
        description:
            'Optimization of existing code to improve performance and usability. Development of new features according to client requirements and bug fixes to enhance the user experience.',
        tags: ['Node.js', 'Express', 'Docker', 'websocket'],
        image: "/experiences/node-express.jpg",
    },
    {
        year: 'Sept. 2023 - Nov. 2023',
        type: 'work',
        title: 'Order and Delivery Management Application',
        company: 'Open Data / Open Delivery',
        location: 'Antsirabe, Madagascar',
        description:
            'Design and development of front-end and back-end aspects of websites and web applications. Implementation of software solutions tailored to client needs and development of custom features according to specifications.',
        tags: ['vue.js', 'PHP', 'Laravel', 'jQuery', 'MySQL'],
        image: "/experiences/laravel.png",
    },
];
