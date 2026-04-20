export type Project = {
    title: string;
    description: string;
    tags: string[];
    category: string;
    github: string;
    demo: string;
    stars: number;
    featured: boolean;
    metrics: string[];
    color: string;
};

export const projects: Project[] = [
    {
        title: 'My Portfolio V1.0',
        description:
            'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
        tags: ['Vue', 'PrimeVue', 'Tailwindcss', 'FastAPI'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 142,
        featured: true,
        metrics: [],
        color: 'orange',
    },
    {
        title: 'StockFlow',
        description:
            'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
        tags: ['React', 'Hero UI', 'Tailwindcss', 'Node.js', 'Express', 'PostgreSQL'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 142,
        featured: true,
        metrics: [],
        color: 'accent',
    },
    {
        title: 'Planning',
        description:
            'Outil collaboratif permettant d’organiser des réunions, planifier des projets et coordonner efficacement les activités d’équipe grâce à une gestion claire du calendrier et des tâches.',
        tags: ['Next', 'HeroUI', 'Tailwindcss', 'Django', 'Postgresql', 'Redis', 'Docker'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 89,
        featured: true,
        metrics: [],
        color: 'green',
    },
    {
        title: 'AutoFlow',
        description:
            'Solution d’automatisation qui analyse les e-mails grâce à l’intelligence artificielle et déclenche des actions via des workflows personnalisés créés avec n8n pour optimiser les tâches répétitives.',
        tags: ['React', 'Shadecn UI', 'Tailwindcss', 'Flask', 'Redis', 'PostgreSQL', 'N8N'],
        category: 'Web Application + IA',
        github: '#',
        demo: '#',
        stars: 234,
        featured: true,
        metrics: [],
        color: 'purple',
    },
    {
        title: 'Smart Shopping',
        description:
            'Système de gestion e-commerce où l’administrateur organise les produits par catégories, suit les clients, gère les commandes et supervise efficacement les livraisons depuis un tableau de bord centralisé.',
        tags: ['Vue', 'PrimeVue', 'Tailwindcss', 'Express', 'PostgreSQL'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 178,
        featured: true,
        metrics: [],
        color: 'orange',
    },
    {
        title: 'MediBook',
        description:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        tags: ['React', 'Shadecn UI', 'Tailwindcss', 'Nest', 'Postgresql'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 67,
        featured: true,
        metrics: [],
        color: 'accent',
    },
    {
        title: 'Sendora',
        description:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        tags: ['React', 'Material UI', 'FastAPI', 'Tailwindcss', 'PostgreSQL'],
        category: 'Web Application + cloud',
        github: '#',
        demo: '#',
        stars: 95,
        featured: true,
        metrics: [],
        color: 'green',
    },
    {
        title: 'My Portfolio V2.0',
        description:
            'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
        tags: ['React', 'Tailwindcss'],
        category: 'Web Application',
        github: '#',
        demo: '#',
        stars: 142,
        featured: true,
        metrics: [],
        color: 'accent',
    },
];

export type ToolBox = {
    source: string;
    title: string;
    description: string;
    color: string;
    type: string;
};

export const toolbox: ToolBox[] = [
    {
        source: 'https://github.com/joshue-agape/ps-git-aliases',
        title: 'Git CLI',
        description: 'Predefined Git aliases to speed up common version control workflows.',
        color: 'purple',
        type: 'Alias PowerShell Windows',
    },
    {
        source: 'https://github.com/joshue-agape/ps-docker-aliases',
        title: 'Docker CLI',
        description: 'Predefined Docker aliases to speed up common version control workflows.',
        color: 'accent',
        type: 'Alias PowerShell Windows',
    },
];
