import React from 'react';

interface FooterProps {
    onNavigate: (view: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-black/40 backdrop-blur-lg mt-0">
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-glow-strong">Connect</h2>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://soundcloud.com/sonofma" target="_blank" rel="noopener noreferrer" aria-label="Visit Son of Ma on SoundCloud" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-125">
                        <svg className="w-8 h-8" fill="currentColor" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>SoundCloud</title><path d="M5.8,278a2.11,2.11,0,0,0-2,2L0,308.64,3.74,336.8a2.12,2.12,0,0,0,2.05,2,2.14,2.14,0,0,0,2-2h0l4.44-28.17L7.83,280a2.14,2.14,0,0,0-2-2Z"></path><path d="M26.85,262.32a2.13,2.13,0,0,0-4.26,0l-5,46.32,5,45.3a2.13,2.13,0,0,0,4.26,0l5.73-45.31-5.73-46.32Z"></path><path d="M106.17,219.59a4,4,0,0,0-3.87,3.87l-4,85.22,4,55.08a3.88,3.88,0,0,0,7.75,0v0l4.53-55.08-4.53-85.22A4,4,0,0,0,106.17,219.59Z"></path><path d="M65.12,249.21a3.09,3.09,0,0,0-3,3L57.6,308.66l4.51,54.63a3,3,0,0,0,6,0l5.13-54.63-5.13-56.48A3.1,3.1,0,0,0,65.12,249.21Z"></path><path d="M147.88,367.6a4.83,4.83,0,0,0,4.75-4.74l3.93-54.15-3.93-113.46a4.75,4.75,0,0,0-9.5,0l-3.49,113.45,3.49,54.17A4.81,4.81,0,0,0,147.88,367.6Z"></path><path d="M233.28,367.85a6.6,6.6,0,0,0,6.5-6.52v0l2.74-52.6-2.74-131a6.5,6.5,0,1,0-13,0l-2.45,131c0,.08,2.45,52.67,2.45,52.67A6.59,6.59,0,0,0,233.28,367.85Z"></path><path d="M190.26,367.65a5.67,5.67,0,0,0,5.62-5.64v0l3.34-53.33-3.34-114.28a5.63,5.63,0,1,0-11.25,0l-3,114.29,3,53.32a5.66,5.66,0,0,0,5.63,5.6Z"></path><path d="M85.56,367.15A3.53,3.53,0,0,0,89,363.74l4.83-55.09L89,256.25a3.44,3.44,0,0,0-6.88,0l-4.26,52.38,4.26,55.08A3.5,3.5,0,0,0,85.56,367.15Z"></path><path d="M44.84,364.13a2.67,2.67,0,0,0,2.57-2.52l5.43-53-5.42-55a2.57,2.57,0,0,0-5.14,0l-4.78,55,4.78,53a2.62,2.62,0,0,0,2.56,2.53Z"></path><path d="M211.69,192.53a6.1,6.1,0,0,0-6.07,6.09l-2.71,110.11,2.71,53a6.07,6.07,0,0,0,12.13,0v0l3-53-3-110.13a6.1,6.1,0,0,0-6.06-6.07Z"></path><path d="M127,367.71a4.41,4.41,0,0,0,4.31-4.3l4.23-54.71L131.26,204a4.32,4.32,0,0,0-8.63,0L118.89,308.7l3.75,54.73A4.38,4.38,0,0,0,127,367.71Z"></path><path d="M174.17,362.54v0l3.63-53.8-3.63-117.28a5.19,5.19,0,1,0-10.37,0l-3.23,117.28,3.23,53.83a5.18,5.18,0,0,0,10.36,0v0Z"></path><path d="M449,241.1A62.42,62.42,0,0,0,424.67,246c-5-57.18-52.61-102-110.66-102a111.92,111.92,0,0,0-40.28,7.58c-4.75,1.85-6,3.76-6.06,7.46V360.4a7.66,7.66,0,0,0,6.8,7.5c.16,0,173.44.11,174.56.11,34.78,0,63-28.41,63-63.45s-28.2-63.46-63-63.46Z"></path><path d="M254.79,158.87a7,7,0,0,0-6.94,7L245,308.75l2.85,51.87a6.94,6.94,0,1,0,13.87-.06v.06l3.09-51.87-3.09-142.93a7,7,0,0,0-6.93-6.95Z"></path></svg>
                    </a>
                    <a href="https://www.youtube.com/@SonofMa" target="_blank" rel="noopener noreferrer" aria-label="Visit Son of Ma on YouTube" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-125">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><title>YouTube</title><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 01-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 01-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 011.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="https://open.spotify.com/artist/3kTRLun8cPz2ozNQhW9K5O" target="_blank" rel="noopener noreferrer" aria-label="Listen to Son of Ma on Spotify" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-125">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><title>Spotify</title><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/asonofma" target="_blank" rel="noopener noreferrer" aria-label="Visit Son of Ma on Instagram" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-125">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title>Instagram</title><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                    <a href="mailto:nils@sonofma.com" target="_blank" rel="noopener noreferrer" aria-label="Email Son of Ma" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-125">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><title>Email</title><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
                    </a>
                </div>
                <p className="text-white text-sm opacity-75 mt-8">&copy; 2025 Son of Ma. All Rights Reserved.</p>
                <div className="mt-6 flex justify-center items-center gap-6">
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
            </div>
        </footer>
    );
};

export default Footer;