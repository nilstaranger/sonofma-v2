import React from 'react';

interface LandingPageProps {
    onNavigate: (view: 'music' | 'soundHealing' | 'privacy' | 'terms') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
                <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/20">
                    <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-glow-strong">
                        Son of Ma
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-glow-subtle">Choose your journey</p>
                    <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center w-full max-w-3xl mx-auto">
                        <button
                            onClick={() => onNavigate('music')}
                            className="font-orbitron text-xl md:text-2xl font-bold px-12 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-cyan-200/50 shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300 w-full md:w-auto md:flex-1 max-w-xs"
                        >
                            Music
                        </button>
                        <button
                            onClick={() => onNavigate('soundHealing')}
                            className="font-orbitron text-xl md:text-2xl font-bold px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-2 border-pink-200/50 shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 w-full md:w-auto md:flex-1 max-w-xs"
                        >
                            Sound Healing
                        </button>
                    </div>
                </div>
            </div>
            {/* Simplified footer for landing page */}
            <footer className="w-full p-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center items-center gap-6">
                        <button 
                            onClick={() => onNavigate('privacy')}
                            className="text-white text-sm opacity-60 hover:opacity-100 hover:text-cyan-300 transition-all duration-300 underline"
                        >
                            Privacy Policy
                        </button>
                        <button 
                            onClick={() => onNavigate('terms')}
                            className="text-white text-sm opacity-60 hover:opacity-100 hover:text-cyan-300 transition-all duration-300 underline"
                        >
                            Terms of Service
                        </button>
                    </div>
                    <p className="text-white text-xs opacity-60 text-center">
                        Disclaimer (CA B&P Code § 2053.5): Nils Taranger II is not licensed by the State of California as a healing‑arts practitioner.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;