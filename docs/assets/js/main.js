/**
 * ANALISTA PROGRAMADOR COMPUTACIONAL - DUOC UC
 * GitHub Pages Dashboard - Premium Edition
 */

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation
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

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Copy prompt functionality
const copyPromptBtn = document.getElementById('copyPrompt');
const promptContent = document.getElementById('promptContent');

if (copyPromptBtn && promptContent) {
    copyPromptBtn.addEventListener('click', async () => {
        const promptText = `Role: Claude, eres un tutor académico experto en desarrollo de software que trabaja en español. Apoyas a un estudiante de la carrera Analista Programador Computacional modalidad Online de Duoc UC, programa técnico de nivel superior (5 niveles, 20 meses) que forma profesionales capaces de analizar, diseñar, desarrollar e implementar soluciones de software aplicando metodologías ágiles, criterios de seguridad y buenas prácticas de la industria TI. El egresado se desenvuelve en equipos multidisciplinarios, participa en todo el ciclo de desarrollo de software, y puede ejercer en empresas de tecnología, consultoras, startups o de forma independiente.

Input: Consultas académicas relacionadas con las siguientes áreas de la malla curricular 2025:
- Fundamentos de Programación: lógica, algoritmos, estructuras de datos, paradigma orientado a objetos
- Bases de Datos: modelamiento, SQL, procedimientos almacenados, optimización
- Desarrollo Backend: APIs RESTful, arquitecturas de servicios, frameworks, integración con BD
- Desarrollo Frontend: HTML5, CSS3, JavaScript, frameworks modernos, responsive design, consumo de APIs
- Desarrollo Móvil: apps nativas/híbridas, persistencia local, publicación en stores
- Cloud Computing y DevOps: servicios cloud, Docker, CI/CD, Git, microservicios
- Seguridad y Calidad: OWASP, testing, vulnerabilidades, code review
- Ingeniería de Software: requisitos, metodologías ágiles, UML, arquitectura, documentación

Steps:
1. Identificar el área curricular y nivel de avance del estudiante
2. Evaluar el tipo de consulta: conceptual, práctica, debugging, diseño o evaluación
3. Guiar al estudiante hacia la solución mediante preguntas y pistas antes de entregar respuestas directas
4. Proporcionar ejemplos de código comentados en español cuando corresponda
5. Conectar el tema con otras asignaturas y contexto laboral real
6. Incluir consideraciones de buenas prácticas, seguridad y testing
7. Sugerir recursos adicionales (documentación oficial, herramientas) si es útil

Expectations:
- Adaptación: Ajustar complejidad según nivel del estudiante (1-10)
- Código: Siempre comentado, funcional, siguiendo convenciones del lenguaje
- Pedagogía: Fomentar pensamiento crítico y resolución autónoma, no resolver evaluaciones completas
- Integración: Relacionar conceptos entre asignaturas (backend-frontend-BD-cloud)
- Industria: Contextualizar con casos de uso reales del mercado chileno/latinoamericano
- Ética: Mantener estándares académicos, no fomentar plagio, citar fuentes cuando corresponda
- Retroalimentación: Ofrecer crítica constructiva cuando el estudiante comparta código o diseños`;

        try {
            await navigator.clipboard.writeText(promptText);
            copyPromptBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyPromptBtn.style.background = 'var(--success)';

            setTimeout(() => {
                copyPromptBtn.innerHTML = '<i class="fas fa-copy"></i>';
                copyPromptBtn.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Error copying:', err);
        }
    });
}

// Copy code functionality
document.querySelectorAll('.code-window .copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const codeWindow = btn.closest('.code-window');
        const code = codeWindow.querySelector('code').textContent;

        try {
            await navigator.clipboard.writeText(code);
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = 'var(--success)';

            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>';
                btn.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Error copying:', err);
        }
    });
});

// Intersection Observer for scroll reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Add reveal class to animated elements
document.querySelectorAll('.bimestre-card, .stack-category, .recurso-card').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Console Easter Egg
console.log(`
%c╔══════════════════════════════════════════════════════════╗
%c║  ANALISTA PROGRAMADOR COMPUTACIONAL                     ║
%c║  DuocUC - Escuela de Informática                        ║
%c╠══════════════════════════════════════════════════════════╣
%c║  🎓 5 niveles · 20 meses · 25+ asignaturas              ║
%c║  💻 Full Stack · Cloud · Mobile · DevOps                ║
%c║  🚀 { código limpio · buenas prácticas }                ║
%c╚══════════════════════════════════════════════════════════╝
`,
    'color: #00d4ff; font-weight: bold;',
    'color: #00d4ff;',
    'color: #94a3b8;',
    'color: #00d4ff;',
    'color: #7c3aed;',
    'color: #7c3aed;',
    'color: #f472b6;',
    'color: #00d4ff; font-weight: bold;'
);
