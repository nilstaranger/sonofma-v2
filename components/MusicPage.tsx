import React from 'react';
import Footer from './Footer';

interface PageProps {
    onNavigate: (view: 'privacy' | 'terms') => void;
}

const MusicPage: React.FC<PageProps> = ({ onNavigate }) => {
    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                <section className="flex items-center justify-center text-center min-h-screen p-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-glow-strong">
                            Son of Ma
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-glow-subtle">Anthems for Awakening</p>
                    </div>
                </section>
                
                <div className="relative bg-black/50 backdrop-blur-xl rounded-t-3xl shadow-2xl shadow-cyan-500/10">
                    <main className="container mx-auto px-6 pt-12 md:pt-20 space-y-24 md:space-y-32 pb-16 md:pb-24">
                        <section id="about">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:items-start items-center">
                                <div className="md:col-span-2">
                                    <a href="https://open.spotify.com/artist/3kTRLun8cPz2ozNQhW9K5O?si=tuXW9qdfQTa-VG1BqK6hsA" target="_blank" rel="noopener noreferrer" aria-label="Visit Son of Ma on Spotify">
                                        <img src="https://raw.githubusercontent.com/nilstaranger/sonofma/main/sonofma%20bio%20pic%20web.jpg" 
                                            alt="Son of Ma artist photo" 
                                            className="rounded-lg shadow-2xl shadow-cyan-500/20 w-full transition-transform duration-300 hover:scale-105 cursor-pointer" />
                                    </a>
                                </div>
                                <div className="md:col-span-3">
                                    <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-glow-strong">A Euphoric Transmission</h2>
                                    <p className="text-gray-200 leading-relaxed text-lg">
                                        Son of Ma emerges with a sound that brings a new depth to the dancefloor, bridging uplifting trance with a message of spiritual awakening. Born from a profound journey through shame into the embrace of self-love, his music is a testament to the Cosmic Mother who guided him home. Weaving ethereal trance and hypnotic beats around sacred lyrics, he crafts powerful anthems for a global remembering. The result is a euphoric transmission for the dancefloor - a space for cathartic release and profound revelation, where every drop feels like a homecoming.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="listen" className="text-center">
                            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-glow-strong">Listen Now</h2>
                            <div className="flex justify-center">
                                <iframe
                                    style={{ borderRadius: '12px' }}
                                    src="https://open.spotify.com/embed/artist/3kTRLun8cPz2ozNQhW9K5O?utm_source=generator&theme=0"
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    title="Spotify Player for Son of Ma"
                                ></iframe>
                            </div>
                        </section>

                        <section id="acoustic-music">
                            <div className="text-center">
                                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-glow-strong">Acoustic Music</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-start items-center">
                                <div className="md:col-span-1">
                                    <img src="/nils guitar low.jpg" alt="Nils playing guitar" className="rounded-lg shadow-2xl shadow-cyan-500/20 w-full" />
                                </div>
                                <div className="md:col-span-1">
                                    <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                                        <iframe 
                                            src="https://www.youtube.com/embed/M_mBAH6pBzo" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen 
                                            style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
                                            title="Son of Ma - Acoustic Session">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer onNavigate={onNavigate} />
                </div>
            </div>
        </div>
    );
};

export default MusicPage;