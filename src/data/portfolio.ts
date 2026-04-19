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
};

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

export const projects = [
    {
        id: 1,
        title: 'StockFlow',
        description:
            'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
        longDescription:
            'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
        tags: ['React', 'Hero UI', 'Tailwindcss', 'Node.js', 'Express', 'PostgreSQL'],
        category: 'Application Web',
        github: '#',
        demo: '#',
        stars: 142,
        featured: true,
        metrics: [''],
        color: 'accent',
    },
    {
        id: 2,
        title: 'Planning',
        description:
            'Outil collaboratif permettant d’organiser des réunions, planifier des projets et coordonner efficacement les activités d’équipe grâce à une gestion claire du calendrier et des tâches.',
        longDescription:
            'Outil collaboratif permettant d’organiser des réunions, planifier des projets et coordonner efficacement les activités d’équipe grâce à une gestion claire du calendrier et des tâches.',
        tags: ['Next', 'HeroUI', 'Tailwindcss', 'Django', 'Postgresql', 'Redis', 'Docker'],
        category: 'Application Web',
        github: '#',
        demo: '#',
        stars: 89,
        featured: true,
        metrics: [''],
        color: 'green',
    },
    {
        id: 3,
        title: 'AutoFlow',
        description:
            'Solution d’automatisation qui analyse les e-mails grâce à l’intelligence artificielle et déclenche des actions via des workflows personnalisés créés avec n8n pour optimiser les tâches répétitives.',
        longDescription:
            'Solution d’automatisation qui analyse les e-mails grâce à l’intelligence artificielle et déclenche des actions via des workflows personnalisés créés avec n8n pour optimiser les tâches répétitives.',
        tags: ['React', 'Shadecn UI', 'Tailwindcss', 'Flask', 'Redis', 'PostgreSQL', 'N8N'],
        category: 'Application Web + IA',
        github: '#',
        demo: '#',
        stars: 234,
        featured: true,
        metrics: [''],
        color: 'purple',
    },
    {
        id: 4,
        title: 'Smart Shopping',
        description:
            'Système de gestion e-commerce où l’administrateur organise les produits par catégories, suit les clients, gère les commandes et supervise efficacement les livraisons depuis un tableau de bord centralisé.',
        longDescription:
            'Système de gestion e-commerce où l’administrateur organise les produits par catégories, suit les clients, gère les commandes et supervise efficacement les livraisons depuis un tableau de bord centralisé.',
        tags: ['Vue', 'PrimeVue', 'Tailwindcss', 'Express', 'PostgreSQL'],
        category: 'Application Web',
        github: '#',
        demo: '#',
        stars: 178,
        featured: true,
        metrics: [''],
        color: 'orange',
    },
    {
        id: 5,
        title: 'MediBook',
        description:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        longDescription:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        tags: ['React', 'Shadecn UI', 'Tailwindcss', 'Nest', 'Postgresql'],
        category: 'Application Web',
        github: '#',
        demo: '#',
        stars: 67,
        featured: true,
        metrics: [''],
        color: 'accent',
    },
    {
        id: 6,
        title: 'Sendora',
        description:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        longDescription:
            'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
        tags: ['React', 'Material UI', 'FastAPI', 'Tailwindcss', 'PostgreSQL'],
        category: 'Application Web + cloud',
        github: '#',
        demo: '#',
        stars: 95,
        featured: true,
        metrics: [''],
        color: 'green',
    },
];

