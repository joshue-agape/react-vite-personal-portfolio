import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/portfolio';
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from '@/utils/animations';
import { Code2, Server, Smartphone, Wrench, ShieldCheck, Workflow } from 'lucide-react';

const focuses = [
    { icon: Code2, label: 'Web Development', desc: 'Modern UI · Responsive' },
    { icon: Server, label: 'Backend Development', desc: 'REST APIs · GraphQL' },
    { icon: Smartphone, label: 'Mobile Development', desc: 'Flutter · React Native' },
    { icon: Wrench, label: 'Web Integration & IaC', desc: 'Terraform · Ansible' },
    { icon: ShieldCheck, label: 'DevOps / CI-CD', desc: 'Jenkins · Docker · Git' },
    { icon: Workflow, label: 'Methodologies', desc: '2TUP · Agile Scrum' },
];

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <section id="about" ref={ref} className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-(--bg-secondary)" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <div className="section-label justify-center mb-4">About Me</div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        Who am <span className="text-gradient">I ?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <div className="space-y-5">
                            {personalInfo.bio.split('\n\n').map((para, i) => (
                                <p
                                    key={i}
                                    className="text-base leading-relaxed text-(--text-secondary)"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        <div className="mt-10">
                            <p className="text-sm font-mono font-semibold mb-5 text-(--text-muted)">
                                // Areas of expertise
                            </p>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                            >
                                {focuses.map(({ icon: Icon, label, desc }) => (
                                    <motion.div
                                        key={label}
                                        variants={staggerItem}
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        className="p-4 rounded-xl card-hover cursor-default bg-(--bg-card) border border-(--border)"
                                    >
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-(--accent-muted) text-(--accent)">
                                            <Icon size={16} />
                                        </div>
                                        <div className="text-sm font-semibold text-(--text-primary)">
                                            {label}
                                        </div>
                                        <div className="text-xs mt-0.5 font-mono text-(--text-muted)">
                                            {desc}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <div className="code-block rounded-xl overflow-hidden shadow-(--shadow-xl)">
                            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-(--border)">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                <span className="ml-3 text-xs text-(--text-muted)">profile.py</span>
                            </div>

                            <div className="space-y-1 text-sm font-mono">
                                <div className="code-comment">
                                    # RAHARISON Joshué Agapé — DevOps Engineer Profile
                                </div>

                                <div className="mt-2">
                                    <span className="code-keyword">class </span>
                                    <span className="code-accent">Engineer</span>
                                    <span className="text-(--text-secondary)">:</span>
                                </div>

                                <div className="pl-4">
                                    <span className="code-orange">name</span>
                                    <span className="text-(--text-secondary)"> = </span>
                                    <span className="code-string">"{personalInfo.name}"</span>
                                </div>

                                <div className="pl-4">
                                    <span className="code-orange">birth_date</span>
                                    <span className="text-(--text-secondary)"> = </span>
                                    <span className="code-string">"{personalInfo.birth}"</span>
                                </div>

                                <div className="pl-4">
                                    <span className="code-orange">languages</span>
                                    <span className="text-(--text-secondary)"> = [</span>
                                    <span className="code-string">"Malagasy"</span>
                                    <span className="text-(--text-secondary)">, </span>
                                    <span className="code-string">"French"</span>
                                    <span className="text-(--text-secondary)">, </span>
                                    <span className="code-string">"English"</span>
                                    <span className="text-(--text-secondary)">]</span>
                                </div>

                                <div className="mt-8"></div>

                                <div>
                                    <span className="pl-4 code-keyword">def </span>
                                    <span className="code-accent">find_educations </span>
                                    <span className="text-(--text-secondary)">
                                        (self, confidence=
                                    </span>
                                    <span className="code-keyword">True</span>
                                    <span className="text-(--text-secondary)">):</span>
                                </div>

                                <div className="pl-10">
                                    <span className="code-keyword">return {'['}</span> <br />
                                    <span className="text-green-500 ml-5">{'{'}</span> <br />
                                    <span className="text-(--text-secondary) ml-10">
                                        "degree" :
                                    </span>
                                    <span className='ml-1.5 text-orange-500 dark:text-orange-400'>
                                        "Professional Bachelor's Degree — Software Engineering & Databases"
                                    </span><br />
                                    <span className="text-(--text-secondary) ml-10">
                                        "institution" :
                                    </span>
                                    <span className='ml-1.5 text-orange-500 dark:text-orange-400'>
                                        "University of Fianarantsoa · National School of Computer Science"
                                    </span><br />
                                    <span className="text-green-500 ml-5">{'},'}</span> <br />
                                    <span className="text-green-500 ml-5">{'{'}</span> <br />
                                    <span className="text-(--text-secondary) ml-10">
                                        "degree" :
                                    </span>
                                    <span className='ml-1.5 text-orange-500 dark:text-orange-400'>
                                        "Scientific Baccalaureate — Series C"
                                    </span><br />
                                    <span className="text-(--text-secondary) ml-10">
                                        "institution" :
                                    </span>
                                    <span className='ml-1.5 text-orange-500 dark:text-orange-400'>
                                        "Saint-Joseph de Cluny High School, Fianarantsoa"
                                    </span><br />
                                    <span className="text-green-500 ml-5">{'}'}</span> <br />
                                    <span className="code-keyword">{']'}</span> <br />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {[{ emoji: '🌍', text: 'Remote-friendly' }].map((chip) => (
                                <motion.span
                                    key={chip.text}
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    className="skill-tag"
                                >
                                    <span>{chip.emoji}</span>
                                    {chip.text}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
