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
            'Design and development of a complete solution ensuring reliability and performance. Implementation of a dynamic interface to visualize analyzed emails and integration of data processed by n8n workflows with filtering and organization.',
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
            'Full development of the application including image capture and enhancement. Creation of visualization, editing, and data export interfaces, and implementation of an adaptable OCR engine to extract information according to specifications.',
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
            'Design and development of an appointment management application synchronized with Google Calendar. Implementation of a RESTful and WebSocket API for real-time communication and front-end and back-end development for a smooth and responsive user interface.',
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
            'Optimization of existing code to improve performance and usability. Development of new features according to client requirements and bug fixes to enhance the user experience.',
        tags: ['Node.js', 'Express', 'Docker', 'websocket'],
        image: '/experiences/node-express.jpg',
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
        image: '/experiences/laravel.png',
    },
];