type Skill = {
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

export const frameworks = [
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

export const services = [
    {
        icon: '💻',
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
        icon: '📱',
        title: 'Mobile Development',
        description:
            'Developing scalable and user-friendly mobile applications with seamless performance across platforms.',
        features: [
            'Tech: Flutter (Dart), React Native',
            'Cross-platform development',
            'Performance optimization',
        ],
        color: 'purple',
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description:
            'Designing intuitive and visually engaging interfaces focused on usability, accessibility, and user experience.',
        features: [
            'Tools: Figma, Lunacy',
            'Wireframing & prototyping',
            'Design systems & UI consistency',
        ],
        color: 'blue',
    },
    {
        icon: '🧠',
        title: 'Back-End Development',
        description:
            'Building secure, scalable, and efficient server-side systems with robust APIs and database management.',
        features: [
            'Languages: TypeScript, Python, PHP, Java',
            'API & cloud integrations',
            'Databases: PostgreSQL, MySQL, MongoDB',
        ],
        color: 'green',
    },
    {
        icon: '⚙️',
        title: 'DevOps / CI-CD',
        description:
            'Automating deployment workflows and infrastructure to ensure fast, reliable, and consistent delivery pipelines.',
        features: [
            'Containerization: Docker',
            'CI/CD: GitHub Actions, Jenkins',
            'Infrastructure automation',
        ],
        color: 'orange',
    },
    {
        icon: '📐',
        title: 'Methodology',
        description:
            'Applying structured development methodologies to ensure efficient collaboration, delivery, and project success.',
        features: ['Agile Scrum practices', 'Merise & 2TUP methods', 'Project planning & tracking'],
        color: 'accent',
    },
];

export const toolbox = [
    {
        source: 'https://github.com/joshue-agape/ps-git-aliases',
        title: 'Git',
        description: 'Predefined Git aliases to speed up common version control workflows.',
        color: 'accent',
        type: 'Alias PowerShell Windows',
    },
];

const parcours_response = `
**Mon parcours en bref** 🚀
e Joshué Agapé a **6+ ans d'expérience** dans le DevOps & Ops Engineering :

**2024 — Présent** → Senior DevOps @ CloudScale
Migration GitOps complète, réduction MTTR de 60%, Kubernetes multi-cluster

**2022 — 2024** → SRE @ Fintech Lyra
Systèmes de paiement critiques, chaos engineering, réduction incidents -70%

**2020 — 2022** → DevOps Engineer @ Capgemini
12 clients grands comptes, pipelines CI/CD GitLab & Azure DevOps

**Certifications** :
- 🏆 Certified Kubernetes Administrator (CKA)
- ☁️ AWS Solutions Architect Professional

Il est diplômé d'un **Master Informatique** de Paris-Saclay (Réseaux & Systèmes).
`;

const skills_response = `
**Stack technique de Joshué Agapé** 💻

**Container & Orchestration** ☸️
Kubernetes (95%), Docker (98%), Helm, ArgoCD, Istio

**Cloud** ☁️
AWS (92%) — Solutions Architect Pro, GCP (80%), Azure (75%)

**Infrastructure as Code** 🏗️
Terraform (95%), Ansible (88%), Pulumi, Crossplane

**CI/CD & GitOps** 🔄
GitHub Actions (95%), GitLab CI (90%), Jenkins, FluxCD

**Observabilité** 📊
Prometheus, Grafana, Loki, OpenTelemetry, Datadog

**Scripting** 🐚
Bash (95%), Python (88%), Go (72%)
`;

const projects_response = `
**Projets phares** 🌟

**🚀 GitOps Platform Automation** (⭐ 142)
Plateforme GitOps avec ArgoCD pour 50+ microservices sur 3 clusters Kubernetes. Zero-downtime deployments, progressive delivery.

**📊 Observability Stack** (⭐ 89)
Stack complète Prometheus/Grafana/Loki/OpenTelemetry pour 10M req/jour. SLO 99.95%, MTTR < 2min.

**🔷 Cloud IaC Library** (⭐ 234)
Modules Terraform AWS réutilisables — environnement complet en 15 minutes. Multi-région, disaster recovery.

**🔄 CI/CD Pipeline Framework** (⭐ 178)
Framework GitHub Actions pour 30+ équipes. SAST/DAST intégré, security gates.

Tous les projets sont disponibles dans la section **Projects** du portfolio !
`;

const contact_response = `
**Me contacter** 📬
e Joshué Agapé est **ouvert aux opportunités** ! 

📧 **Email** :e Joshué Agapé.moreau@devops.io
💼 **LinkedIn** : /ine Joshué Agapé-moreau-devops
🐙 **GitHub** : /alexmoreau-devops
📍 **Localisation** : Paris, France (remote possible)

**Disponible pour** :
- Postes Senior DevOps / SRE / Platform Engineer
- Missions freelance longue durée
- Consulting architecture cloud
- Audit & optimisation infrastructure

N'hésitez pas à utiliser le **formulaire de contact** ou à me contacter directement !
`;

const services_response = `
**Ce que Joshué Agapé propose** 🛠️

🔄 **CI/CD Architecture** — Pipelines complets, blue/green, security gates
☁️ **Cloud Infrastructure** — AWS/GCP/Azure, IaC, FinOps, Landing Zones
☸️ **Kubernetes & Containers** — EKS/GKE/AKS, GitOps, service mesh
📊 **Observabilité & SRE** — Prometheus/Grafana, SLO, incident management
🔐 **Security & DevSecOps** — SAST/DAST, Vault, CIS compliance
⚡ **Automation** — Ansible, Python, self-healing infrastructure

Chaque engagement commence par un **audit de votre infrastructure existante** pour proposer les meilleures solutions.
`;

const default_response = `
Bonjour ! Je suis l'assistant de Joshué Agapé 👋

Je peux vous renseigner sur :
- 📚 Son **parcours** et ses expériences
- 💻 Ses **compétences** techniques
- 🚀 Ses **projets** réalisés
- 🛠️ Ses **services** proposés
- 📬 Comment le **contacter**

Que souhaitez-vous savoir ?
`;

export const aiKnowledge = {
    greetings: ['Bonjour', 'Hello', 'Salut', 'Hi', 'Hey'],
    responses: {
        parcours: {
            keywords: [
                'parcours',
                'expérience',
                'carrière',
                'career',
                'experience',
                'background',
                'histoire',
                'history',
                'cv',
                'resume',
            ],
            response: parcours_response,
        },
        skills: {
            keywords: [
                'compétences',
                'skills',
                'technologies',
                'tech',
                'stack',
                'outils',
                'tools',
                'expertise',
                'kubernetes',
                'terraform',
                'aws',
                'docker',
                'devops',
            ],
            response: skills_response,
        },
        projects: {
            keywords: [
                'projet',
                'project',
                'réalisation',
                'work',
                'portfolio',
                'github',
                'démo',
                'demo',
                'création',
            ],
            response: projects_response,
        },
        contact: {
            keywords: [
                'contact',
                'email',
                'hire',
                'recruter',
                'disponible',
                'available',
                'mission',
                'freelance',
                'poste',
                'job',
                'linkedin',
            ],
            response: contact_response,
        },
        services: {
            keywords: [
                'service',
                'propose',
                'offre',
                'offer',
                'consulting',
                'aide',
                'help',
                'besoin',
                'need',
            ],
            response: services_response,
        },
        default: default_response,
    },
};
