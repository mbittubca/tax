// Inject all sections into the page
document.body.insertAdjacentHTML('beforeend', `
    <!-- About Section -->
    <section id="about" class="py-24 relative section-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="absolute -top-8 -left-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                    <div class="relative glass rounded-3xl p-2">
                        <div class="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8">
                            <div class="flex items-center gap-6 mb-8">
                                <div class="w-24 h-24 bg-gradient-to-br from-accent to-gold rounded-2xl flex items-center justify-center text-4xl font-serif font-bold text-primary">AS</div>
                                <div>
                                    <h3 class="text-2xl font-serif font-bold">Adv. Arun Sharma</h3>
                                    <p class="text-accent">Senior Tax Advocate</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span class="text-gray-300">LL.B, Bar Council of India Registered</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span class="text-gray-300">Certified Tax Practitioner (CTP)</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span class="text-gray-300">GST Practitioner (GSTP)</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span class="text-gray-300">15+ Years of Practice Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="text-accent font-semibold tracking-wider text-sm">ABOUT US</span>
                    <h2 class="font-serif text-4xl lg:text-5xl font-bold mt-4 mb-6">Your Trusted Partner in <span class="gradient-text">Tax Solutions</span></h2>
                    <p class="text-gray-300 text-lg leading-relaxed mb-6">With over 15 years of dedicated practice in Income Tax, GST, and legal representation, we have successfully resolved 500+ cases across India. Our expertise spans from simple ITR filings to complex tribunal matters.</p>
                    <p class="text-gray-300 text-lg leading-relaxed mb-8">We believe in transparent communication, ethical practice, and achieving the best possible outcome for every client. Your financial peace of mind is our priority.</p>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="glass rounded-xl p-6 card-hover">
                            <div class="text-3xl font-bold gradient-text mb-2">Delhi NCR</div>
                            <div class="text-sm text-gray-400">Primary Office</div>
                        </div>
                        <div class="glass rounded-xl p-6 card-hover">
                            <div class="text-3xl font-bold gradient-text mb-2">Pan India</div>
                            <div class="text-sm text-gray-400">Online Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-gradient-to-b from-primary via-secondary/30 to-primary section-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <span class="text-accent font-semibold tracking-wider text-sm">OUR SERVICES</span>
                <h2 class="font-serif text-4xl lg:text-5xl font-bold mt-4 mb-6">Comprehensive <span class="gradient-text">Tax Solutions</span></h2>
                <p class="text-gray-300 text-lg max-w-2xl mx-auto">From basic filings to complex litigation, we handle all your tax matters with expertise and dedication.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-accent/20 to-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Income Tax Returns</h3>
                    <p class="text-gray-400 mb-4">Accurate ITR filing for individuals, HUF, firms, and companies. All forms including ITR-1 to ITR-7.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Salaried & Business Returns</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Capital Gains Filing</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Revised Returns</li>
                    </ul>
                </div>

                <!-- Service Card 2 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Tax Notice Handling</h3>
                    <p class="text-gray-400 mb-4">Expert response and resolution for all types of income tax notices and scrutiny assessments.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Scrutiny Assessments</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Demand Notices</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Reassessment Cases</li>
                    </ul>
                </div>

                <!-- Service Card 3 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">GST Services</h3>
                    <p class="text-gray-400 mb-4">Complete GST solutions from registration to annual returns and audit compliance.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> GST Registration</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Monthly/Annual Returns</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> GST Audit & Compliance</li>
                    </ul>
                </div>

                <!-- Service Card 4 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Appeals & Tribunal</h3>
                    <p class="text-gray-400 mb-4">Expert representation before CIT(A), ITAT, and appellate authorities for dispute resolution.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> CIT(A) Appeals</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> ITAT Representation</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> High Court Matters</li>
                    </ul>
                </div>

                <!-- Service Card 5 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Business Compliance</h3>
                    <p class="text-gray-400 mb-4">Complete business tax compliance including TDS, advance tax, and statutory audits.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> TDS Compliance</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Advance Tax Planning</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Tax Audits</li>
                    </ul>
                </div>

                <!-- Service Card 6 -->
                <div class="glass rounded-2xl p-8 card-hover group">
                    <div class="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Tax Planning</h3>
                    <p class="text-gray-400 mb-4">Strategic tax planning to legally minimize your tax liability and maximize savings.</p>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Investment Planning</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Business Structuring</li>
                        <li class="flex items-center gap-2"><span class="text-accent">✓</span> Wealth Management</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 relative section-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-accent/5 to-gold/5"></div>
        <div class="max-w-7xl mx-auto px-6 relative">
            <div class="text-center mb-16">
                <span class="text-accent font-semibold tracking-wider text-sm">WHY CHOOSE US</span>
                <h2 class="font-serif text-4xl lg:text-5xl font-bold mt-4 mb-6">The <span class="gradient-text">TaxPro Advantage</span></h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center group">
                    <div class="w-20 h-20 mx-auto glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                        <span class="text-4xl">🎯</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">95% Success Rate</h3>
                    <p class="text-gray-400">Proven track record in resolving complex tax matters</p>
                </div>
                <div class="text-center group">
                    <div class="w-20 h-20 mx-auto glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                        <span class="text-4xl">🔒</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">100% Confidential</h3>
                    <p class="text-gray-400">Your financial information stays completely private</p>
                </div>
                <div class="text-center group">
                    <div class="w-20 h-20 mx-auto glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                        <span class="text-4xl">⚡</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Quick Resolution</h3>
                    <p class="text-gray-400">Fast turnaround time for all tax matters</p>
                </div>
                <div class="text-center group">
                    <div class="w-20 h-20 mx-auto glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
                        <span class="text-4xl">💰</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Affordable Pricing</h3>
                    <p class="text-gray-400">Transparent fees with no hidden charges</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Case Studies -->
    <section id="cases" class="py-24 bg-gradient-to-b from-primary via-secondary/20 to-primary section-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <span class="text-accent font-semibold tracking-wider text-sm">SUCCESS STORIES</span>
                <h2 class="font-serif text-4xl lg:text-5xl font-bold mt-4 mb-6">Real <span class="gradient-text">Case Studies</span></h2>
                <p class="text-gray-300 text-lg max-w-2xl mx-auto">See how we've helped clients save money and resolve complex tax issues.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="glass rounded-2xl overflow-hidden card-hover">
                    <div class="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <div class="p-8">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Resolved</span>
                            <span class="text-gray-500 text-sm">Manufacturing</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">GST Notice Dropped</h3>
                        <p class="text-gray-400 mb-4">₹18 Lakh demand notice from GST authorities was successfully contested and dropped completely.</p>
                        <div class="flex items-center justify-between border-t border-gray-700 pt-4">
                            <div>
                                <div class="text-2xl font-bold text-green-400">₹18L</div>
                                <div class="text-xs text-gray-500">Demand Dropped</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-accent">45 Days</div>
                                <div class="text-xs text-gray-500">Resolution Time</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="glass rounded-2xl overflow-hidden card-hover">
                    <div class="h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                    <div class="p-8">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Won</span>
                            <span class="text-gray-500 text-sm">IT Professional</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">ITAT Appeal Victory</h3>
                        <p class="text-gray-400 mb-4">Successfully argued depreciation claim at ITAT, resulting in complete refund with interest.</p>
                        <div class="flex items-center justify-between border-t border-gray-700 pt-4">
                            <div>
                                <div class="text-2xl font-bold text-blue-400">₹8.5L</div>
                                <div class="text-xs text-gray-500">Refund Obtained</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-accent">6 Months</div>
                                <div class="text-xs text-gray-500">Case Duration</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="glass rounded-2xl overflow-hidden card-hover">
                    <div class="h-2 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                    <div class="p-8">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Settled</span>
                            <span class="text-gray-500 text-sm">Startup</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Penalty Waiver</h3>
                        <p class="text-gray-400 mb-4">Late filing penalty of ₹5L successfully waived through proper representation and documentation.</p>
                        <div class="flex items-center justify-between border-t border-gray-700 pt-4">
                            <div>
                                <div class="text-2xl font-bold text-purple-400">₹5L</div>
                                <div class="text-xs text-gray-500">Penalty Waived</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-accent">30 Days</div>
                                <div class="text-xs text-gray-500">Resolution Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`);
