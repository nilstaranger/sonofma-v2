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

const TermsOfServicePage: React.FC<PageProps> = ({ onBack }) => {
    return (
        <div className="relative min-h-screen">
             <BackButton onBack={onBack} />
             <section className="pt-24 pb-12 text-center p-4">
                <div className="relative max-w-4xl mx-auto">
                    <h1 className="font-orbitron text-4xl md:text-6xl font-bold uppercase tracking-wider text-glow-strong">
                        Terms of Service
                    </h1>
                     <p className="mt-4 text-lg md:text-xl text-glow-subtle">For sonofma.com</p>
                </div>
            </section>
            
            <div className="relative z-10 bg-black/50 backdrop-blur-xl rounded-t-3xl shadow-2xl shadow-purple-500/10">
                <main className="container mx-auto px-6 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto text-gray-200 leading-relaxed space-y-8">
                        <p className="text-sm opacity-80">Effective Date: 10/28/25</p>

                        <div className="space-y-3">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">1. Introduction and Agreement</h2>
                            <p>These Terms of Service ("Terms") govern your access to and use of the website located at sonofma.com (the "Site"), including all content, features, and functionality. By accessing or using the Site, you ("you" or "User") agree to be bound by these Terms. If you do not agree, you may not access or use the Site.</p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">2. Nature of Site Content and Health Disclaimer</h2>
                            <p>The Site provides information about music, sound, and sound healing services. This information is for general educational purposes only and is not a substitute for professional medical or mental health advice, diagnosis, or treatment.</p>
                             <ul className="list-disc list-inside pl-4 space-y-2">
                                <li><strong>No Medical Advice:</strong> We are not providing medical or health advice. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.</li>
                                <li><strong>No Therapeutic Relationship:</strong> Your use of this Site does not create a therapeutic or provider-patient relationship between you and us.</li>
                                <li><strong>Third-Party Services:</strong> For booking professional sound healing appointments, you are directed to the third-party platform, PracticeBetter. Any professional relationship or service agreement is solely between you and the practitioner, and is subject to the terms and policies of that third-party platform. Sound healing services are intended for users aged 18 and older.</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-3">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">3. Eligibility</h2>
                            <p>The Site is intended for users who are at least 13 years old. By using the Site, you represent and warrant that you are at least 13 years of age. If you are under 18, you represent that you have parental or guardian permission to use the Site.</p>
                        </div>
                        
                         <div className="space-y-3">
                            <h2 className="font-orbitron text-2xl font-bold text-glow-strong">4. Limited User License and Site Use</h2>
                             <p>You are granted a limited, non-exclusive, non-transferable license to access and use the Site for your personal, non-commercial use only. You agree not to:</p>
                             <ul className="list-disc list-inside pl-4 space-y-2">
                                <li><strong>Abuse the Site:</strong> Use the Site in any manner that could disable, overburden, or impair the Site.</li>
                                <li><strong>Automated Access:</strong> Use any automated means (scripts, robots, etc.) to access, monitor, or copy any part of the Site without our prior written consent.</li>
                                <li><strong>Security Interference:</strong> Introduce any viruses, malware, or other material that is malicious or technologically harmful.</li>
                                <li><strong>Prohibited Content (if applicable):</strong> Use the Site to transmit, distribute, store, or display any material that is libelous, defamatory, abusive, or infringing on the intellectual property rights of others.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">5. Intellectual Property</h2>
                           <p>The Site and all of its content, features, and functionality (including all text, displays, images, video, and audio) are owned by us or our licensors and are protected by applicable intellectual property laws. You may not use any of our trademarks or logos without our prior written consent.</p>
                        </div>

                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">6. User Content</h2>
                           <p>If the Site allows you to submit or post content ("User Content"), you are solely responsible for that content. By submitting User Content, you grant us a perpetual, worldwide, royalty-free license to use, reproduce, modify, and display such User Content in connection with the Site and our business. You represent that you own or have the necessary rights to grant us this license.</p>
                        </div>

                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">7. Disclaimer of Warranties</h2>
                           <p>THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE. WE SPECIFICALLY DISCLAIM ALL WARRANTIES RELATED TO THE ACCURACY, COMPLETENESS, OR HELPFULNESS OF ANY INFORMATION ON THE SITE.</p>
                        </div>
                        
                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">8. Limitation of Liability</h2>
                           <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SITE, INCLUDING ANY HARM RESULTING FROM YOUR RELIANCE ON INFORMATION FOUND ON THIS SITE.</p>
                        </div>

                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">9. Indemnification</h2>
                           <p>You agree to indemnify and hold us harmless from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or relating to your use of the Site, your violation of these Terms, or your violation of any rights of any third party.</p>
                        </div>

                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">10. Governing Law and Dispute Resolution</h2>
                           <h3 className="font-bold text-lg pt-2">Governing Law</h3>
                           <p>These Terms shall be governed by and construed in accordance with the laws of the State of California.</p>
                           <h3 className="font-bold text-lg pt-2">Dispute Resolution</h3>
                           <p>Any dispute arising out of or relating to these Terms or the Site shall be resolved as follows:</p>
                           <ul className="list-disc list-inside pl-4 space-y-2">
                                <li><strong>Informal Negotiation:</strong> The parties shall first attempt to resolve the dispute through informal negotiations via email for a period of 30 days.</li>
                                <li><strong>Binding Arbitration:</strong> If the dispute is not resolved informally, it shall be submitted to binding arbitration in Los Angeles County, California, administered by the American Arbitration Association ("AAA"). The judgment rendered by the arbitrator shall be final.</li>
                                <li><strong>Small Claims Exception:</strong> Notwithstanding the foregoing, either party may bring an individual action in small claims court.</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-3">
                           <h2 className="font-orbitron text-2xl font-bold text-glow-strong">11. Miscellaneous</h2>
                           <h3 className="font-bold text-lg pt-2">Privacy Policy Reference</h3>
                           <p>Your use of the Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms. For details on your California Privacy Rights, please refer to our Privacy Policy.</p>
                           <h3 className="font-bold text-lg pt-2">Changes to these Terms</h3>
                           <p>We may update these Terms from time to time by posting the new Terms on the Site. Your continued use of the Site after the posting of any modifications constitutes your acceptance of the revised Terms.</p>
                           <h3 className="font-bold text-lg pt-2">Contact</h3>
                           <p>If you have any questions about these Terms, please contact us at <a href="mailto:nils@sonofma.com" className="text-cyan-400 hover:underline">nils@sonofma.com</a>.</p>
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

export default TermsOfServicePage;