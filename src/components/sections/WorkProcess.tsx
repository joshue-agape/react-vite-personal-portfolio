import { motion } from 'framer-motion';
import { CalendarRange, ChartSpline, CodeXml, Server, type LucideIcon } from 'lucide-react';

interface WorkStep {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function WorkProcess() {
    const workStepData: WorkStep[] = [
        {
            title: 'Discovery & Requirement Analysis',
            description: 'Understanding objectives, users, and data.',
            icon: CalendarRange,
        },
        {
            title: 'Analysis & Architecture',
            description: 'Designing scalable architecture and system models.',
            icon: ChartSpline,
        },
        {
            title: 'Development & Data Processing',
            description: 'Building applications, APIs and data pipelines.',
            icon: CodeXml,
        },
        {
            title: 'Testing & Deployment',
            description: 'Testing, optimizing and deploying to production.',
            icon: Server,
        },
    ];

    return (
        <section id="work-process" className="py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid xl:grid-cols-2 gap-16 xl:gap-32 items-center">
                    {/* LEFT */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="section-label justify-center lg:justify-start"
                        >
                            Work Process
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center lg:text-start"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            How I build <span className="text-gradient">systems</span>
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base leading-relaxed text-center lg:text-start"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            I follow a structured engineering process focused on scalability,
                            performance, and maintainability. Each phase is designed to reduce
                            uncertainty and maximize product quality.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base leading-relaxed text-center lg:text-start"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            From ideation to production, I ensure every system is reliable,
                            observable, and optimized for real-world usage.
                        </motion.p>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 gap-x-6">
                        {workStepData.map((step, i) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 25, scale: 0.97 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.08,
                                        ease: 'easeOut',
                                    }}
                                    className={`group relative p-6 rounded-2xl bg-(--bg-card) border border-(--border) shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden ${i % 2 === 1 ? 'mt-8' : 'mb-8'}`}
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                        style={{
                                            background:
                                                'radial-gradient(circle at top left, var(--accent-subtle), transparent 60%)',
                                        }}
                                    />

                                    <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-(--bg-secondary) group-hover:bg-(--accent-muted) transition">
                                        <Icon
                                            size={20}
                                            className="group-hover:scale-110 transition text-(--accent)"
                                        />
                                    </div>

                                    <div className="text-xs font-mono mb-2 opacity-60 text-[--text-muted]">
                                        0{i + 1}
                                    </div>

                                    <h3 className="text-base font-semibold mb-2 text-(--text-primary)">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-(--text-secondary)">
                                        {step.description}
                                    </p>

                                    <div
                                        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                        style={{
                                            background:
                                                'linear-gradient(90deg, var(--accent), transparent)',
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
