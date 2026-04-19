import { ThemeProvider } from '@/context/ThemeContext';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experiences from '@/components/sections/Experiences';

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
            </main>
        </ThemeProvider>
    );
}
