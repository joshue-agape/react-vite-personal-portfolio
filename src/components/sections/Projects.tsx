import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '@/data/projects';
import { Star, ExternalLink, GitBranch, Layers, FolderGit2 } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

const GithubIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const categories = ['All', 'Web Application', 'Mobile Application', 'Backend Services'];

const colorMap: Record<string, { text: string; bg: string }> = {
    accent: { text: 'var(--accent)', bg: 'var(--accent-muted)' },
    green: { text: 'var(--green)', bg: 'var(--green-muted)' },
    purple: { text: 'var(--purple)', bg: 'var(--purple-muted)' },
    orange: { text: 'var(--orange)', bg: '#fcac1913' },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
    const [hovered, setHovered] = useState(false);
    const colors = colorMap[project.color] || colorMap.accent;

    return (
        <motion.div
            variants={staggerItem}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer bg-(--bg-card)"
            style={{
                border: `1px solid ${hovered ? colors.text : 'var(--border)'}`,
                boxShadow: hovered
                    ? `0 16px 48px ${colors.text}20, var(--shadow-md)`
                    : 'var(--shadow-sm)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
        >
            <motion.div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${colors.text}, transparent)` }}
                animate={{ opacity: hovered ? 1 : 0.4 }}
            />

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                        {project.featured && (
                            <span
                                className="px-2 py-0.5 rounded-full text-xs font-mono font-bold"
                                style={{ background: colors.bg, color: colors.text }}
                            >
                                Featured
                            </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-(--bg-tertiary) text-(--text-muted)">
                            {project.category}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono text-(--text-muted)">
                        <Star size={12} />
                        {project.stars}
                    </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-(--text-primary)">{project.title}</h3>

                <p className="text-sm leading-relaxed mb-4 text-(--text-secondary)">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key="short"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {project.description}
                        </motion.span>
                    </AnimatePresence>
                </p>

                {project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.metrics.map((m) => (
                            <span
                                key={m}
                                className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-md"
                                style={{ background: colors.bg, color: colors.text }}
                            >
                                <Layers size={10} />
                                {m}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs font-mono border border-(--border) text-(--text-muted) bg-(--bg-tertiary)"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {(project.github || project.demo) && (
                    <div className="flex items-center gap-3 pt-4 border-t border-(--border) mt-5">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-(--bg-tertiary) text-(--text-secondary) border border-(--border)"
                            >
                                <GithubIcon />
                                GitHub
                            </motion.a>
                        )}
                        {project.demo && (
                            <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                                style={{ background: colors.bg, color: colors.text }}
                            >
                                <ExternalLink size={12} />
                                Demo
                            </motion.a>
                        )}
                        <motion.div className="ml-auto" animate={{ x: hovered ? 4 : 0 }}>
                            <GitBranch size={14} style={{ color: colors.text }} />
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category.startsWith(activeCategory));

    return (
        <section id="projects" className="py-28 relative">
            <div className="absolute inset-0" style={{ background: 'var(--bg-secondary)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-12"
                >
                    <div className="section-label justify-center mb-4">Projects</div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        My <span className="text-gradient">achievements</span>
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-(--text-secondary)">
                        A selection of projects showcasing my expertise in web development and
                        modern application design.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                            style={{
                                background:
                                    activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                                boxShadow:
                                    activeCategory === cat
                                        ? '0 4px 14px var(--accent-subtle)'
                                        : 'none',
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    {filtered.length > 0 ? (
                        <motion.div
                            key={activeCategory}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start"
                        >
                            {filtered.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="w-full min-h-100 rounded-2xl border border-dashed border-neutral-700 bg-gray-950/30 backdrop-blur-sm flex items-center justify-center flex-col text-center p-10"
                        >
                            {/* Icon */}
                            <div className="p-4 rounded-full bg-neutral-800 border border-neutral-700 mb-6 shadow-inner">
                                <FolderGit2 className="w-10 h-10 text-neutral-400" />
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl font-semibold text-neutral-100 tracking-tight">
                                No Projects Found
                            </h1>

                            {/* Description */}
                            <p className="text-neutral-400 mt-3 max-w-md text-sm leading-relaxed">
                                There are currently no projects to display. Stay tuned — new work
                                will be added soon.
                            </p>

                            {/* Optional Button */}
                            <button className="mt-6 px-5 py-2.5 text-sm font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700 text-neutral-200">
                                Refresh
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
