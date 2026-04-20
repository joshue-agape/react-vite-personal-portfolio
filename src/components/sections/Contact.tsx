import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const contactLinks = [
    {
        icon: GithubIcon,
        label: 'GitHub',
        value: 'joshue-agape',
        href: personalInfo.github,
    },
    {
        icon: LinkedinIcon,
        label: 'LinkedIn',
        value: 'Raharison Joshué Agapé',
        href: personalInfo.linkedin,
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'agapedev.dark@gmail.com',
        href: `mailto:${personalInfo.email}`,
        isLucide: true,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Fianarantsoa 301, Madagascar',
        href: personalInfo.map,
        isLucide: true,
    },
];

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
    const [form, setForm] = useState({
        name: '',
        email: '',
        location: '',
        subject: '',
        message: '',
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1800));
        setSending(false);
        setSent(true);
        setForm({ name: '', email: '', location: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
    };

    const inputClass =
        'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200';
    const inputStyle = {
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
    };

    return (
        <section id="contact" className="py-28 relative">
            <div className="absolute inset-0 bg-(--bg-primary)" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label justify-center mb-4">Contact</div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        Let's Discuss <span className="text-gradient">Your Project</span>
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-(--text-secondary)">
                        A project, a mission, an opportunity? I respond within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Status card */}
                        <div className="p-5 rounded-2xl bg-(--bg-secondary) border border-(--border)">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full animate-pulse bg-(--green)" />
                                <span className="text-sm font-semibold text-(--green)">
                                    Available for new opportunities.
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed text-(--text-secondary)">
                                I am available for freelance work. Feel free to contact me if you
                                think I could be a good fit for your project.
                            </p>
                        </div>

                        {/* Contact links */}
                        <div className="space-y-3">
                            {contactLinks.map(({ icon: Icon, label, value, href, isLucide }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group bg-(--bg-secondary) border border-(--border)"
                                >
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-(--accent-muted) text-(--accent)">
                                        {isLucide ? <Icon size={18} /> : <Icon />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-(--text-muted)">
                                            {label}
                                        </div>
                                        <div className="text-sm font-medium text-(--text-primary)">
                                            {value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl space-y-5 bg-(--bg-secondary) border-(--border) border"
                        >
                            <p className="text-(--text-secondary) mb-8">
                                I am always open to discussing development projects or collaboration
                                opportunities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono mb-2 text-(--text-muted)">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Enter your full name"
                                        className={inputClass}
                                        style={inputStyle}
                                        onFocus={(e) =>
                                            (e.target.style.borderColor = 'var(--accent)')
                                        }
                                        onBlur={(e) =>
                                            (e.target.style.borderColor = 'var(--border)')
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono mb-2 text-(--text-muted)">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        placeholder="Enter your email address"
                                        className={inputClass}
                                        style={inputStyle}
                                        onFocus={(e) =>
                                            (e.target.style.borderColor = 'var(--accent)')
                                        }
                                        onBlur={(e) =>
                                            (e.target.style.borderColor = 'var(--border)')
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono mb-2 text-(--text-muted)">
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.location}
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                    placeholder="Where are you located?"
                                    className={inputClass}
                                    style={inputStyle}
                                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono mb-2 text-(--text-muted)">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    placeholder="Enter the subject of your message"
                                    className={inputClass}
                                    style={inputStyle}
                                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono mb-2 text-(--text-muted)">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="Briefly describe your project or request"
                                    className={`${inputClass} resize-none`}
                                    style={inputStyle}
                                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={sending || sent}
                                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                                className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 text-white"
                                style={{
                                    background: sent ? 'var(--green)' : 'var(--accent)',
                                    opacity: sending ? 0.8 : 1,
                                }}
                            >
                                {sent ? (
                                    <>
                                        <CheckCircle2 size={18} />
                                        Message envoyé !
                                    </>
                                ) : sending ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                            className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white"
                                        />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Envoyer le message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
