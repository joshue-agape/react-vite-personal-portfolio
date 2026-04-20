import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail, Zap, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { staggerContainer, staggerItem } from '@/utils/animations';

const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pb-10"
        >
            {/* Gradient bg */}
            <div className="absolute inset-0 mesh-gradient" />

            {/* Animated circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-40 -right-40 w-150 h-150 rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-60 -left-40 w-125 h-125 rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, var(--purple-muted) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
                    {/* Left — Text */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={staggerItem}
                            className="flex items-center gap-3 mb-6 flex-wrap"
                        >
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border bg-(--green-muted) border-(--green) text-(--green)">
                                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                {personalInfo.availability}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-(--text-muted)">
                                <MapPin size={12} />
                                {personalInfo.location}
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={staggerItem}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4 text-(--text-primary)"
                        >
                            {personalInfo.name.split(' ')[0]}{' '}
                            <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
                        </motion.h1>

                        {/* Animated role */}
                        <motion.div
                            variants={staggerItem}
                            className="text-xl sm:text-2xl font-mono font-semibold mb-6 h-9 text-(--accent)"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'DevOps Engineer',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                    'Cloud & Ops Engineer',
                                    2000,
                                    'Full Stack Developer',
                                    2000,
                                    'Mobile Developer',
                                    2000,
                                    'Data Analyst',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={staggerItem}
                            className="text-lg leading-relaxed mb-8 max-w-xl text-(--text-secondary)"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-10">
                            <motion.a
                                href="#contact"
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail size={16} />
                                Contact me
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Zap size={16} />
                                View my projects
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={staggerItem} className="flex items-center gap-4">
                            <span className="text-xs font-mono text-(--text-muted)">
                                — Find me on
                            </span>
                            {[
                                { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
                                {
                                    icon: LinkedinIcon,
                                    href: personalInfo.linkedin,
                                    label: 'LinkedIn',
                                },
                            ].map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-(--bg-secondary) border border-(--border) text-(--text-secondary)"
                                    title={label}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                            <motion.a
                                href={`mailto:${personalInfo.email}`}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-(--bg-secondary) border border-(--border) text-(--text-secondary)"
                            >
                                <Mail size={16} />
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={staggerItem}
                            className="grid grid-cols-4 gap-4 mt-12 mb-35 xl:mb-10 py-8 border-t border-(--border)"
                        >
                            {personalInfo.stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl font-extrabold font-mono text-(--accent)">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs mt-0.5 leading-tight text-(--text-muted)">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative my-10">
                            {/* Outer spinning ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-5.5 rounded-full opacity-[0.35]"
                                style={{
                                    background:
                                        'conic-gradient(from 0deg, var(--accent), var(--purple), transparent 60%, var(--accent))',
                                }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-2.5 rounded-full opacity-[0.2]"
                                style={{
                                    background:
                                        'conic-gradient(from 180deg, transparent 50%, var(--purple))',
                                }}
                            />

                            {/* Profile image */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-3 border-(--accent)"
                                style={{
                                    boxShadow:
                                        '0 0 40px var(--accent-subtle), 0 20px 60px rgba(0,0,0,0.25)',
                                }}
                            >
                                <img
                                    src="/images/profile.jpg"
                                    alt="Alexandre Moreau"
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background:
                                            'linear-gradient(to bottom, transparent 60%, var(--accent-subtle) 100%)',
                                    }}
                                />
                            </motion.div>

                            {/* Floating badges */}
                            {personalInfo.floating_badges.map((badge, i) => (
                                <motion.div
                                    key={badge.text}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 3.5 + i * 0.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.6,
                                    }}
                                    className={`${badge.pos} px-3 py-2 rounded-xl text-xs font-mono font-bold bg-(--bg-card) border border-(--border) shadow-(--shadow-md)`}
                                    style={{
                                        color: badge.color,
                                    }}
                                >
                                    {badge.text}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs font-mono text-(--text-muted)">scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-(--text-muted)"
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
