import { ThemeProvider } from '@/context/ThemeContext';
import CustomCursor from './components/CustomCursor';

export default function App() {
    return (
        <ThemeProvider>
            <main className="relative min-h-screen max-w-[100vw] bg-(--bg-primary) text-(--text-primary)">
                <CustomCursor />
            </main>
        </ThemeProvider>
    );
}
