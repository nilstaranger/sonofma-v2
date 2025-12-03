import React from 'react';

interface PageProps {
    onBack: () => void;
}

const BackButton: React.FC<PageProps> = ({ onBack }) => (
    <button onClick={onBack} className="absolute top-6 left-6 z-50 text-white bg-black/40 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

const PrivacyPolicyPage: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="relative min-h-screen">
             <BackButton onBack={onBack} />
             <section className="pt-24 pb-12 text-center p-4">
                <div className="relative max-w-4xl mx-auto">
                    <h1 className="font-orbitron text-4xl md:text-6xl font-bold uppercase tracking-wider text-glow-strong">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-glow-subtle">For sonofma.com</p>
                </div>
            </section>
            
            <div className="relative z-10 bg-black/50 backdrop-blur-xl rounded-t-3xl shadow-2xl shadow-purple-500/10">
                <main className="container mx-auto px-6 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto text-gray-200 leading-relaxed space-y-6">
                        <p className="text-sm opacity-80">Effective Date: December 3, 2025</p>

                        <div className="space-y-2">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">1. Introduction</h2>
                            <p>This Privacy Policy explains how sonofma.com ("we," "us," or "our") handles information in connection with your visit to our website (sonofma.com) (the "Site").</p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">2. About Us</h2>
                            <p>sonofma.com is a portfolio website providing information about music and artistic works.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">3. Information We Collect</h2>
                            <p>We have designed our site to collect minimal personal information. The information collected falls into two categories:</p>
                            <h3 className="font-bold text-lg pt-2">A. Information Collected Automatically (Log Data)</h3>
                            <p>Our website is hosted by GitHub Pages. When you visit our Site, our web host (GitHub) automatically collects and logs certain information from your browser for security and operational purposes. This "Log Data" may include:
                            Your IP address
                            Your browser type and version
                            The pages you visited on our Site
                            The time and date of your visit
                            This information is used by our host to maintain the security and integrity of the service. We only have access to this data in an aggregated or anonymized form.</p>
                            <h3 className="font-bold text-lg pt-2">B. Information You Voluntarily Provide</h3>
                            <p>We do not collect personal information (like your name or email) directly on the sonofma.com website (e.g., there are no account sign-ups or contact forms). If you choose to contact us via the email address provided on the site, we will use your email address solely to respond to your inquiry.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">4. How We Use Your Information</h2>
                             <p>We use the limited information we have access to for the following purposes:
                            Website Functionality: To ensure all features of the website work properly.
                            Website Improvement: To understand (in an aggregated way) how visitors interact with our site to improve user experience.
                            Security: To monitor for and prevent malicious activity and to maintain the security of our Site, in line with the data collected by our web host.
                            We do not use your information for marketing emails or any other purpose.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">5. Cookies and Tracking Technologies</h2>
                           <p>Our website (sonofma.com) does not set or use cookies for tracking or advertising.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">6. Data Retention</h2>
                           <p>We do not store your personal information ourselves. Any Log Data collected by our web host (GitHub) is retained by them for a limited period for security and analysis purposes, as described in their own privacy policies.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">7. Sharing Your Information</h2>
                           <p>We do not share, sell, or rent your personal information to any third parties. The only exception is if we are required to do so by law, such as to comply with a subpoena or other valid legal process.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">8. Data Security</h2>
                           <p>We take reasonable measures to protect our Site. Our website is served using HTTPS (SSL encryption), which means all data transferred between your browser and our website is secure.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">9. Your Data Rights</h2>
                           <p>Depending on your location (such as California or the European Economic Area), you may have certain rights regarding your personal information. These can include the Right to Access, Right to Rectification, and Right to Erasure (Deletion). Since we do not collect personal information directly on the site, most data requests would need to be directed to our web host (regarding server logs). However, you can contact us at any time, and we will assist you in any way we can. We do not sell or "share" your personal information as defined by the California Consumer Privacy Act (CCPA).</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">10. Children's Privacy</h2>
                           <p>Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. We comply with the Children's Online Privacy Protection Act (COPPA). If we become aware that we have collected information from a child under 13, we will take steps to delete it.</p>
                        </div>
                        
                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">11. Changes to this Privacy Policy</h2>
                           <p>We may update this Privacy Policy from time to time. We will post any changes on this page by updating the "Effective Date" at the top. We encourage you to review this policy periodically.</p>
                        </div>

                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">12. Contact Us</h2>
                           <p>If you have any questions about this Privacy Policy, please contact us at:
                           Email: nils@sonofma.com</p>
                        </div>
                        
                        <div className="space-y-2">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">13. International Users</h2>
                           <p>If you are accessing our site from outside the United States, please be aware that your information (specifically the Log Data collected by our host) may be transferred to, stored, and processed in the United States.</p>
                        </div>
                    </div>
                </main>
                 <footer className="bg-black/40 backdrop-blur-lg mt-0">
                    <div className="container mx-auto px-6 py-8 text-center">
                        <p className="text-white text-sm opacity-75">&copy; 2025 Son of Ma. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;