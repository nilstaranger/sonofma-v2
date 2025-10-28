import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MusicPage from './components/MusicPage';
import SoundHealingPage from './components/SoundHealingPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

type View = 'landing' | 'music' | 'soundHealing' | 'privacy' | 'terms';

const App: React.FC = () => {
    const [view, setView] = useState<View>('landing');
    const [isFading, setIsFading] = useState<boolean>(false);

    const handleNavigate = (newView: View) => {
        if (view === newView) return;
        setIsFading(true);
        setTimeout(() => {
            setView(newView);
            setIsFading(false);
            window.scrollTo(0, 0); // Scroll to top on view change
        }, 500);
    };
    
    const renderContent = () => {
        switch (view) {
            case 'music':
                return <MusicPage onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />;
            case 'soundHealing':
                return <SoundHealingPage onBack={() => handleNavigate('landing')} onNavigate={handleNavigate} />;
            case 'privacy':
                return <PrivacyPolicyPage onBack={() => handleNavigate('landing')} />;
            case 'terms':
                return <TermsOfServicePage onBack={() => handleNavigate('landing')} />;
            case 'landing':
            default:
                return <LandingPage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white selection:bg-fuchsia-300 selection:text-fuchsia-900">
            {/* Dedicated background element that gets the filter animation */}
            <div className="absolute inset-0 w-full h-full psychedelic-bg"></div>
            
            {/* Content sits on top in its own stacking context */}
            <main className={`relative z-10 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {renderContent()}
            </main>
        </div>
    );
};

export default App;