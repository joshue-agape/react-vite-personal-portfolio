import 'swiper/css';
import 'swiper/css/pagination';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { frameworks, skills } from '@/data/skills';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

type MarqueeProps = {
    children: ReactNode;
    speed?: number;
};

export function Marquee({ children, speed = 40 }: MarqueeProps) {
    return (
        <div className="marquee">
            <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
                {children}
                {children}
            </div>
        </div>
    );
}

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section id="skills" className="py-28 relative">
            <div className="absolute inset-0 bg-(--bg-primary)" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <div className="section-label justify-center mb-4">Skills</div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        Technical <span className="text-gradient">Stack</span>
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-(--text-secondary)">
                        A clear summary of my technical expertise and the tools I master.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <Marquee speed={30}>
                        {frameworks.map((f, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-3 px-2 py-2 rounded-full mr-6"
                            >
                                <div className="overflow-hidden rounded-full w-15 h-15">
                                    <img src={f.icon} alt={f.name} className="w-full h-full" />
                                </div>
                                <span>{f.name}</span>
                            </div>
                        ))}
                    </Marquee>
                </motion.div>

                {/* Skills grid */}
                <Swiper
                    modules={[Pagination]}
                    grabCursor
                    pagination={{ clickable: true }}
                    className="pb-24 mt-20"
                >
                    {skills.map((category, catIdx) => (
                        <SwiperSlide key={category.title} className="px-1">
                            <motion.article
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: catIdx * 0.1,
                                    ease: 'easeOut',
                                }}
                                className="group relative px-0 md:px-10 py-5 mb-15"
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-40 dark:opacity-20 bg-linear-to-b from-blue-500/5 via-transparent to-purple-500/5" />

                                <header className="relative text-center mb-10">
                                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                                        {category.title}
                                    </h3>

                                    <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                                        {category.subtitle}
                                    </p>
                                </header>

                                <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                                    {category.techs.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group relative p-4 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5" />

                                            <div className="relative flex justify-between items-center mb-3">
                                                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                                    {tech.name}
                                                </span>

                                                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                                                    {tech.value}%
                                                </span>
                                            </div>

                                            <div className="relative w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-linear-to-r from-gray-500 to-white transition-all duration-700 ease-out"
                                                    style={{ width: `${tech.value}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* All skills tags cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm font-mono mb-6 text-(--text-muted)">// Soft Skills</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            'Problem Solving',
                            'Teamwork',
                            'Communication',
                            'Time Management',
                            'Adaptability',
                            'Creativity',
                            'Attention to Detail',
                            'Autonomy',
                        ].map((tool, i) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.7 + i * 0.03 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="skill-tag"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
