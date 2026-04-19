import { motion } from 'framer-motion';
import { Heart, Terminal } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative py-10 border-t"
            style={{
                borderColor: 'var(--border)',
                background: 'var(--bg-secondary)',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                            style={{ background: 'var(--accent)' }}
                        >
                            <Terminal size={16} color="#fff" />
                        </div>

                        <div className="flex flex-col leading-tight">
                            <span
                                className="font-mono text-sm font-semibold"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                rja<span style={{ color: 'var(--accent)' }}>@devops</span>
                            </span>

                            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                Building scalable systems
                            </span>
                        </div>
                    </div>

                    {/* CENTER */}
                    <motion.p
                        className="text-xs flex items-center gap-2 text-center"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.6 }}
                        >
                            <Heart
                                size={12}
                                style={{ color: 'var(--accent)' }}
                                fill="var(--accent)"
                            />
                        </motion.span>
                        by Joshué Agapé · {currentYear}
                    </motion.p>

                    {/* RIGHT */}
                    <div
                        className="flex items-center gap-2 px-3 py-1 rounded-full border"
                        style={{
                            borderColor: 'var(--border)',
                            background: 'var(--bg-card)',
                        }}
                    >
                        <span style={{ color: 'var(--green)' }}>●</span>

                        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                            System online · 99.9% uptime
                        </span>
                    </div>
                </div>

                {/* bottom subtle line */}
                <div
                    className="mt-8 h-px w-full opacity-30"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    }}
                />
            </div>
        </footer>
    );
}
