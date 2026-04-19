import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { threshold: 0.4 },
        );
        document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all max-w-[100vw] duration-300 ${
                    scrolled ? 'nav-blur shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.a
                            href="#hero"
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--accent)' }}
                            >
                                <Terminal size={16} color="#fff" />
                            </div>
                            <span
                                className="font-mono font-bold text-base"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                rja<span style={{ color: 'var(--accent)' }}>@devops</span>
                                <span
                                    className="terminal-line"
                                    style={{ color: 'var(--accent)' }}
                                ></span>
                            </span>
                        </motion.a>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                    style={{
                                        color:
                                            activeSection === link.href.slice(1)
                                                ? 'var(--accent)'
                                                : 'var(--text-secondary)',
                                    }}
                                >
                                    {activeSection === link.href.slice(1) && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-md"
                                            style={{ background: 'var(--accent-muted)' }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative">{link.label}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Right actions */}
                        <div className="flex items-center gap-2">
                            {/* CTA */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:flex btn-primary"
                            >
                                Hire Me
                            </motion.a>

                            {/* Mobile menu */}
                            <motion.button
                                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-secondary)',
                                }}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-16 left-0 right-0 z-40 nav-blur border-b"
                        style={{ borderColor: 'var(--border)' }}
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        background:
                                            activeSection === link.href.slice(1)
                                                ? 'var(--accent-muted)'
                                                : 'transparent',
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-primary mt-2 justify-center"
                                onClick={() => setMobileOpen(false)}
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
