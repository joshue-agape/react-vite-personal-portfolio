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
