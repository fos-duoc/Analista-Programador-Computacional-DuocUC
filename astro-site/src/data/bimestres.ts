export interface Subject {
    icon: string;
    iconType?: 'devicon' | 'fontawesome';
    name: string;
}

export interface Bimestre {
    number: string;
    title: string;
    techIcons: string[];
    subjects: Subject[];
    featured?: boolean;
}

export const bimestresYear1: Bimestre[] = [
    {
        number: "01",
        title: "Fundamentos",
        techIcons: ["python-plain", "oracle-original"],
        subjects: [
            { icon: "python-plain", name: "Fundamentos Prog." },
            { icon: "oracle-original", name: "Modelamiento BD" },
            { icon: "fas fa-book", iconType: "fontawesome", name: "Antropologia" }
        ]
    },
    {
        number: "02",
        title: "POO & Cloud",
        techIcons: ["java-plain", "amazonwebservices-plain-wordmark"],
        subjects: [
            { icon: "java-plain", name: "POO I" },
            { icon: "amazonwebservices-plain-wordmark", name: "Computacion Nube" },
            { icon: "fas fa-comments", iconType: "fontawesome", name: "Comunicacion" }
        ]
    },
    {
        number: "03",
        title: "POO & DevOps",
        techIcons: ["java-plain", "docker-plain"],
        subjects: [
            { icon: "java-plain", name: "POO II" },
            { icon: "docker-plain", name: "DevOps" },
            { icon: "fas fa-balance-scale", iconType: "fontawesome", name: "Etica" }
        ]
    },
    {
        number: "04",
        title: "SQL & Security",
        techIcons: ["oracle-original"],
        subjects: [
            { icon: "oracle-original", name: "SQL Consultas" },
            { icon: "fas fa-shield-alt", iconType: "fontawesome", name: "Seguridad Informatica" }
        ]
    }
];

export const bimestresYear2: Bimestre[] = [
    {
        number: "05",
        title: "SQL & Cloud Native",
        techIcons: ["oracle-original", "kubernetes-plain"],
        featured: true,
        subjects: [
            { icon: "oracle-original", name: "SQL Programacion" },
            { icon: "kubernetes-plain", name: "Cloud Native" },
            { icon: "fas fa-clipboard-list", iconType: "fontawesome", name: "Ing. Requisitos" }
        ]
    },
    {
        number: "06",
        title: "Backend I",
        techIcons: ["spring-plain"],
        subjects: [
            { icon: "spring-plain", name: "Backend I" },
            { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software I" }
        ]
    },
    {
        number: "07",
        title: "Backend II-III",
        techIcons: ["spring-plain"],
        subjects: [
            { icon: "spring-plain", name: "Backend II-III" },
            { icon: "fas fa-project-diagram", iconType: "fontawesome", name: "Ing. Software II" }
        ]
    },
    {
        number: "08",
        title: "Frontend & Arq.",
        techIcons: ["angularjs-plain"],
        subjects: [
            { icon: "angularjs-plain", name: "Frontend I-II" },
            { icon: "fas fa-sitemap", iconType: "fontawesome", name: "Arquitectura Software" }
        ]
    },
    {
        number: "09",
        title: "Mobile & Frontend",
        techIcons: ["kotlin-plain", "angularjs-plain"],
        subjects: [
            { icon: "kotlin-plain", name: "Mobile I" },
            { icon: "angularjs-plain", name: "Frontend III" }
        ]
    },
    {
        number: "10",
        title: "Mobile II & Titulo",
        techIcons: [],
        subjects: [
            { icon: "fas fa-mobile-alt", iconType: "fontawesome", name: "Mobile II" },
            { icon: "fas fa-graduation-cap", iconType: "fontawesome", name: "Taller de Titulo" }
        ]
    }
];
