/**
 * ANALISTA PROGRAMADOR COMPUTACIONAL - DUOC UC
 * GitHub Pages Dashboard Scripts
 */

// Smooth scroll for navigation links
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

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.background = 'rgba(13, 17, 23, 0.95)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(13, 17, 23, 0.85)';
        header.style.boxShadow = 'none';
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
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.bimestre-card, .resource-card, .stack-category').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Typing effect for code window (optional enhancement)
class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    type() {
        if (this.index < this.text.length) {
            this.element.innerHTML += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Initialize typing effect when hero is visible
const codeBody = document.querySelector('.code-body pre');
if (codeBody) {
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Code is already rendered via HTML
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    codeObserver.observe(codeBody);
}

// Add current year to footer
const yearElement = document.querySelector('.current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile menu toggle (if needed in future)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Console easter egg
console.log(`
%c╔══════════════════════════════════════════════════════════╗
%c║  ANALISTA PROGRAMADOR COMPUTACIONAL - DUOC UC           ║
%c║  Bienvenido al dashboard del programa!                  ║
%c║                                                          ║
%c║  🎓 5 años de formación profesional                     ║
%c║  💻 Full Stack Development                              ║
%c║  ☁️  Cloud & DevOps                                      ║
%c╚══════════════════════════════════════════════════════════╝
`,
    'color: #00d9ff; font-weight: bold;',
    'color: #00d9ff;',
    'color: #8b949e;',
    'color: #8b949e;',
    'color: #58a6ff;',
    'color: #58a6ff;',
    'color: #58a6ff;',
    'color: #00d9ff; font-weight: bold;'
);

// Performance: Lazy load images if any
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}
