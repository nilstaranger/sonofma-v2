import React from 'react';
import Footer from './Footer';

interface PageProps {
    onBack: () => void;
    onNavigate: (view: 'privacy' | 'terms' | 'music') => void;
}

const BackButton: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <button onClick={onBack} className="absolute top-6 left-6 z-50 text-white bg-black/40 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

const SoundHealingPage: React.FC<PageProps> = ({ onBack, onNavigate }) => {
    return (
        <div className="relative min-h-screen">
             <BackButton onBack={onBack} />
             <section className="flex items-center justify-center text-center min-h-screen p-4">
                <div className="relative max-w-4xl mx-auto">
                    <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-glow-strong">
                        Sound Healing
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-glow-subtle">Vibrational Attunement for Body & Soul</p>
                </div>
            </section>
            
            <div className="relative z-10 bg-black/50 backdrop-blur-xl rounded-t-3xl shadow-2xl shadow-purple-500/10">
                <main className="container mx-auto px-6 pt-12 md:pt-20 space-y-24 md:space-y-32 pb-16 md:pb-24">
                    <section id="sound-healing-intro" className="text-center max-w-3xl mx-auto">
                        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-glow-strong">Harmonize Your Being</h2>
                        <p className="text-gray-200 leading-relaxed text-lg mb-4">
                            Using vocal toning and the resonant frequencies of his guitar harp, Nils Taranger (Son of Ma) effortlessly weaves a sacred space for profound heart-opening experiences. This is an invitation to gently dissolve energetic blockages, soothe your nervous system, and reclaim your innate state of peace and clarity.
                        </p>
                        <p className="text-gray-200 leading-relaxed text-lg mb-4">
                            Inspired by the science of heart coherence, sound healing guides you towards a harmonious state of deep relaxation and inner balance.
                        </p>
                        <p className="text-gray-200 leading-relaxed text-lg">
                            Private and group sessions are available (in Los Angeles or remote). Bring this unique healing to your community by booking Nils for your sonic yoga class, wellness event, or retreat. Each co-creative journey is custom-tailored to your specific intentions and needs.
                        </p>
                    </section>
                    
                    <section id="video-experience" className="max-w-3xl mx-auto">
                        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-center text-glow-strong">Experience the Sound</h2>
                        <div className="rounded-lg overflow-hidden shadow-2xl shadow-purple-500/20">
                           <iframe 
                                src="https://www.youtube-nocookie.com/embed/eS30h7t96tM" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="w-full aspect-video"
                           ></iframe>
                        </div>
                    </section>

                     <section id="booking" className="text-center">
                         <div className="flex flex-wrap justify-center gap-4">
                             <a
                                href="https://my.practicebetter.io/#/6706cb6a6620743076e76e90/bookings?s=6706cc6f6620743076e7756e&step=date"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block font-orbitron text-xl md:text-2xl font-bold px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-2 border-pink-200/50 shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                Discovery Call
                            </a>
                            <button
                                onClick={() => onNavigate('music')}
                                className="inline-block font-orbitron text-xl md:text-2xl font-bold px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-cyan-200/50 shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300"
                            >
                                Music
                            </button>
                         </div>
                    </section>
                </main>
                <Footer onNavigate={onNavigate} />
            </div>
        </div>
    );
};

export default SoundHealingPage;