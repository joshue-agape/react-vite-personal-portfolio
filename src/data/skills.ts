export type Skill = {
    title: string;
    subtitle: string;
    techs: { name: string; value: number }[];
};

export const skills: Skill[] = [
    {
        title: 'Front-End Web & Mobile Development',
        subtitle:
            'Design and development of high-performance, responsive, and accessible interfaces for web and mobile applications. Proficient with modern frameworks, UI integration, performance optimization, accessibility, animations, and efficient API consumption.',
        techs: [
            { name: 'Vue.js', value: 90 },
            { name: 'React', value: 90 },
            { name: 'Next.js', value: 90 },
            { name: 'Angular', value: 80 },
            { name: 'Flutter', value: 80 },
            { name: 'React Native', value: 90 },
            { name: 'Bootstrap', value: 90 },
            { name: 'Tailwind CSS', value: 90 },
        ],
    },
    {
        title: 'Back-End Services Development',
        subtitle:
            'Architecture and development of secure and scalable back-end services. API design, database management, authentication, performance optimization, testing, integrations, and reliable cloud deployment aligned with business requirements.',
        techs: [
            { name: 'Node.js', value: 90 },
            { name: 'Express.js', value: 90 },
            { name: 'NestJS', value: 90 },
            { name: 'Django', value: 90 },
            { name: 'Flask', value: 80 },
            { name: 'FastAPI', value: 90 },
            { name: 'Laravel', value: 70 },
            { name: 'Symfony', value: 70 },
        ],
    },
    {
        title: 'UI/UX Design & Database & DevOps',
        subtitle:
            'User-centered design and DevOps practices for reliable delivery. Prototyping, user testing, design systems, automation, CI/CD, security, monitoring, continuous performance improvement, collaboration, quality, scalability, and documentation.',
        techs: [
            { name: 'Figma', value: 50 },
            { name: 'MySQL', value: 90 },
            { name: 'PostgreSQL', value: 90 },
            { name: 'MongoDB', value: 50 },
            { name: 'Git', value: 90 },
            { name: 'Docker', value: 90 },
            { name: 'Jenkins', value: 60 },
            { name: 'SEO', value: 50 },
        ],
    },
];

export type Framework = {
    name: string;
    icon: string;
};

export const frameworks: Framework[] = [
    { name: 'IA N8N', icon: '/techs/n8n.png' },
    { name: 'Tailwind css', icon: '/techs/tailwindcss.png' },
    { name: 'Bootstrap', icon: '/techs/bootstrap.jpeg' },
    { name: 'Nuxt', icon: '/techs/nuxt.png' },
    { name: 'Primevue', icon: '/techs/primevue.png' },
    { name: 'Quasar', icon: '/techs/quasar.png' },
    { name: 'Nest', icon: '/techs/nestjs.png' },
    { name: 'Vuetify', icon: '/techs/vuetify.jpeg' },
    { name: 'Material UI', icon: '/techs/material-ui.jpg' },
    { name: 'Hero UI', icon: '/techs/heroUI.png' },
    { name: 'React bootstrap', icon: '/techs/React-bootstrap.webp' },
    { name: 'Shadcn ui', icon: '/techs/shadcs.png' },
    { name: 'Chakra UI', icon: '/techs/chakraui.jpeg' },
    { name: 'Ant design', icon: '/techs/ant-design.jpg' },
    { name: 'Primereact', icon: '/techs/primereact.jpg' },
    { name: 'Element Plus', icon: '/techs/element-plus.png' },
    { name: 'Bootstrap vue', icon: '/techs/bootstrapvue.jpg' },
    { name: 'PrimeNG', icon: '/techs/primeng.png' },
    { name: 'Angular Material', icon: '/techs/angular-material.svg' },
    { name: 'Lucide Icon', icon: '/techs/lucide.jpg' },
    { name: 'Flaticon', icon: '/techs/flaticon.jpeg' },
    { name: 'Native Expo', icon: '/techs/native-expo.jpeg' },
    { name: 'Prisma ORM', icon: '/techs/prisma.png' },
    { name: 'Sequelize', icon: '/techs/sequelize.jpg' },
];
