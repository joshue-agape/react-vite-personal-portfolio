import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '@/data/portfolio';
import { CheckCircle2 } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/utils/animations';

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
    accent: { text: 'var(--accent)', bg: 'var(--accent-muted)', border: 'var(--accent)' },
    blue: { text: 'var(--accent)', bg: 'var(--accent-muted)', border: 'var(--accent)' },
    purple: { text: 'var(--purple)', bg: 'var(--purple-muted)', border: 'var(--purple)' },
    green: { text: 'var(--green)', bg: 'var(--green-muted)', border: 'var(--green)' },
    orange: { text: 'var(--orange)', bg: '#fff7ed', border: 'var(--orange)' },
};

export default function Services() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="services" className="py-28 relative">
            <div className="absolute inset-0" style={{ background: 'var(--bg-secondary)' }} />

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 right-0 w-96 h-96 rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
                        opacity: 0.5,
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, var(--purple-muted) 0%, transparent 70%)',
                        opacity: 0.5,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <div className="section-label justify-center mb-4">Services</div>
                    <h2
                        className="text-4xl sm:text-5xl font-extrabold"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        What <span className="text-gradient">I Do?</span>
                    </h2>
                    <p
                        className="mt-4 text-base max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        I design and develop high-performance, responsive web and mobile
                        applications, combining intuitive front-end with robust back-end. My work
                        covers the entire project lifecycle, from design to production, ensuring an
                        optimal user experience.
                    </p>
                </motion.div>

                {/* Services grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    {services.map((service) => {
                        const colors = colorMap[service.color] || colorMap.accent;
                        return (
                            <motion.div
                                key={service.title}
                                variants={staggerItem}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ duration: 0.25 }}
                                className="relative p-6 rounded-2xl group cursor-default overflow-hidden"
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    boxShadow: 'var(--shadow-sm)',
                                }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${colors.text}08 0%, transparent 60%)`,
                                    }}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                                    style={{ background: colors.bg }}
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-3"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm leading-relaxed mb-5"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2.5">
                                    {service.features.map((feat) => (
                                        <div key={feat} className="flex items-start gap-2.5">
                                            <CheckCircle2
                                                size={14}
                                                className="mt-0.5 shrink-0"
                                                style={{ color: colors.text }}
                                            />
                                            <span
                                                className="text-sm"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                {feat}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom accent line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, ${colors.text}, transparent)`,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div
                        className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    >
                        <div className="text-left">
                            <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                Besoin d'un DevOps pour votre projet ?
                            </div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                Discutons de vos besoins en infrastructure.
                            </div>
                        </div>
                        <motion.a
                            href="#contact"
                            className="btn-primary whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Démarrer une discussion →
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
