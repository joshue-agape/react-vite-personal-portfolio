import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toolbox } from '@/data/portfolio';
import { staggerContainer, staggerItem } from '@/utils/animations';

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
    accent: { text: 'var(--accent)', bg: 'var(--accent-muted)', border: 'var(--accent)' },
    blue: { text: 'var(--accent)', bg: 'var(--accent-muted)', border: 'var(--accent)' },
    purple: { text: 'var(--purple)', bg: 'var(--purple-muted)', border: 'var(--purple)' },
    green: { text: 'var(--green)', bg: 'var(--green-muted)', border: 'var(--green)' },
    orange: { text: 'var(--orange)', bg: '#fff7ed', border: 'var(--orange)' },
};

const GithubIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

export default function ToolBox() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="services" className="py-28 relative">
            <div className="absolute inset-0 bg-(--bg-secondary)" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-[0.5]"
                    style={{
                        background:
                            'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.5]"
                    style={{
                        background:
                            'radial-gradient(circle, var(--purple-muted) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <div className="section-label justify-center mb-4">Dev Toolbox</div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        What I <span className="text-gradient">Use & Build</span>
                    </h2>
                    <p className="mt-4 text-base max-w-2xl mx-auto text-(--text-secondary)">
                        A personal toolbox of commands, aliases, and scripts for Git, PowerShell,
                        and other developer tools to boost efficiency and automation.
                    </p>
                </motion.div>

                {/* Tool Box grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    {toolbox.map((item) => {
                        const colors = colorMap[item.color] || colorMap.accent;

                        return (
                            <motion.div
                                key={item.title}
                                variants={staggerItem}
                                whileHover={{ y: -10, scale: 1.04 }}
                                className="relative p-6 rounded-2xl overflow-hidden group cursor-default bg-(--bg-card) border border-(--border) shadow-(--shadow-sm)"
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${colors.text}14, transparent 65%)`,
                                    }}
                                />

                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className="text-[11px] font-mono px-2 py-1 rounded-md"
                                        style={{
                                            background: colors.bg,
                                            color: colors.text,
                                            border: `1px solid ${colors.text}25`,
                                        }}
                                    >
                                        {item.type}
                                    </span>

                                    <span className="text-[11px] font-mono opacity-70 text-(--text-muted)">
                                        TOOL
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold mb-2 tracking-tight text-(--text-primary)">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed mb-5 text-(--text-secondary)">
                                    {item.description}
                                </p>

                                <motion.a
                                    href={item.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center w-29 gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-(--bg-tertiary) text-(--text-secondary) border border-(--border)"
                                >
                                    <GithubIcon />
                                    Source code
                                </motion.a>

                                <div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(90deg, ${colors.text}, transparent)`,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
