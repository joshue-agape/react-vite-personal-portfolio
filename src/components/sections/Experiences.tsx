import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, type Experience } from '@/data/experiences';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function TimelineCard({ experience }: { experience: Experience }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl overflow-hidden h-full bg-(--bg-card) border border-(--border) shadow-(--shadow-md)"
        >
            <div className="relative h-50 overflow-hidden">
                <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-3 left-3 text-xs font-mono text-white/80">
                    {experience.year}
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-base text-(--text-primary) font-bold mb-2.5">
                    {experience.title}
                </h3>

                <p className="text-sm text-(--accent) mb-2">{experience.company}</p>

                <p className="text-sm leading-relaxed text-(--text-secondary) mb-4 line-clamp-7">
                    {experience.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-(--bg-tertiary) text-(--text-muted) border border-(--border)"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Timeline() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="experiences" className="py-28 relative">
            <div className="absolute inset-0 bg-(--bg-primary)" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-20"
                >
                    <div className="section-label justify-center mb-4">
                        My Professional Experience
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text-primary)">
                        My <span className="text-gradient">journey</span>
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-(--text-secondary)">
                        3+ years of growth in software development, from academic foundations to
                        professional expertise.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    style={{
                        paddingBottom: '50px',
                    }}
                >
                    {experiences.map((experience, index) => (
                        <SwiperSlide key={index}>
                            <TimelineCard experience={experience} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
