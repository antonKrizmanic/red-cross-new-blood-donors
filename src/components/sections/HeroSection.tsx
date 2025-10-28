'use client';
import { Button } from '@/components/ui/shadcn/button';
import TypingText from '../ui/shadcn-io/typing-text';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-red-900/80"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    <TypingText
                        text={[
                            'Daruj krv, spasi život',
                            'Daruj krv, spasi život'
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={false}                        
                        cursorCharacter="|"
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl/70"                        
                        variableSpeed={{ min: 50, max: 120 }}
                    />                    
                    <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto leading-relaxed">
                        Pridružite se našoj zajednici darivatelja krvi i
                        pomozite spasiti živote
                    </p>
                    <div>
                        <Button
                            size="lg"
                            className="bg-white text-red-700 hover:bg-red-50 px-8 py-7 text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
                            onClick={() =>
                                document
                                    .getElementById('zasto-dariti-krv')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Zašto darivati krv
                        </Button>
                    </div>
                    <div>
                        <Button
                            size="lg"
                            className="mt-4 bg-white text-red-700 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
                            onClick={() =>
                                document
                                    .getElementById('pridruzi')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Već daruješ krv
                        </Button>
                    </div>
                    {/* <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 shadow-lg">
                            <span className="text-white font-medium text-sm">Hrvatski Crveni križ - Gradsko društvo Crvenog križa Buje</span>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
