// Main Application JavaScript

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('glass', 'shadow-lg');
        } else {
            navbar.classList.remove('glass', 'shadow-lg');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                entry.target.classList.remove('section-hidden');
            }
        });
    }, observerOptions);

    // Observe all sections with animation class
    document.querySelectorAll('.section-hidden').forEach(section => {
        observer.observe(section);
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const item = this.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const icon = this.querySelector('.faq-icon');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-content').classList.add('hidden');
                    otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Show success message
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '✓ Message Sent!';
            btn.classList.add('bg-green-500');
            btn.classList.remove('from-accent', 'to-gold');

            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('bg-green-500');
                btn.classList.add('from-accent', 'to-gold');
                this.reset();
            }, 3000);

            // In production, you would send this data to a server
            console.log('Form submitted:', data);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation classes on load for hero section
    document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-slideInRight').forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.opacity = '1';
        }, 100 * index);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        function update() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        update();
    }

    // Trigger counter animation when stats are in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-counter]');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.counter);
                    animateCounter(counter, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Add parallax effect to floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.animate-float').forEach(el => {
            const speed = 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Typing effect for hero (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    console.log('🎉 TaxPro Advocates website loaded successfully!');
});
