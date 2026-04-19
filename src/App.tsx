import { ThemeProvider } from '@/context/ThemeContext';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experiences from '@/components/sections/Experiences';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import WorkProcess from '@/components/sections/WorkProcess';
import Services from './components/sections/Services';

export default function App() {
    return (
        <ThemeProvider>
            <main className="relative min-h-screen max-w-[100vw] bg-(--bg-primary) text-(--text-primary)">
                <ParticleBackground />
                <CustomCursor />
                <Navbar />
                <Hero />
                <About />
                <Experiences />
                <Projects />
                <Skills />
                <Services />
                <WorkProcess />
            </main>
        </ThemeProvider>
    );
}
