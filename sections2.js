// Inject FAQ, Testimonials, Contact and Footer
document.body.insertAdjacentHTML('beforeend', `
    <!-- Testimonials -->
    <section class="py-16 sm:py-24 relative section-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-10 sm:mb-16">
                <span class="text-accent font-semibold tracking-wider text-xs sm:text-sm">TESTIMONIALS</span>
                <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">What Our <span class="gradient-text">Clients Say</span></h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div class="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover">
                    <div class="flex gap-1 mb-3 sm:mb-4">
                        <span class="text-accent text-base sm:text-xl">★</span>
                        <span class="text-accent text-base sm:text-xl">★</span>
                        <span class="text-accent text-base sm:text-xl">★</span>
                        <span class="text-accent text-base sm:text-xl">★</span>
                        <span class="text-accent text-base sm:text-xl">★</span>
                    </div>
                    <p class="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 italic">"Received a scary income tax notice for ₹12 lakhs. TaxPro handled everything professionally and got it reduced to zero. Highly recommended!"</p>
                    <div class="flex items-center gap-3 sm:gap-4">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-base">RK</div>
                        <div>
                            <div class="font-semibold text-sm sm:text-base">Rajesh Kumar</div>
                            <div class="text-xs sm:text-sm text-gray-500">Business Owner, Delhi</div>
                        </div>
                    </div>
                </div>
                <div class="glass rounded-2xl p-8 card-hover">
                    <div class="flex gap-1 mb-4">
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                    </div>
                    <p class="text-gray-300 mb-6 italic">"Best tax consultant I've worked with. They helped me save significant amount through proper tax planning. Very knowledgeable team."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">PS</div>
                        <div>
                            <div class="font-semibold">Priya Sharma</div>
                            <div class="text-sm text-gray-500">IT Professional, Bangalore</div>
                        </div>
                    </div>
                </div>
                <div class="glass rounded-2xl p-8 card-hover">
                    <div class="flex gap-1 mb-4">
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                        <span class="text-accent text-xl">★</span>
                    </div>
                    <p class="text-gray-300 mb-6 italic">"GST audit was giving us sleepless nights. TaxPro team handled it smoothly with complete documentation. Stress-free experience!"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">AM</div>
                        <div>
                            <div class="font-semibold">Amit Mehta</div>
                            <div class="text-sm text-gray-500">Manufacturer, Mumbai</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 sm:py-24 bg-gradient-to-b from-primary via-secondary/20 to-primary section-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-10 sm:mb-16">
                <span class="text-accent font-semibold tracking-wider text-xs sm:text-sm">FAQ</span>
                <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">Frequently Asked <span class="gradient-text">Questions</span></h2>
            </div>
            <div class="space-y-3 sm:space-y-4" id="faqContainer">
                <div class="faq-item glass rounded-lg sm:rounded-xl overflow-hidden">
                    <button class="faq-btn w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span class="font-semibold text-sm sm:text-base pr-4">What should I do if I receive an Income Tax notice?</span>
                        <svg class="faq-icon w-4 h-4 sm:w-5 sm:h-5 text-accent transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="faq-content hidden px-4 sm:px-6 pb-4 sm:pb-5">
                        <p class="text-gray-400 text-sm sm:text-base">Don't panic. First, carefully read the notice to understand what information is being requested. Note the deadline for response. Then contact us immediately - we'll analyze the notice and prepare an appropriate response. Never ignore a tax notice as it can lead to penalties.</p>
                    </div>
                </div>
                <div class="faq-item glass rounded-xl overflow-hidden">
                    <button class="faq-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span class="font-semibold">Do you handle past-year tax issues and back filings?</span>
                        <svg class="faq-icon w-5 h-5 text-accent transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="faq-content hidden px-6 pb-5">
                        <p class="text-gray-400">Yes, we regularly help clients with past-year returns, revised filings, and regularizing their tax status. Whether it's 2 years or 5 years of pending returns, we can help you become compliant and minimize any potential penalties.</p>
                    </div>
                </div>
                <div class="faq-item glass rounded-xl overflow-hidden">
                    <button class="faq-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span class="font-semibold">Is the initial consultation free?</span>
                        <svg class="faq-icon w-5 h-5 text-accent transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="faq-content hidden px-6 pb-5">
                        <p class="text-gray-400">Yes! We offer a free 15-minute initial consultation to understand your tax situation. This helps us provide an accurate quote and you get to evaluate our expertise before making any commitment.</p>
                    </div>
                </div>
                <div class="faq-item glass rounded-xl overflow-hidden">
                    <button class="faq-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span class="font-semibold">What are your fees for tax services?</span>
                        <svg class="faq-icon w-5 h-5 text-accent transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="faq-content hidden px-6 pb-5">
                        <p class="text-gray-400">Our fees depend on the complexity of your case. Basic ITR filing starts from ₹500. For notices and litigation, we provide a detailed quote after reviewing your documents. We believe in transparent pricing with no hidden charges.</p>
                    </div>
                </div>
                <div class="faq-item glass rounded-xl overflow-hidden">
                    <button class="faq-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                        <span class="font-semibold">Can you help with GST registration and returns?</span>
                        <svg class="faq-icon w-5 h-5 text-accent transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="faq-content hidden px-6 pb-5">
                        <p class="text-gray-400">Absolutely! We provide end-to-end GST services including new registration, monthly/quarterly returns (GSTR-1, GSTR-3B), annual returns (GSTR-9), and GST audit. We also handle GST notices and appeals.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-24 relative section-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                    <span class="text-accent font-semibold tracking-wider text-xs sm:text-sm">CONTACT US</span>
                    <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">Get Your <span class="gradient-text">Free Consultation</span></h2>
                    <p class="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">Have a tax question or need professional help? Reach out to us. We respond within 2 hours on business days.</p>
                    
                    <div class="space-y-4 sm:space-y-6">
                        <a href="tel:+919876543210" class="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-colors">
                            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent/20 to-gold/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xs sm:text-sm text-gray-500">Call Us</div>
                                <div class="font-semibold text-sm sm:text-base">+91 98765 43210</div>
                            </div>
                        </a>
                        <a href="https://wa.me/919876543210" class="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-colors">
                            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xs sm:text-sm text-gray-500">WhatsApp</div>
                                <div class="font-semibold text-sm sm:text-base">+91 98765 43210</div>
                            </div>
                        </a>
                        <a href="mailto:contact@taxpro.in" class="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-colors">
                            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xs sm:text-sm text-gray-500">Email</div>
                                <div class="font-semibold text-sm sm:text-base">contact@taxpro.in</div>
                            </div>
                        </a>
                        <div class="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                            <div class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="text-xs sm:text-sm text-gray-500">Office</div>
                                <div class="font-semibold text-sm sm:text-base">123, Legal Complex, Connaught Place, New Delhi - 110001</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8">
                    <h3 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h3>
                    <form id="contactForm" class="space-y-4 sm:space-y-6">
                        <div>
                            <label class="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Full Name *</label>
                            <input type="text" name="name" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:border-accent focus:outline-none transition-colors text-sm sm:text-base" placeholder="Your Name">
                        </div>
                        <div>
                            <label class="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Phone Number *</label>
                            <input type="tel" name="phone" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:border-accent focus:outline-none transition-colors text-sm sm:text-base" placeholder="+91 98765 43210">
                        </div>
                        <div>
                            <label class="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Email (Optional)</label>
                            <input type="email" name="email" class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:border-accent focus:outline-none transition-colors text-sm sm:text-base" placeholder="your@email.com">
                        </div>
                        <div>
                            <label class="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">How can we help? *</label>
                            <select name="service" required class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:border-accent focus:outline-none transition-colors text-sm sm:text-base">
                                <option value="">Select a service</option>
                                <option value="itr">Income Tax Return Filing</option>
                                <option value="notice">Tax Notice Handling</option>
                                <option value="gst">GST Services</option>
                                <option value="appeal">Appeals & Tribunal</option>
                                <option value="planning">Tax Planning</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">Brief Description</label>
                            <textarea name="message" rows="3" class="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl focus:border-accent focus:outline-none transition-colors resize-none text-sm sm:text-base" placeholder="Tell us briefly about your situation..."></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 sm:py-4 bg-gradient-to-r from-accent to-gold text-primary font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base">
                            Book Free Consultation
                        </button>
                        <p class="text-xs text-gray-500 text-center">By submitting, you agree to our privacy policy. We'll never share your information.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 sm:py-12 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                <div class="sm:col-span-2 lg:col-span-2">
                    <a href="#home" class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center">
                            <span class="text-primary font-bold text-lg sm:text-xl">TP</span>
                        </div>
                        <div>
                            <span class="font-serif text-xl sm:text-2xl font-bold">TaxPro</span>
                            <span class="block text-xs text-accent tracking-wider">ADVOCATES</span>
                        </div>
                    </a>
                    <p class="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-md">Expert tax advocacy services for individuals and businesses. 15+ years of experience in Income Tax, GST, and legal representation.</p>
                    <div class="flex gap-3 sm:gap-4">
                        <a href="#" class="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" class="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="#" class="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="#home" class="hover:text-accent transition-colors">Home</a></li>
                        <li><a href="#about" class="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="#services" class="hover:text-accent transition-colors">Services</a></li>
                        <li><a href="#cases" class="hover:text-accent transition-colors">Case Studies</a></li>
                        <li><a href="#contact" class="hover:text-accent transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Services</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="#services" class="hover:text-accent transition-colors">Income Tax Returns</a></li>
                        <li><a href="#services" class="hover:text-accent transition-colors">Tax Notice Handling</a></li>
                        <li><a href="#services" class="hover:text-accent transition-colors">GST Services</a></li>
                        <li><a href="#services" class="hover:text-accent transition-colors">Appeals & Tribunal</a></li>
                        <li><a href="#services" class="hover:text-accent transition-colors">Tax Planning</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-gray-500 text-sm">© 2024 TaxPro Advocates. All rights reserved.</p>
                <div class="flex gap-6 text-sm text-gray-500">
                    <a href="#" class="hover:text-accent transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-accent transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-accent transition-colors">Disclaimer</a>
                </div>
            </div>
        </div>
    </footer>
`);
