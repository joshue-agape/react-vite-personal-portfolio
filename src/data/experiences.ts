export type Experience = {
    year: string;
    type: string;
    title: string;
    company: string;
    location: string;
    description: string;
    tags: string[];
    image: string;
};

export const experiences: Experience[] = [
    {
        year: 'Oct. 2025 - Nov. 2025',
        type: 'work',
        title: 'Email Analysis Automation via AI and n8n',
        company: 'ENI',
        location: 'Fianarantsoa 301, Madagascar',
        description:
            'I created and implemented a comprehensive automation system for email analysis that leverages AI and n8n workflows. An interactive interface was built to visualize the processed emails, which facilitates effective filtering, organization, and provides real-time insights into the data.',
        tags: ['React.js', 'PostgreSQL', 'Flask', 'N8N', 'Docker'],
        image: '/experiences/n8n-autoflow.png',
    },
    {
        year: 'Oct. 2025 - Nov. 2025',
        type: 'work',
        title: 'Mobile Application Development - Mandika',
        company: 'RafalTech, Antananarivo',
        location: 'Full Remote',
        description:
            'I developed a mobile application that includes features for capturing and enhancing images. Additionally, I incorporated OCR technology for data extraction, along with user interfaces that allow for visualization, editing, and structured data export.',
        tags: ['Flutter', 'Django', 'PostgreSQL', 'Tesseract OCR', 'Hugging Face'],
        image: '/experiences/flutter-django.png',
    },
    {
        year: 'Aug. 2024 - Dec. 2024',
        type: 'work',
        title: 'Appointment Management Synchronized with Google Calendar',
        company: 'SfyriTech - Start Up',
        location: 'Antananarivo, Madagascar',
        description:
            'I designed and constructed a scheduling application that works seamlessly with Gogle Calendar. To ensure real-time updates and a smoth user experience throughout the platform, I developed both RESTful and WebSocket APIs.',
        tags: ['Quasar', 'PostgreSQL', 'Nest.js', 'Prisma ORM', 'Google Calendar API'],
        image: '/experiences/nest-vue.webp',
    },
    {
        year: 'May 2024 - Sept. 2024',
        type: 'work',
        title: 'API Development for the Hello Archi Platform',
        company: 'SfyriTech - Start Up',
        location: 'Full Remote',
        description:
            'I improved backend performance by refining the existing code and addressing critical issues. Furthermore, I created new API features tailored to client requirements, which enhanced usability, scalability, and the overall reliability of the system.',
        tags: ['Node.js', 'Express', 'Sequelize ORM', 'Docker', 'websocket'],
        image: '/experiences/node-express.jpg',
    },
    {
        year: 'Sept. 2023 - Nov. 2023',
        type: 'work',
        title: 'Order and Delivery Management Application',
        company: 'Open Data / Open Delivery',
        location: 'Antsirabe, Madagascar',
        description:
            'Contributed to the full-stack development of an order and delivery management system. Implemented custom features and scalable solutions tailored to client requirements, improving operational efficiency.',
        tags: ['Vue.js', 'PHP', 'Laravel', 'jQuery', 'MySQL'],
        image: '/experiences/laravel.png',
    },
];
