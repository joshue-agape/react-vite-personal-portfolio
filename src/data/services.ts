import { Globe2, Palette, PencilRuler, Server, Smartphone, Webhook, type LucideIcon } from "lucide-react";

export type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    color: string;
}

export const services: Service[] = [
    {
        icon: Globe2,
        title: 'Front-End Web Development',
        description:
            'Building modern, responsive, and high-performance web interfaces optimized for all devices and browsers.',
        features: [
            'Tech: React, Next.js, Vue, Angular',
            'Styling: Tailwind CSS, Bootstrap',
            'UI Libraries: MUI, Shadcn UI, PrimeVue',
        ],
        color: 'accent',
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description:
            'Developing scalable and user-friendly mobile applications with seamless performance across platforms.',
        features: [
            'Tech: Flutter (Dart), React Native',
            'Cross-platform development',
            'Performance optimization',
        ],
        color: 'green',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description:
            'Designing intuitive and visually engaging interfaces focused on usability, accessibility, and user experience.',
        features: [
            'Tools: Figma, Lunacy',
            'Wireframing & prototyping',
            'Design systems & UI consistency',
        ],
        color: 'purple',
    },
    {
        icon: Server,
        title: 'Back-End Development',
        description:
            'Building secure, scalable, and efficient server-side systems with robust APIs and database management.',
        features: [
            'Languages: TypeScript, Python, PHP, Java',
            'API & cloud integrations',
            'Databases: PostgreSQL, MySQL, MongoDB',
        ],
        color: 'purple',
    },
    {
        icon: Webhook,
        title: 'DevOps / CI-CD',
        description:
            'Automating deployment workflows and infrastructure to ensure fast, reliable, and consistent delivery pipelines.',
        features: [
            'Containerization: Docker',
            'CI/CD: GitHub Actions, Jenkins',
            'Infrastructure automation',
        ],
        color: 'green',
    },
    {
        icon: PencilRuler,
        title: 'Methodology',
        description:
            'Applying structured development methodologies to ensure efficient collaboration, delivery, and project success.',
        features: ['Agile Scrum practices', 'Merise & 2TUP methods', 'Project planning & tracking'],
        color: 'accent',
    },
];
