import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { aiKnowledge } from '@/data/portfolio';
import { v4 as uuidv4 } from 'uuid';

interface Message {
    id: string;
    role: 'user' | 'bot';
    text: string;
    timestamp: Date;
}

function getResponse(input: string): string {
    const lower = input.toLowerCase();

    // Greetings
    if (aiKnowledge.greetings.some((g) => lower.includes(g.toLowerCase()))) {
        return aiKnowledge.responses.default;
    }

    // Check each category
    const responsesEntries = Object.entries(aiKnowledge.responses) as Array<
        [string, { keywords?: string[]; response: string } | string]
    >;
    for (const [, data] of responsesEntries) {
        if (typeof data === 'object' && 'keywords' in data && Array.isArray(data.keywords)) {
            if (data.keywords.some((kw: string) => lower.includes(kw.toLowerCase()))) {
                return data.response;
            }
        }
    }

    return aiKnowledge.responses.default;
}

function renderMarkdown(text: string) {
    const lines = text.split('\n');
    return lines.map((line, i) => {
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Code inline
        line = line.replace(
            /`(.*?)`/g,
            '<code style="font-family:var(--font-mono);font-size:0.8em;background:rgba(0,0,0,0.15);padding:1px 4px;border-radius:3px;">$1</code>',
        );

        if (line.startsWith('**') && line.endsWith('**')) {
            return (
                <div
                    key={i}
                    className="font-bold mt-2"
                    dangerouslySetInnerHTML={{ __html: line }}
                />
            );
        }
        if (line.trim() === '') return <div key={i} className="h-2" />;
        if (line.startsWith('- ') || line.startsWith('• ')) {
            return (
                <div key={i} className="flex gap-2 items-start">
                    <span className="mt-1 text-xs" style={{ color: 'var(--accent)' }}>
                        ▸
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: line.slice(2) }} />
                </div>
            );
        }
        return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
    });
}

const quickReplies = [
    'Quel est ton parcours ?',
    'Quelles sont tes compétences ?',
    'Montre moi tes projets',
    'Quels services proposes-tu ?',
    'Comment te contacter ?',
];

export default function AIChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '0',
            role: 'bot',
            text: aiKnowledge.responses.default,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [open]);

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: uuidv4(),
            role: 'user',
            text,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setTyping(true);

        await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

        const botResponse = getResponse(text);
        setTyping(false);
        setMessages((prev) => [
            ...prev,
            {
                id: uuidv4(),
                role: 'bot',
                text: botResponse,
                timestamp: new Date(),
            },
        ]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 1000 }}
                onClick={() => {
                    setOpen(true);
                    setHasUnread(false);
                }}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                    boxShadow: '0 8px 32px var(--accent-subtle), 0 4px 16px rgba(0,0,0,0.2)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle size={22} color="#fff" />
                {hasUnread && (
                    <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-xs"
                        style={{ background: 'var(--orange)', color: 'white', fontSize: '9px' }}
                    >
                        1
                    </motion.div>
                )}
            </motion.button>

            {/* Chat panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50 w-120 max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col"
                        style={{
                            height: '550px',
                            maxHeight: 'calc(100vh - 6rem)',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            boxShadow: 'var(--shadow-xl)',
                        }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-5 py-4 border-b"
                            style={{
                                borderColor: 'var(--border)',
                                background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: 'rgba(255,255,255,0.2)' }}
                                >
                                    <Sparkles size={18} color="white" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">
                                        Alex AI Assistant
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                                        <span className="text-xs text-white/70">En ligne</span>
                                    </div>
                                </div>
                            </div>
                            <motion.button
                                onClick={() => setOpen(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-7 h-7 rounded-lg flex items-center justify-center"
                                style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                            >
                                <X size={14} />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll">
                            <AnimatePresence>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {msg.role === 'bot' && (
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                                                style={{
                                                    background:
                                                        'linear-gradient(135deg, var(--accent), var(--purple))',
                                                }}
                                            >
                                                <Bot size={13} color="white" />
                                            </div>
                                        )}
                                        <div
                                            className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed space-y-0.5 ${
                                                msg.role === 'user'
                                                    ? 'chat-message-user'
                                                    : 'chat-message-bot'
                                            }`}
                                        >
                                            {renderMarkdown(msg.text)}
                                            <div className="text-xs mt-2 opacity-50">
                                                {msg.timestamp.toLocaleTimeString('fr-FR', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </div>
                                        </div>
                                        {msg.role === 'user' && (
                                            <div
                                                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    border: '1px solid var(--border)',
                                                }}
                                            >
                                                <User
                                                    size={13}
                                                    style={{ color: 'var(--text-secondary)' }}
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Typing indicator */}
                            <AnimatePresence>
                                {typing && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2.5"
                                    >
                                        <div
                                            className="w-7 h-7 rounded-full flex items-center justify-center"
                                            style={{
                                                background:
                                                    'linear-gradient(135deg, var(--accent), var(--purple))',
                                            }}
                                        >
                                            <Bot size={13} color="white" />
                                        </div>
                                        <div className="chat-message-bot px-4 py-3 flex items-center gap-1.5">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ background: 'var(--text-muted)' }}
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{
                                                        duration: 0.6,
                                                        repeat: Infinity,
                                                        delay: i * 0.15,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick replies */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2">
                                <p
                                    className="text-xs mb-2 font-mono"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    Questions rapides :
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {quickReplies.map((q) => (
                                        <motion.button
                                            key={q}
                                            onClick={() => sendMessage(q)}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="text-xs px-3 py-1.5 rounded-full transition-colors"
                                            style={{
                                                background: 'var(--accent-muted)',
                                                color: 'var(--accent)',
                                                border: '1px solid var(--accent)',
                                            }}
                                        >
                                            {q}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form
                            onSubmit={handleSubmit}
                            className="px-4 py-3 border-t flex items-center gap-2"
                            style={{
                                borderColor: 'var(--border)',
                                background: 'var(--bg-secondary)',
                            }}
                        >
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Posez votre question..."
                                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-primary)',
                                }}
                                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                            />
                            <motion.button
                                type="submit"
                                disabled={!input.trim() || typing}
                                whileHover={input.trim() ? { scale: 1.1 } : {}}
                                whileTap={input.trim() ? { scale: 0.9 } : {}}
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                                style={{
                                    background: input.trim()
                                        ? 'linear-gradient(135deg, var(--accent), var(--purple))'
                                        : 'var(--bg-tertiary)',
                                    color: input.trim() ? 'white' : 'var(--text-muted)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <Send size={15} />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
