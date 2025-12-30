/**
 * Datos detallados de todas las asignaturas de la malla curricular
 * Analista Programador Computacional (B01-B10) e Ingeniería en Desarrollo de Software (B11-B17)
 *
 * Estructura basada en el modelo educativo DuocUC:
 * - 3 Experiencias de Aprendizaje por asignatura (Exp1, Exp2, Exp3)
 * - 8 semanas por bimestre
 * - Evaluaciones formativas y sumativas
 */

export interface Experiencia {
    numero: number;
    titulo: string;
    semanas: string;
    descripcion: string;
    contenidos: string[];
    actividades: string[];
}

export interface Evaluacion {
    tipo: string;
    nombre: string;
    ponderacion: number;
    descripcion: string;
}

export interface Asignatura {
    id: string;
    codigo: string;
    nombre: string;
    nombreCorto: string;
    bimestre: number;
    creditos: number;
    horasTeoricas: number;
    horasPracticas: number;
    descripcion: string;
    proposito: string;
    objetivos: string[];
    competencias: string[];
    experiencias: Experiencia[];
    tecnologias: {
        nombre: string;
        icon: string;
        iconType: 'devicon' | 'fontawesome' | 'simple';
    }[];
    evaluaciones: Evaluacion[];
    prerrequisitos: string[];
    conexiones: string[];
    recursos: {
        tipo: string;
        nombre: string;
        url: string;
    }[];
    color: string;
    area: 'programacion' | 'datos' | 'cloud' | 'transversal' | 'arquitectura' | 'mobile' | 'gestion';
}

// =============================================
// BIMESTRE 01 - FUNDAMENTOS
// =============================================

export const asignaturas: Record<string, Asignatura> = {
    // PRY1101 - Fundamentos de Programación
    'fundamentos-programacion': {
        id: 'fundamentos-programacion',
        codigo: 'PRY1101',
        nombre: 'Fundamentos de Programación',
        nombreCorto: 'Fundamentos Prog.',
        bimestre: 1,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura introductoria que establece las bases del pensamiento computacional y la resolución de problemas mediante algoritmos. Los estudiantes aprenden a diseñar, codificar y depurar programas utilizando Python como lenguaje principal.',
        proposito: 'Desarrollar en el estudiante la capacidad de análisis y resolución de problemas mediante la construcción de algoritmos y su implementación en un lenguaje de programación, aplicando buenas prácticas de codificación.',
        objetivos: [
            'Comprender los conceptos fundamentales de la programación estructurada',
            'Diseñar algoritmos utilizando pseudocódigo y diagramas de flujo',
            'Implementar soluciones en Python aplicando estructuras de control',
            'Manipular estructuras de datos básicas: listas, tuplas y diccionarios',
            'Aplicar técnicas de depuración y testing básico',
            'Documentar código siguiendo estándares de la industria'
        ],
        competencias: [
            'Pensamiento algorítmico y resolución de problemas',
            'Diseño de algoritmos con pseudocódigo y diagramas de flujo',
            'Programación estructurada en Python',
            'Implementación de estructuras de control',
            'Modularización con funciones reutilizables',
            'Manipulación de estructuras de datos lineales',
            'Persistencia de datos en archivos',
            'Debugging y pruebas básicas de código'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Introducción a la Programación y Algoritmos',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos del pensamiento computacional, diseño de algoritmos y primeros pasos en Python.',
                contenidos: [
                    'Pensamiento computacional y resolución de problemas',
                    'Conceptos básicos: variable, constante, identificador',
                    'Tipos de datos primitivos: int, float, str, bool',
                    'Operadores aritméticos (+, -, *, /, //, %, **)',
                    'Operadores relacionales y lógicos (and, or, not)',
                    'Entrada/salida de datos: input(), print(), f-strings',
                    'Pseudocódigo: estructuras y convenciones',
                    'Diagramas de flujo con símbolos estándar',
                    'Instalación de Python y configuración de VS Code',
                    'Sintaxis básica: indentación, comentarios, PEP 8'
                ],
                actividades: [
                    'Diseño de algoritmos en pseudocódigo para problemas cotidianos',
                    'Creación de diagramas de flujo con Draw.io',
                    'Primeros programas: calculadora con operaciones básicas',
                    'Conversión de unidades (temperatura, distancia, moneda)',
                    'Cálculo de áreas y perímetros de figuras geométricas',
                    'Ejercicios de debugging: encontrar errores en código dado'
                ]
            },
            {
                numero: 2,
                titulo: 'Estructuras de Control y Funciones',
                semanas: 'Semana 4-5',
                descripcion: 'Control de flujo del programa mediante condicionales, bucles y modularización con funciones.',
                contenidos: [
                    'Estructuras condicionales: if, elif, else',
                    'Operador ternario y expresiones condicionales',
                    'Estructuras repetitivas: while y for',
                    'Función range() y sus variantes',
                    'Control de bucles: break, continue, else en loops',
                    'Bucles anidados y patrones de iteración',
                    'Definición de funciones: def, parámetros, return',
                    'Argumentos posicionales, keyword y valores por defecto',
                    'Alcance de variables: local, global, nonlocal',
                    'Funciones lambda y expresiones anónimas'
                ],
                actividades: [
                    'Validación de datos con condicionales múltiples',
                    'Menús interactivos con bucles y validación de opciones',
                    'Algoritmos clásicos: factorial, fibonacci, números primos',
                    'Refactorización de código repetitivo en funciones',
                    'Mini-proyecto: Sistema de calificaciones con promedio',
                    'Ejercicios de patrones: pirámides, cuadrados con asteriscos'
                ]
            },
            {
                numero: 3,
                titulo: 'Estructuras de Datos y Proyecto Final',
                semanas: 'Semana 6-8',
                descripcion: 'Trabajo con colecciones de datos y desarrollo de un proyecto integrador.',
                contenidos: [
                    'Listas: creación, indexación, slicing',
                    'Métodos de listas: append, extend, insert, remove, pop, sort',
                    'Tuplas: inmutabilidad, desempaquetado, usos comunes',
                    'Diccionarios: claves, valores, métodos get, keys, values, items',
                    'Sets: conjuntos, operaciones de unión, intersección, diferencia',
                    'Comprensión de listas, diccionarios y sets',
                    'Manejo de archivos: open, read, write, with statement',
                    'Módulos útiles: random, math, datetime',
                    'Manejo básico de excepciones: try, except, finally',
                    'Documentación de código: docstrings y type hints básicos'
                ],
                actividades: [
                    'CRUD completo con listas y diccionarios',
                    'Manipulación de datos: filtrar, ordenar, buscar',
                    'Lectura y escritura de archivos CSV simples',
                    'Generación de reportes en archivos de texto',
                    'Mini-juego: Ahorcado o Piedra-Papel-Tijera',
                    'Proyecto integrador: Sistema de inventario con persistencia'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Python', icon: 'python-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'Jupyter', icon: 'jupyter-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'PyCharm', icon: 'pycharm-plain', iconType: 'devicon' },
            { nombre: 'Terminal', icon: 'fa-terminal', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Ejercicios de pseudocódigo y primeros programas' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Práctica de estructuras de control' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Desarrollo de programa con funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Proyecto con estructuras de datos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto integrador final' }
        ],
        prerrequisitos: [],
        conexiones: ['POO I', 'Desarrollo OO II', 'Backend I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Python Official Docs', url: 'https://docs.python.org/3/' },
            { tipo: 'Tutorial', nombre: 'Real Python', url: 'https://realpython.com/' },
            { tipo: 'Práctica', nombre: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python' },
            { tipo: 'Práctica', nombre: 'Exercism Python Track', url: 'https://exercism.org/tracks/python' },
            { tipo: 'Curso', nombre: 'Python for Everybody', url: 'https://www.py4e.com/' },
            { tipo: 'Video', nombre: 'Curso Python - Pildoras Informaticas', url: 'https://www.youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS' },
            { tipo: 'Libro', nombre: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/' },
            { tipo: 'Herramienta', nombre: 'Python Tutor - Visualizer', url: 'https://pythontutor.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Fundamentos-Programacion' }
        ],
        color: 'cyan',
        area: 'programacion'
    },

    // MDY1101 - Modelamiento de Datos
    'modelamiento-datos': {
        id: 'modelamiento-datos',
        codigo: 'MDY1101',
        nombre: 'Modelamiento de Datos',
        nombreCorto: 'Modelamiento BD',
        bimestre: 1,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los fundamentos del diseño de bases de datos relacionales, desde el análisis de requerimientos hasta la implementación del modelo físico en un SGBD.',
        proposito: 'Capacitar al estudiante en el análisis, diseño y documentación de modelos de datos que soporten los requerimientos de información de una organización, aplicando técnicas de normalización y estándares de modelamiento.',
        objetivos: [
            'Identificar y documentar requerimientos de datos de un sistema',
            'Diseñar modelos conceptuales utilizando diagramas E-R',
            'Aplicar técnicas de normalización hasta 3FN',
            'Transformar modelos conceptuales en modelos lógicos',
            'Implementar modelos físicos en un SGBD relacional',
            'Documentar diccionarios de datos profesionales'
        ],
        competencias: [
            'Levantamiento y análisis de requerimientos de datos',
            'Diseño de modelos conceptuales Entidad-Relación',
            'Aplicación de técnicas de normalización (1FN-3FN)',
            'Transformación de modelos conceptuales a lógicos',
            'Implementación de modelos físicos en SGBD',
            'Diseño de integridad referencial y restricciones',
            'Documentación técnica con diccionarios de datos',
            'Uso de herramientas CASE para modelamiento'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos y Modelo Conceptual',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a las bases de datos y diseño del modelo Entidad-Relación.',
                contenidos: [
                    'Conceptos fundamentales: dato, información, conocimiento',
                    'Sistema de Gestión de Bases de Datos (SGBD): funciones y componentes',
                    'Evolución histórica: jerárquico, red, relacional, NoSQL',
                    'Modelo relacional: tablas, filas, columnas, dominios',
                    'Modelo Entidad-Relación (E-R): origen y propósito',
                    'Entidades fuertes, débiles e identificadoras',
                    'Atributos: simples, compuestos, derivados, multivaluados, clave',
                    'Relaciones: binarias, ternarias, reflexivas',
                    'Cardinalidad y participación: (1:1), (1:N), (N:M)',
                    'Notaciones: Chen, Crow\'s Foot, UML'
                ],
                actividades: [
                    'Análisis de casos empresariales: retail, salud, educación',
                    'Identificación de entidades y atributos en escenarios reales',
                    'Diseño de diagramas E-R con Draw.io y Lucidchart',
                    'Determinación de cardinalidades y participación',
                    'Comparación de notaciones en un mismo modelo',
                    'Presentación grupal de modelo conceptual'
                ]
            },
            {
                numero: 2,
                titulo: 'Normalización y Modelo Lógico',
                semanas: 'Semana 4-5',
                descripcion: 'Técnicas de normalización y transformación al modelo relacional.',
                contenidos: [
                    'Anomalías de datos: inserción, actualización, eliminación',
                    'Dependencias funcionales: definición y notación',
                    'Dependencias parciales y transitivas',
                    'Primera Forma Normal (1FN): atomicidad',
                    'Segunda Forma Normal (2FN): dependencia completa',
                    'Tercera Forma Normal (3FN): eliminación de transitivas',
                    'Forma Normal de Boyce-Codd (BCNF) - introducción',
                    'Transformación de E-R a modelo relacional',
                    'Claves primarias: naturales vs surrogadas',
                    'Claves foráneas e integridad referencial'
                ],
                actividades: [
                    'Identificación de dependencias funcionales en tablas',
                    'Ejercicios progresivos de normalización (1FN → 2FN → 3FN)',
                    'Transformación de entidades fuertes y débiles a tablas',
                    'Resolución de relaciones N:M con tablas puente',
                    'Análisis de trade-offs: normalización vs rendimiento',
                    'Taller práctico de normalización con casos reales'
                ]
            },
            {
                numero: 3,
                titulo: 'Modelo Físico y Documentación',
                semanas: 'Semana 6-8',
                descripcion: 'Implementación del modelo en SGBD y documentación profesional.',
                contenidos: [
                    'DDL: CREATE TABLE, ALTER TABLE, DROP TABLE',
                    'Tipos de datos: VARCHAR2, NUMBER, DATE, CLOB, BLOB',
                    'Restricciones: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK',
                    'Acciones referenciales: CASCADE, SET NULL, RESTRICT',
                    'Secuencias y autoincremento',
                    'Índices: B-tree, conceptos básicos',
                    'Diccionario de datos: estructura y contenido',
                    'Documentación de modelos: metadatos y descripciones',
                    'Herramientas CASE: Oracle Data Modeler, pgModeler',
                    'Versionamiento de esquemas de base de datos'
                ],
                actividades: [
                    'Creación de esquemas completos en Oracle y PostgreSQL',
                    'Implementación de restricciones de integridad',
                    'Elaboración de diccionario de datos profesional',
                    'Ingeniería inversa de base de datos existente',
                    'Generación de scripts DDL desde herramienta CASE',
                    'Proyecto final: Modelo completo para sistema empresarial'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Developer', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'fa-table', iconType: 'fontawesome' },
            { nombre: 'Lucidchart', icon: 'fa-sitemap', iconType: 'fontawesome' },
            { nombre: 'pgModeler', icon: 'postgresql-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Diseño de diagrama E-R básico' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Ejercicios de normalización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Modelo conceptual completo' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Normalización y modelo lógico' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto: Modelo físico implementado' }
        ],
        prerrequisitos: [],
        conexiones: ['SQL Consultas', 'SQL Programación', 'BD Aplicada'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Oracle Database Docs', url: 'https://docs.oracle.com/en/database/' },
            { tipo: 'Tutorial', nombre: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
            { tipo: 'Herramienta', nombre: 'Draw.io', url: 'https://app.diagrams.net/' },
            { tipo: 'Curso', nombre: 'Database Design - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc' },
            { tipo: 'Tutorial', nombre: 'Lucidchart ER Diagrams', url: 'https://www.lucidchart.com/pages/er-diagrams' },
            { tipo: 'Libro', nombre: 'Database Design for Mere Mortals', url: 'https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0136788041' },
            { tipo: 'Video', nombre: 'Normalización Explicada', url: 'https://www.youtube.com/watch?v=GFQaEYEc8_8' },
            { tipo: 'Práctica', nombre: 'SQL Practice - W3Schools', url: 'https://www.w3schools.com/sql/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Modelamiento-Datos' }
        ],
        color: 'amber',
        area: 'datos'
    },

    // ANT1101 - Antropología
    'antropologia': {
        id: 'antropologia',
        codigo: 'ANT1101',
        nombre: 'Antropología',
        nombreCorto: 'Antropología',
        bimestre: 1,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general que explora la condición humana desde una perspectiva antropológica, integrando dimensiones filosóficas, culturales y sociales para la formación integral del profesional.',
        proposito: 'Promover la reflexión crítica sobre la condición humana, la diversidad cultural y los desafíos éticos contemporáneos, desarrollando competencias para el trabajo colaborativo en contextos multiculturales.',
        objetivos: [
            'Comprender la naturaleza del ser humano desde distintas perspectivas',
            'Analizar la diversidad cultural y su impacto en el mundo globalizado',
            'Reflexionar sobre dilemas éticos en el ámbito profesional y tecnológico',
            'Desarrollar pensamiento crítico frente a problemáticas sociales',
            'Valorar el trabajo en equipo y la comunicación intercultural'
        ],
        competencias: [
            'Pensamiento crítico y reflexión filosófica',
            'Análisis de la condición humana desde múltiples perspectivas',
            'Sensibilidad y competencia intercultural',
            'Comunicación efectiva en contextos diversos',
            'Trabajo colaborativo en equipos multidisciplinarios',
            'Responsabilidad ética en el ejercicio profesional',
            'Conciencia social y ciudadanía activa',
            'Apertura al diálogo y respeto por la diversidad'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'El Ser Humano y su Naturaleza',
                semanas: 'Semana 1-3',
                descripcion: 'Exploración de las dimensiones fundamentales de la condición humana.',
                contenidos: [
                    'Antropología: definición, objeto de estudio y ramas',
                    'Antropología filosófica vs antropología cultural',
                    'Dimensiones del ser humano: biológica, psicológica, social, espiritual',
                    'El ser humano como ser cultural y simbólico',
                    'Concepto de persona: dignidad y derechos fundamentales',
                    'Identidad personal: construcción y desarrollo',
                    'Identidad colectiva: nación, comunidad, grupos',
                    'El trabajo como dimensión constitutiva del ser humano',
                    'Sentido de vida y trascendencia',
                    'La tecnología como extensión de lo humano'
                ],
                actividades: [
                    'Lectura y análisis de textos filosóficos clásicos',
                    'Debate estructurado sobre la naturaleza humana',
                    'Ensayo reflexivo: ¿Qué significa ser humano hoy?',
                    'Autobiografía reflexiva: mi identidad y valores',
                    'Análisis de película: La condición humana en el cine',
                    'Foro de discusión: Tecnología y humanidad'
                ]
            },
            {
                numero: 2,
                titulo: 'Cultura y Diversidad',
                semanas: 'Semana 4-5',
                descripcion: 'Análisis de la diversidad cultural y sus manifestaciones.',
                contenidos: [
                    'Concepto de cultura: definiciones y elementos',
                    'Componentes de la cultura: símbolos, lenguaje, valores, normas',
                    'Cultura material e inmaterial',
                    'Diversidad cultural en el mundo globalizado',
                    'Etnocentrismo: definición y manifestaciones',
                    'Relativismo cultural: alcances y límites',
                    'Interculturalidad: diálogo entre culturas',
                    'Multiculturalismo en el ámbito laboral tech',
                    'Equipos de trabajo globales y distribuidos',
                    'Tecnología y transformación cultural digital'
                ],
                actividades: [
                    'Investigación etnográfica básica de una subcultura',
                    'Análisis de casos de diversidad en empresas tech globales',
                    'Presentación grupal sobre una cultura del mundo',
                    'Simulación de trabajo en equipo multicultural',
                    'Mapa conceptual de elementos culturales',
                    'Entrevista a profesional de otra cultura'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética y Sociedad Contemporánea',
                semanas: 'Semana 6-8',
                descripcion: 'Reflexión ética sobre los desafíos del mundo actual.',
                contenidos: [
                    'Fundamentos de ética: distinción ética-moral',
                    'Principales corrientes éticas: deontología, utilitarismo, ética de virtudes',
                    'Ética aplicada y ética profesional',
                    'Códigos de ética en tecnología (ACM, IEEE)',
                    'Responsabilidad Social Empresarial (RSE)',
                    'Desafíos éticos de la inteligencia artificial',
                    'Privacidad, vigilancia y datos personales',
                    'Sesgos algorítmicos y discriminación digital',
                    'Sostenibilidad ambiental y tecnología verde',
                    'Ciudadanía digital y participación cívica'
                ],
                actividades: [
                    'Análisis de dilemas éticos reales en la industria tech',
                    'Debate Oxford sobre IA y empleo',
                    'Estudio de caso: Escándalos éticos en Big Tech',
                    'Propuesta de código de ética para startup',
                    'Proyecto final: Plan de RSE para empresa tecnológica',
                    'Reflexión escrita sobre ética personal y profesional'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Google Slides', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Padlet', icon: 'fa-sticky-note', iconType: 'fontawesome' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' },
            { nombre: 'Mentimeter', icon: 'fa-poll', iconType: 'fontawesome' },
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Participación en clases', ponderacion: 0, descripcion: 'Aportes en debates y reflexiones' },
            { tipo: 'Sumativa', nombre: 'Ensayo reflexivo', ponderacion: 30, descripcion: 'Ensayo sobre identidad y cultura' },
            { tipo: 'Sumativa', nombre: 'Trabajo grupal', ponderacion: 30, descripcion: 'Investigación sobre diversidad cultural' },
            { tipo: 'Sumativa', nombre: 'Proyecto final', ponderacion: 40, descripcion: 'Análisis ético de caso tecnológico' }
        ],
        prerrequisitos: [],
        conexiones: ['Ética', 'Comunicación', 'Ética Profesional'],
        recursos: [
            { tipo: 'Video', nombre: 'TED Talks sobre cultura', url: 'https://www.ted.com/topics/culture' },
            { tipo: 'Video', nombre: 'Crash Course Philosophy', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR' },
            { tipo: 'Artículo', nombre: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/' },
            { tipo: 'Video', nombre: 'School of Life - Philosophy', url: 'https://www.youtube.com/c/theschooloflifetv' },
            { tipo: 'Documental', nombre: 'The Social Dilemma', url: 'https://www.thesocialdilemma.com/' },
            { tipo: 'Libro', nombre: 'Homo Deus - Yuval Noah Harari', url: 'https://www.ynharari.com/book/homo-deus/' },
            { tipo: 'Artículo', nombre: 'AI Ethics Guidelines - UNESCO', url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics' },
            { tipo: 'Podcast', nombre: 'Philosophize This!', url: 'https://www.philosophizethis.org/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-01%20-%20Antropologia%2C%20Fundamentos%20Prog.%2C%20Modelamiento%20BD/Antropologia' }
        ],
        color: 'rose',
        area: 'transversal'
    },

    // =============================================
    // BIMESTRE 02 - POO & CLOUD
    // =============================================

    // PRY2202 - Desarrollo Orientado a Objetos I
    'poo-i': {
        id: 'poo-i',
        codigo: 'PRY2202',
        nombre: 'Desarrollo Orientado a Objetos I',
        nombreCorto: 'POO I',
        bimestre: 2,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el paradigma de Programación Orientada a Objetos utilizando Java como lenguaje principal. Los estudiantes aprenden a modelar problemas del mundo real mediante clases, objetos y los cuatro pilares de la POO.',
        proposito: 'Desarrollar la capacidad de diseñar e implementar soluciones de software aplicando los principios fundamentales de la Programación Orientada a Objetos, utilizando Java como herramienta de implementación.',
        objetivos: [
            'Comprender los fundamentos del paradigma orientado a objetos',
            'Diseñar clases con atributos, métodos y constructores',
            'Aplicar los cuatro pilares: encapsulamiento, herencia, polimorfismo, abstracción',
            'Implementar relaciones entre clases: asociación, composición, agregación',
            'Manejar excepciones y validaciones de datos',
            'Trabajar con colecciones genéricas en Java'
        ],
        competencias: [
            'Análisis y diseño orientado a objetos',
            'Programación en Java SE',
            'Modelado con diagramas UML de clases',
            'Implementación de los 4 pilares de POO',
            'Diseño de jerarquías de herencia efectivas',
            'Uso de interfaces para abstracción',
            'Manejo robusto de excepciones',
            'Trabajo con colecciones genéricas'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de POO y Clases en Java',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción al paradigma OO y creación de clases básicas en Java.',
                contenidos: [
                    'Historia y evolución de la POO: Simula, Smalltalk, C++, Java',
                    'Paradigma orientado a objetos vs estructurado: comparación',
                    'Clases y objetos: definición, instanciación, ciclo de vida',
                    'Atributos: tipos primitivos, referencias, inicialización',
                    'Métodos: firma, parámetros, sobrecarga, return',
                    'Constructores: default, parametrizados, this()',
                    'Modificadores de acceso: public, private, protected, package-private',
                    'Encapsulamiento: getters, setters, validaciones',
                    'Palabra clave static: atributos y métodos de clase',
                    'Palabra clave final: constantes y prevención de herencia'
                ],
                actividades: [
                    'Diseño de clase Persona con atributos y validaciones',
                    'Implementación de clase Producto con múltiples constructores',
                    'Clase CuentaBancaria con encapsulamiento y operaciones',
                    'Ejercicio de sobrecarga de métodos en clase Calculadora',
                    'Práctica de atributos y métodos estáticos',
                    'Mini-proyecto: Sistema de registro de estudiantes'
                ]
            },
            {
                numero: 2,
                titulo: 'Herencia y Composición',
                semanas: 'Semana 4-5',
                descripcion: 'Relaciones entre clases: herencia simple y composición de objetos.',
                contenidos: [
                    'Herencia: concepto, beneficios y problemas',
                    'Palabra clave extends y acceso a miembros heredados',
                    'Constructor de superclase: super() y cadena de constructores',
                    'Sobrescritura de métodos: @Override y reglas',
                    'Clases abstractas: abstract class y métodos abstractos',
                    'Composición: "tiene-un" vs herencia "es-un"',
                    'Agregación vs composición: ciclo de vida de objetos',
                    'Asociación: relaciones entre objetos independientes',
                    'Diagramas de clase UML: notación y herramientas',
                    'Principio de sustitución de Liskov (introducción)'
                ],
                actividades: [
                    'Jerarquía de clases: Empleado → Gerente, Desarrollador',
                    'Sistema de figuras geométricas con clase abstracta',
                    'Implementación de composición: Auto contiene Motor',
                    'Modelado UML de sistema de biblioteca',
                    'Refactorización de herencia a composición',
                    'Mini-proyecto: Sistema de nómina con herencia'
                ]
            },
            {
                numero: 3,
                titulo: 'Polimorfismo, Interfaces y Colecciones',
                semanas: 'Semana 6-8',
                descripcion: 'Polimorfismo, interfaces y trabajo con colecciones genéricas.',
                contenidos: [
                    'Polimorfismo de subtipo: upcasting y binding dinámico',
                    'Polimorfismo paramétrico: introducción a genéricos',
                    'Interfaces: definición, implementación múltiple',
                    'Interfaces funcionales y expresiones lambda (introducción)',
                    'Colecciones: Collection, List, Set, Map',
                    'ArrayList vs LinkedList: características y uso',
                    'Iteración: for-each, Iterator, streams básicos',
                    'Excepciones: jerarquía, checked vs unchecked',
                    'Try-catch-finally y try-with-resources',
                    'Excepciones personalizadas: cuándo y cómo crearlas'
                ],
                actividades: [
                    'Sistema de pagos polimórfico: diferentes métodos de pago',
                    'Implementación de interfaces Comparable y Comparator',
                    'Gestión de colección de productos con ArrayList',
                    'Sistema de archivos con manejo de excepciones',
                    'Excepciones personalizadas para validación de negocio',
                    'Proyecto integrador: Sistema de gestión de inventario'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'PlantUML', icon: 'fa-sitemap', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Actividad Formativa 1', ponderacion: 0, descripcion: 'Creación de clases básicas' },
            { tipo: 'Formativa', nombre: 'Actividad Formativa 2', ponderacion: 0, descripcion: 'Práctica de herencia' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'Clases, encapsulamiento, composición' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'Herencia y polimorfismo' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto integrador con interfaces' }
        ],
        prerrequisitos: ['Fundamentos de Programación'],
        conexiones: ['POO II', 'Backend I', 'Frontend I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Java SE Documentation', url: 'https://docs.oracle.com/en/java/' },
            { tipo: 'Tutorial', nombre: 'Baeldung Java', url: 'https://www.baeldung.com/' },
            { tipo: 'Práctica', nombre: 'Exercism Java Track', url: 'https://exercism.org/tracks/java' },
            { tipo: 'Curso', nombre: 'Java Programming - MOOC.fi', url: 'https://java-programming.mooc.fi/' },
            { tipo: 'Video', nombre: 'Java Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo' },
            { tipo: 'Libro', nombre: 'Head First Java', url: 'https://www.oreilly.com/library/view/head-first-java/9781492091646/' },
            { tipo: 'Práctica', nombre: 'CodingBat Java', url: 'https://codingbat.com/java' },
            { tipo: 'Video', nombre: 'OOP in Java - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Qmt0QwzEmh0' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Programacion-OO-I' }
        ],
        color: 'orange',
        area: 'programacion'
    },

    // CLD2201 - Computación en la Nube
    'computacion-nube': {
        id: 'computacion-nube',
        codigo: 'CLD2201',
        nombre: 'Computación en la Nube',
        nombreCorto: 'Computación Nube',
        bimestre: 2,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los conceptos fundamentales de la computación en la nube, modelos de servicio (IaaS, PaaS, SaaS) y despliegue de aplicaciones en proveedores cloud como AWS.',
        proposito: 'Capacitar al estudiante en el uso de servicios cloud para el despliegue y administración de aplicaciones, comprendiendo los modelos de servicio y las mejores prácticas de arquitectura cloud.',
        objetivos: [
            'Comprender los fundamentos de la computación en la nube',
            'Diferenciar los modelos de servicio: IaaS, PaaS, SaaS',
            'Configurar y administrar instancias en AWS EC2',
            'Utilizar servicios de almacenamiento como S3',
            'Desplegar aplicaciones web en la nube',
            'Aplicar conceptos básicos de seguridad cloud'
        ],
        competencias: [
            'Comprensión de arquitecturas cloud y modelos de servicio',
            'Administración de servicios de cómputo AWS EC2',
            'Gestión de almacenamiento con Amazon S3',
            'Configuración de redes virtuales con Amazon VPC',
            'Despliegue de aplicaciones en la nube',
            'Gestión de bases de datos con Amazon RDS',
            'Implementación de seguridad básica con IAM',
            'Monitoreo y optimización de costos cloud'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Cloud Computing',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a los conceptos y modelos de computación en la nube.',
                contenidos: [
                    'Historia del cloud computing: de mainframes a la nube',
                    'Definición NIST de cloud computing',
                    'Modelos de servicio: IaaS, PaaS, SaaS, FaaS',
                    'Modelos de despliegue: público, privado, híbrido, multi-cloud',
                    'Comparativa de proveedores: AWS, Azure, GCP',
                    'Economía del cloud: CapEx vs OpEx',
                    'Introducción a AWS: historia y servicios principales',
                    'Regiones y zonas de disponibilidad',
                    'Consola de administración AWS',
                    'AWS CLI: instalación y configuración básica'
                ],
                actividades: [
                    'Comparación de precios entre proveedores cloud',
                    'Creación de cuenta AWS Academy/Free Tier',
                    'Exploración de la consola AWS',
                    'Instalación y configuración de AWS CLI',
                    'Ejercicio: Identificar servicios para casos de uso',
                    'Quiz de conceptos fundamentales de cloud'
                ]
            },
            {
                numero: 2,
                titulo: 'Cómputo y Almacenamiento en AWS',
                semanas: 'Semana 4-5',
                descripcion: 'Servicios de cómputo EC2 y almacenamiento S3.',
                contenidos: [
                    'Amazon EC2: arquitectura y componentes',
                    'Tipos de instancias: familias y casos de uso',
                    'AMIs: Amazon Machine Images',
                    'Creación y configuración de instancias EC2',
                    'Grupos de seguridad: reglas inbound/outbound',
                    'Key pairs y acceso SSH',
                    'Amazon S3: buckets, objetos, versionamiento',
                    'Clases de almacenamiento S3: Standard, IA, Glacier',
                    'Políticas de bucket y ACLs',
                    'Ciclo de vida de objetos y replicación'
                ],
                actividades: [
                    'Lanzamiento de instancia EC2 Linux',
                    'Conexión SSH y configuración básica',
                    'Instalación de servidor web Apache/Nginx',
                    'Creación de bucket S3 y carga de archivos',
                    'Configuración de bucket público para web estática',
                    'Mini-proyecto: Sitio web estático en S3'
                ]
            },
            {
                numero: 3,
                titulo: 'Redes, Bases de Datos y Despliegue',
                semanas: 'Semana 6-8',
                descripcion: 'Servicios de red, bases de datos y despliegue de aplicaciones.',
                contenidos: [
                    'Amazon VPC: conceptos fundamentales',
                    'Subredes públicas y privadas',
                    'Internet Gateway y NAT Gateway',
                    'Tablas de ruteo y Network ACLs',
                    'Amazon RDS: bases de datos administradas',
                    'Motores soportados: MySQL, PostgreSQL, etc.',
                    'IAM: usuarios, grupos, roles, políticas',
                    'Elastic Beanstalk: PaaS de AWS',
                    'CloudWatch: métricas, logs, alarmas',
                    'AWS Pricing Calculator y optimización de costos'
                ],
                actividades: [
                    'Diseño e implementación de VPC personalizada',
                    'Creación de instancia RDS MySQL/PostgreSQL',
                    'Conexión de EC2 a RDS en VPC privada',
                    'Configuración de IAM para equipo de desarrollo',
                    'Despliegue de aplicación con Elastic Beanstalk',
                    'Proyecto final: Aplicación web completa en AWS'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'SSH', icon: 'ssh-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Bash', icon: 'bash-plain', iconType: 'devicon' },
            { nombre: 'Nginx', icon: 'nginx-original', iconType: 'devicon' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'AWS CLI', icon: 'fa-terminal', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs AWS Academy', ponderacion: 0, descripcion: 'Laboratorios prácticos guiados' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Configuración de EC2 y S3' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Redes y bases de datos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto: Despliegue de aplicación' }
        ],
        prerrequisitos: [],
        conexiones: ['Cloud Native', 'DevOps', 'Cloud Computing'],
        recursos: [
            { tipo: 'Plataforma', nombre: 'AWS Academy', url: 'https://aws.amazon.com/es/training/awsacademy/' },
            { tipo: 'Documentación', nombre: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
            { tipo: 'Tutorial', nombre: 'AWS Skill Builder', url: 'https://skillbuilder.aws/' },
            { tipo: 'Curso', nombre: 'AWS Cloud Practitioner - freeCodeCamp', url: 'https://www.youtube.com/watch?v=SOTamWNgDKc' },
            { tipo: 'Guía', nombre: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
            { tipo: 'Certificación', nombre: 'AWS Certified Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
            { tipo: 'Práctica', nombre: 'AWS Workshops', url: 'https://workshops.aws/' },
            { tipo: 'Herramienta', nombre: 'AWS Pricing Calculator', url: 'https://calculator.aws/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Computacion-Nube' }
        ],
        color: 'yellow',
        area: 'cloud'
    },

    // PLC2201 - Habilidades de Comunicación
    'comunicacion': {
        id: 'comunicacion',
        codigo: 'PLC2201',
        nombre: 'Habilidades de Comunicación',
        nombreCorto: 'Comunicación',
        bimestre: 2,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general orientada al desarrollo de competencias comunicativas esenciales para el desempeño profesional: comprensión lectora, producción escrita y comunicación oral efectiva.',
        proposito: 'Desarrollar habilidades comunicativas que permitan al estudiante expresarse de manera clara, coherente y efectiva en contextos académicos y profesionales del área de tecnología.',
        objetivos: [
            'Mejorar la comprensión de textos técnicos y académicos',
            'Redactar documentos profesionales con claridad y precisión',
            'Desarrollar habilidades de comunicación oral efectiva',
            'Argumentar ideas de forma lógica y estructurada',
            'Aplicar técnicas de presentación profesional'
        ],
        competencias: [
            'Comprensión lectora avanzada de textos técnicos',
            'Redacción técnica y profesional de documentación',
            'Comunicación oral efectiva en contextos profesionales',
            'Argumentación lógica y estructurada',
            'Diseño y ejecución de presentaciones profesionales',
            'Síntesis y análisis crítico de información',
            'Comunicación asertiva en equipos de trabajo',
            'Adaptación del mensaje según audiencia y contexto'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Comprensión Lectora',
                semanas: 'Semana 1-3',
                descripcion: 'Técnicas de lectura comprensiva, análisis crítico y síntesis de textos técnicos y profesionales.',
                contenidos: [
                    'Estrategias de lectura comprensiva y técnicas de skimming/scanning',
                    'Identificación de ideas principales, secundarias y de apoyo',
                    'Análisis de textos técnicos: documentación de software y manuales',
                    'Síntesis y resumen de información técnica compleja',
                    'Lectura crítica y evaluativa de fuentes digitales',
                    'Comprensión de documentación técnica en inglés',
                    'Identificación de sesgos y evaluación de credibilidad',
                    'Mapas conceptuales y organizadores gráficos',
                    'Técnicas de subrayado y anotación efectiva',
                    'Vocabulario técnico y terminología del área TI'
                ],
                actividades: [
                    'Análisis de artículos técnicos de TI y blogs especializados',
                    'Elaboración de resúmenes ejecutivos de documentación',
                    'Ejercicios de comprensión lectora con textos técnicos',
                    'Creación de mapas conceptuales de contenido técnico',
                    'Análisis comparativo de fuentes de información',
                    'Presentación oral de síntesis de lecturas'
                ]
            },
            {
                numero: 2,
                titulo: 'Producción Escrita',
                semanas: 'Semana 4-5',
                descripcion: 'Redacción de documentos profesionales, técnicos y comunicación escrita en entornos laborales.',
                contenidos: [
                    'Estructura de documentos profesionales y técnicos',
                    'Coherencia y cohesión textual: conectores y marcadores',
                    'Redacción de informes técnicos: estructura IMRyD',
                    'Correos electrónicos profesionales y formales',
                    'Minutas de reunión y actas de acuerdos',
                    'Citación APA y referencias bibliográficas',
                    'Documentación de software: README, CHANGELOG, wikis',
                    'Escritura colaborativa y control de versiones en docs',
                    'Redacción de propuestas de proyecto',
                    'Revisión, edición y corrección de estilo'
                ],
                actividades: [
                    'Redacción de informe técnico de proyecto de software',
                    'Elaboración de documentación README profesional',
                    'Práctica de redacción de correos formales (solicitudes, reportes)',
                    'Creación de minutas de reuniones de equipo simuladas',
                    'Revisión y edición entre pares con rúbrica',
                    'Taller de citación y manejo de referencias APA'
                ]
            },
            {
                numero: 3,
                titulo: 'Comunicación Oral y Presentaciones',
                semanas: 'Semana 6-8',
                descripcion: 'Técnicas de presentación profesional, comunicación oral efectiva y manejo de audiencias.',
                contenidos: [
                    'Técnicas de comunicación oral: claridad, dicción, volumen',
                    'Estructura de presentaciones efectivas: inicio, desarrollo, cierre',
                    'Diseño de recursos visuales: principios de diseño de slides',
                    'Manejo del nerviosismo y técnicas de respiración',
                    'Comunicación no verbal: postura, gestos, contacto visual',
                    'Storytelling técnico: contar historias con datos',
                    'Pitch de proyectos: elevator pitch y demo day',
                    'Manejo de preguntas y objeciones de la audiencia',
                    'Presentaciones en entornos virtuales (Zoom, Meet, Teams)',
                    'Retroalimentación constructiva: dar y recibir feedback'
                ],
                actividades: [
                    'Presentación de proyecto técnico ante panel evaluador',
                    'Práctica de pitch de ideas de 3 minutos (elevator pitch)',
                    'Sesiones de retroalimentación entre pares grabadas',
                    'Simulación de demo day de startup tecnológica',
                    'Presentación virtual con compartición de pantalla',
                    'Taller de manejo de preguntas difíciles'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PowerPoint', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' },
            { nombre: 'Grammarly', icon: 'fa-spell-check', iconType: 'fontawesome' },
            { nombre: 'Google Slides', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios de comprensión', ponderacion: 0, descripcion: 'Análisis de textos técnicos' },
            { tipo: 'Sumativa', nombre: 'Diagnóstico', ponderacion: 10, descripcion: 'Evaluación inicial de habilidades' },
            { tipo: 'Sumativa', nombre: 'Informe escrito', ponderacion: 35, descripcion: 'Redacción de documento técnico' },
            { tipo: 'Sumativa', nombre: 'Presentación oral', ponderacion: 55, descripcion: 'Exposición de proyecto' }
        ],
        prerrequisitos: [],
        conexiones: ['Antropología', 'Ética', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Guía', nombre: 'Material de estudio DuocUC', url: '#' },
            { tipo: 'Herramienta', nombre: 'Grammarly - Corrector de gramática', url: 'https://www.grammarly.com/' },
            { tipo: 'Tutorial', nombre: 'Technical Writing - Google Developers', url: 'https://developers.google.com/tech-writing' },
            { tipo: 'Curso', nombre: 'Writing in the Sciences - Stanford', url: 'https://www.coursera.org/learn/sciwrite' },
            { tipo: 'Video', nombre: 'TED Talks - Communication Skills', url: 'https://www.ted.com/topics/communication' },
            { tipo: 'Herramienta', nombre: 'Hemingway Editor - Claridad de escritura', url: 'https://hemingwayapp.com/' },
            { tipo: 'Guía', nombre: 'Purdue OWL - Writing Lab', url: 'https://owl.purdue.edu/owl/general_writing/' },
            { tipo: 'Curso', nombre: 'Public Speaking - Coursera', url: 'https://www.coursera.org/specializations/public-speaking' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Comunicacion' }
        ],
        color: 'pink',
        area: 'transversal'
    },

    // =============================================
    // BIMESTRE 03 - POO II & DEVOPS
    // =============================================

    // PRY3203 - Desarrollo Orientado a Objetos II
    'poo-ii': {
        id: 'poo-ii',
        codigo: 'PRY3203',
        nombre: 'Desarrollo Orientado a Objetos II',
        nombreCorto: 'POO II',
        bimestre: 3,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en el paradigma POO, introduciendo patrones de diseño, principios SOLID, acceso a bases de datos con JDBC y desarrollo de interfaces gráficas con JavaFX.',
        proposito: 'Desarrollar aplicaciones de escritorio robustas aplicando patrones de diseño, principios SOLID y buenas prácticas de arquitectura de software utilizando Java.',
        objetivos: [
            'Aplicar principios SOLID en el diseño de software',
            'Implementar patrones de diseño fundamentales (Factory, Singleton, Observer)',
            'Conectar aplicaciones Java con bases de datos usando JDBC',
            'Desarrollar interfaces gráficas con JavaFX',
            'Gestionar proyectos con Maven y testing con JUnit',
            'Aplicar buenas prácticas de código limpio'
        ],
        competencias: [
            'Aplicación rigurosa de principios SOLID en diseño de software',
            'Implementación de patrones de diseño GoF (creacionales, estructurales, comportamiento)',
            'Diseño e implementación de capa de persistencia con JDBC',
            'Desarrollo de interfaces gráficas profesionales con JavaFX',
            'Testing unitario sistemático con JUnit 5 y Mockito',
            'Gestión de dependencias y ciclo de vida con Maven',
            'Refactorización de código legacy aplicando clean code',
            'Diseño de arquitecturas MVC para aplicaciones de escritorio'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Principios SOLID y Patrones Creacionales',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de diseño de software orientado a objetos, principios SOLID y patrones creacionales GoF.',
                contenidos: [
                    'Principio de Responsabilidad Única (SRP): cohesión y separación de concerns',
                    'Principio Abierto/Cerrado (OCP): extensión vs modificación',
                    'Principio de Sustitución de Liskov (LSP): contratos y subtipos',
                    'Principio de Segregación de Interfaces (ISP): interfaces cohesivas',
                    'Principio de Inversión de Dependencias (DIP): abstracciones vs implementaciones',
                    'Patrón Singleton: instancia única, thread-safety, lazy initialization',
                    'Patrón Factory Method: creación polimórfica de objetos',
                    'Patrón Abstract Factory: familias de objetos relacionados',
                    'Patrón Builder: construcción paso a paso de objetos complejos',
                    'Code smells y técnicas de refactorización'
                ],
                actividades: [
                    'Análisis de código legacy identificando violaciones SOLID',
                    'Refactorización de clase monolítica aplicando SRP y DIP',
                    'Implementación de Factory Method para crear diferentes tipos de reportes',
                    'Implementación de Singleton thread-safe para configuración de app',
                    'Code review grupal con rúbrica de criterios SOLID',
                    'Kata de refactorización: transformar código proceduralOOP'
                ]
            },
            {
                numero: 2,
                titulo: 'JDBC y Patrones de Acceso a Datos',
                semanas: 'Semana 4-5',
                descripcion: 'Conexión a bases de datos relacionales con JDBC, patrones de persistencia y manejo de transacciones.',
                contenidos: [
                    'JDBC API: DriverManager, Connection, Statement, ResultSet',
                    'PreparedStatement: parámetros seguros y prevención de SQL Injection',
                    'Manejo de excepciones SQLException y try-with-resources',
                    'Patrón DAO (Data Access Object): abstracción de persistencia',
                    'Patrón Repository: colección de objetos de dominio',
                    'Connection Pooling con HikariCP: configuración y tuning',
                    'Transacciones: ACID, commit, rollback, savepoints',
                    'Batch processing para operaciones masivas',
                    'Mapeo objeto-relacional manual vs frameworks',
                    'Logging de queries con SLF4J para debugging'
                ],
                actividades: [
                    'Implementación de CRUD completo con patrón DAO',
                    'Configuración de HikariCP connection pool en proyecto Maven',
                    'Testing de capa de persistencia con H2 database en memoria',
                    'Implementación de transacciones con rollback en caso de error',
                    'Comparación de rendimiento: Statement vs PreparedStatement',
                    'Refactorización de DAO a Repository con abstracciones genéricas'
                ]
            },
            {
                numero: 3,
                titulo: 'JavaFX y Arquitectura MVC',
                semanas: 'Semana 6-8',
                descripcion: 'Desarrollo de interfaces gráficas profesionales con JavaFX, Scene Builder y patrón MVC.',
                contenidos: [
                    'JavaFX: Scene, Stage, Scene Graph y ciclo de vida',
                    'Controles básicos: Button, TextField, TableView, ListView',
                    'FXML: separación de vista y Scene Builder visual',
                    'Patrón MVC en aplicaciones desktop: responsabilidades de cada capa',
                    'Data binding bidireccional: Properties y Bindings API',
                    'Event handling: ActionEvent, MouseEvent, KeyEvent',
                    'Patrón Observer para actualización automática de UI',
                    'CSS en JavaFX: estilos personalizados y temas',
                    'Diálogos: Alert, TextInputDialog, FileChooser',
                    'Empaquetado de aplicaciones: JAR ejecutable y jpackage'
                ],
                actividades: [
                    'Diseño de interfaz completa con Scene Builder y FXML',
                    'Implementación de TableView con datos desde base de datos',
                    'Binding de formulario de edición con modelo de datos',
                    'Proyecto integrador: Aplicación CRUD completa JavaFX + JDBC',
                    'Testing de controllers con JUnit 5 y TestFX',
                    'Aplicación de CSS personalizado para look & feel profesional'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'JavaFX', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Scene Builder', icon: 'fa-paint-brush', iconType: 'fontawesome' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de patrones', ponderacion: 0, descripcion: 'Práctica de patrones de diseño' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'SOLID y patrones creacionales' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'JDBC y patrón DAO' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto JavaFX completo' }
        ],
        prerrequisitos: ['POO I'],
        conexiones: ['Backend I', 'Frontend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'JavaFX Documentation', url: 'https://openjfx.io/' },
            { tipo: 'Tutorial', nombre: 'Refactoring Guru - Patrones de Diseño', url: 'https://refactoring.guru/es/design-patterns' },
            { tipo: 'Práctica', nombre: 'Baeldung - JDBC Tutorial', url: 'https://www.baeldung.com/java-jdbc' },
            { tipo: 'Video', nombre: 'Design Patterns in Java - Derek Banas', url: 'https://www.youtube.com/watch?v=NU_1StN5Tkk' },
            { tipo: 'Libro', nombre: 'Clean Code - Robert C. Martin', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
            { tipo: 'Libro', nombre: 'Head First Design Patterns', url: 'https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124' },
            { tipo: 'Tutorial', nombre: 'JUnit 5 User Guide', url: 'https://junit.org/junit5/docs/current/user-guide/' },
            { tipo: 'Práctica', nombre: 'Exercism - Java Track', url: 'https://exercism.org/tracks/java' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/Desarrollo%20Orientado%20a%20Objetos%20II' }
        ],
        color: 'orange',
        area: 'programacion'
    },

    // DVP3201 - DevOps
    'devops': {
        id: 'devops',
        codigo: 'DVP3201',
        nombre: 'DevOps',
        nombreCorto: 'DevOps',
        bimestre: 3,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce la cultura y prácticas DevOps: automatización, CI/CD, contenedores Docker, y gestión de infraestructura como código.',
        proposito: 'Capacitar al estudiante en la implementación de prácticas DevOps para automatizar el ciclo de vida del desarrollo de software, mejorando la colaboración entre equipos de desarrollo y operaciones.',
        objetivos: [
            'Comprender la cultura y principios DevOps',
            'Implementar pipelines de CI/CD con GitHub Actions',
            'Containerizar aplicaciones con Docker',
            'Gestionar configuraciones con Docker Compose',
            'Aplicar prácticas de Infrastructure as Code',
            'Implementar monitoreo básico de aplicaciones'
        ],
        competencias: [
            'Adopción de cultura y principios DevOps (CALMS)',
            'Containerización de aplicaciones con Docker y Docker Compose',
            'Diseño e implementación de pipelines CI/CD con GitHub Actions',
            'Gestión de Infrastructure as Code con herramientas modernas',
            'Implementación de monitoreo, logging y observabilidad',
            'Automatización de tareas con scripts Bash y workflows',
            'Gestión de configuraciones y secretos de forma segura',
            'Estrategias de deployment y rollback en producción'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos DevOps y Control de Versiones',
                semanas: 'Semana 1-3',
                descripcion: 'Cultura y principios DevOps, Git avanzado, estrategias de branching y automatización inicial.',
                contenidos: [
                    'Principios DevOps: Culture, Automation, Lean, Measurement, Sharing (CALMS)',
                    'Three Ways: Flow, Feedback, Continuous Learning',
                    'Git Flow: feature branches, release branches, hotfixes',
                    'Trunk-based development y GitHub Flow',
                    'Pull Requests: templates, reviews, protección de ramas',
                    'Semantic Versioning (SemVer): MAJOR.MINOR.PATCH',
                    'Conventional Commits: feat, fix, docs, chore',
                    'Introducción a GitHub Actions: events, jobs, steps',
                    'Automatización básica con scripts Bash/PowerShell',
                    'Pre-commit hooks con Husky para validaciones locales'
                ],
                actividades: [
                    'Configuración de flujo Git Flow en repositorio de equipo',
                    'Implementación de branch protection rules en GitHub',
                    'Creación de primer workflow de GitHub Actions (CI básico)',
                    'Configuración de pre-commit hooks con linting y formatting',
                    'Práctica de code review con checklist de calidad',
                    'Automatización de changelog con Conventional Commits'
                ]
            },
            {
                numero: 2,
                titulo: 'Docker y Containerización',
                semanas: 'Semana 4-5',
                descripcion: 'Containerización de aplicaciones con Docker, Docker Compose y mejores prácticas de imágenes.',
                contenidos: [
                    'Contenedores vs máquinas virtuales: arquitectura y beneficios',
                    'Docker architecture: daemon, client, registry',
                    'Docker images: layers, caching, tagging strategies',
                    'Docker containers: lifecycle, networking, volumes',
                    'Dockerfile: instructions, multi-stage builds, .dockerignore',
                    'Docker Compose: services, networks, volumes, depends_on',
                    'Docker Hub: public/private repos, automated builds',
                    'Container security: non-root users, image scanning',
                    'Best practices: slim images, layer optimization, BuildKit',
                    'Docker networking: bridge, host, overlay'
                ],
                actividades: [
                    'Containerización de aplicación Java con multi-stage build',
                    'Containerización de aplicación Python con requirements.txt',
                    'Orquestación multi-servicio con Docker Compose (app + db)',
                    'Push de imágenes a Docker Hub con tags versionados',
                    'Análisis de seguridad de imagen con docker scan',
                    'Optimización de Dockerfile para reducir tamaño de imagen'
                ]
            },
            {
                numero: 3,
                titulo: 'CI/CD y Deployment',
                semanas: 'Semana 6-8',
                descripcion: 'Pipelines completos de CI/CD, deployment automatizado y monitoreo básico de aplicaciones.',
                contenidos: [
                    'Pipeline CI: checkout, build, test, lint, security scan',
                    'Pipeline CD: environments, staging, production',
                    'GitHub Actions: secrets, variables, contexts',
                    'Matrix builds para múltiples versiones/plataformas',
                    'Caching de dependencias para acelerar builds',
                    'Deploy a PaaS: Render, Railway, Vercel, Heroku',
                    'Blue-green deployment y canary releases',
                    'Rollback strategies y feature flags',
                    'Monitoreo básico: health checks, logging estructurado',
                    'Notificaciones: Slack, email, GitHub status checks'
                ],
                actividades: [
                    'Pipeline CI/CD completo con testing y linting',
                    'Configuración de environments staging y production',
                    'Deploy automatizado a Render/Railway con Docker',
                    'Implementación de health check endpoint',
                    'Configuración de notificaciones en Slack/Discord',
                    'Proyecto integrador: App full-stack con DevOps completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Bash', icon: 'bash-plain', iconType: 'devicon' },
            { nombre: 'YAML', icon: 'fa-file-code', iconType: 'fontawesome' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' },
            { nombre: 'Render', icon: 'fa-cloud', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Docker', ponderacion: 0, descripcion: 'Prácticas de containerización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 25, descripcion: 'Git avanzado y GitHub Actions básico' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 35, descripcion: 'Docker y Docker Compose' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Pipeline CI/CD completo' }
        ],
        prerrequisitos: ['Computación en la Nube'],
        conexiones: ['Cloud Native', 'Backend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Docker Documentation', url: 'https://docs.docker.com/' },
            { tipo: 'Tutorial', nombre: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
            { tipo: 'Roadmap', nombre: 'DevOps Roadmap 2025', url: 'https://roadmap.sh/devops' },
            { tipo: 'Video', nombre: 'Docker Tutorial - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' },
            { tipo: 'Práctica', nombre: 'Play with Docker Labs', url: 'https://labs.play-with-docker.com/' },
            { tipo: 'Curso', nombre: 'Docker & Kubernetes - Udemy', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
            { tipo: 'Libro', nombre: 'The DevOps Handbook', url: 'https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1950508404' },
            { tipo: 'Tutorial', nombre: 'Learn GitHub Actions', url: 'https://learn.microsoft.com/en-us/training/paths/automate-workflow-github-actions/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/DevOps' }
        ],
        color: 'blue',
        area: 'cloud'
    },

    // ETI3201 - Ética
    'etica': {
        id: 'etica',
        codigo: 'ETI3201',
        nombre: 'Ética',
        nombreCorto: 'Ética',
        bimestre: 3,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura de formación general que profundiza en la reflexión ética aplicada al ámbito profesional y tecnológico, abordando dilemas contemporáneos de la industria TI.',
        proposito: 'Desarrollar el juicio ético del estudiante para enfrentar dilemas profesionales en el ámbito tecnológico, promoviendo una práctica responsable y comprometida con la sociedad.',
        objetivos: [
            'Analizar fundamentos filosóficos de la ética',
            'Evaluar dilemas éticos en el desarrollo de software',
            'Comprender la ética del manejo de datos y privacidad',
            'Reflexionar sobre el impacto social de la tecnología',
            'Aplicar códigos de ética profesional en TI'
        ],
        competencias: [
            'Razonamiento ético basado en teorías filosóficas',
            'Responsabilidad profesional en el desarrollo de software',
            'Pensamiento crítico ante dilemas tecnológicos',
            'Conciencia social sobre el impacto de la tecnología',
            'Integridad profesional y códigos de conducta',
            'Análisis de sesgos algorítmicos y fairness en IA',
            'Evaluación ética de privacidad y protección de datos',
            'Compromiso con tecnología sostenible y responsable'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Ética',
                semanas: 'Semana 1-3',
                descripcion: 'Bases filosóficas, teorías éticas y su aplicación al ámbito profesional tecnológico.',
                contenidos: [
                    'Ética, moral y valores: definiciones y diferencias',
                    'Teoría deontológica de Kant: deber y universalidad',
                    'Utilitarismo de Bentham y Mill: consecuencias y bienestar',
                    'Ética de las virtudes de Aristóteles: carácter y excelencia',
                    'Relativismo vs universalismo ético: debate contemporáneo',
                    'Códigos de ética profesional: ACM Code of Ethics',
                    'Código de ética IEEE y responsabilidad del ingeniero',
                    'Responsabilidad del profesional TI ante la sociedad',
                    'Conflictos de interés en el desarrollo de software',
                    'Casos históricos de fallos éticos en tecnología'
                ],
                actividades: [
                    'Análisis comparativo de códigos ACM vs IEEE',
                    'Debate estructurado sobre teorías éticas aplicadas',
                    'Reflexión escrita sobre valores profesionales personales',
                    'Estudio de caso: Volkswagen Dieselgate y ética ingenieril',
                    'Elaboración de código de ética personal del programador',
                    'Discusión grupal sobre responsabilidad profesional'
                ]
            },
            {
                numero: 2,
                titulo: 'Ética en Tecnología',
                semanas: 'Semana 4-5',
                descripcion: 'Dilemas éticos específicos del sector tecnológico: privacidad, IA, propiedad intelectual.',
                contenidos: [
                    'Privacidad y protección de datos: GDPR, LGPD, Ley 19.628 Chile',
                    'Sesgos algorítmicos: racial, género, socioeconómico',
                    'Fairness en Machine Learning: métricas y trade-offs',
                    'Propiedad intelectual: copyright, patentes de software',
                    'Software libre vs propietario: filosofía y licencias (GPL, MIT)',
                    'Ciberseguridad y hacking ético: límites y responsabilidades',
                    'Dark patterns en UX: manipulación del usuario',
                    'Impacto ambiental de data centers y Green IT',
                    'Adicción tecnológica y diseño persuasivo',
                    'Fake news, desinformación y responsabilidad de plataformas'
                ],
                actividades: [
                    'Análisis de casos de violación de privacidad (Cambridge Analytica)',
                    'Debate sobre sesgos algorítmicos en sistemas de contratación',
                    'Investigación sobre iniciativas de Green IT en la industria',
                    'Evaluación de dark patterns en apps populares',
                    'Comparación de licencias de software libre',
                    'Análisis del impacto social de redes sociales'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética Aplicada y Proyecto',
                semanas: 'Semana 6-8',
                descripcion: 'Aplicación práctica de principios éticos en proyectos tecnológicos y tech for good.',
                contenidos: [
                    'Framework para toma de decisiones éticas en proyectos',
                    'Whistleblowing: protección y dilemas del denunciante',
                    'Conflictos de interés: identificación y gestión',
                    'Responsabilidad social empresarial (RSE) en tech',
                    'Futuro del trabajo: automatización y desplazamiento laboral',
                    'Tecnología para el bien social: ejemplos y oportunidades',
                    'Diseño inclusivo y accesibilidad web (WCAG)',
                    'IA responsable: principios y governance',
                    'Sostenibilidad digital y economía circular',
                    'El rol del desarrollador como agente de cambio social'
                ],
                actividades: [
                    'Análisis de dilemas éticos reales en empresas tech',
                    'Proyecto grupal: Propuesta de tech for good para Chile',
                    'Presentación y defensa de caso ético ante panel',
                    'Evaluación de accesibilidad de sitio web existente',
                    'Elaboración de framework de decisión ética para equipo',
                    'Simulación de comité de ética empresarial'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Presentaciones', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Miro', icon: 'fa-object-group', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' },
            { nombre: 'Zoom', icon: 'fa-video', iconType: 'fontawesome' },
            { nombre: 'Mentimeter', icon: 'fa-chart-bar', iconType: 'fontawesome' },
            { nombre: 'Padlet', icon: 'fa-sticky-note', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Participación en debates', ponderacion: 0, descripcion: 'Aportes en discusiones éticas' },
            { tipo: 'Sumativa', nombre: 'Ensayo ético', ponderacion: 30, descripcion: 'Análisis de dilema tecnológico' },
            { tipo: 'Sumativa', nombre: 'Caso de estudio', ponderacion: 30, descripcion: 'Evaluación de caso real' },
            { tipo: 'Sumativa', nombre: 'Proyecto final', ponderacion: 40, descripcion: 'Propuesta de tecnología ética' }
        ],
        prerrequisitos: ['Antropología'],
        conexiones: ['Ética Profesional', 'Seguridad Informática'],
        recursos: [
            { tipo: 'Código', nombre: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics' },
            { tipo: 'Código', nombre: 'IEEE Code of Ethics', url: 'https://www.ieee.org/about/corporate/governance/p7-8.html' },
            { tipo: 'Curso', nombre: 'Responsible AI Practices - Google', url: 'https://ai.google/responsibility/responsible-ai-practices/' },
            { tipo: 'Curso', nombre: 'Responsible AI - Microsoft', url: 'https://www.microsoft.com/en-us/ai/responsible-ai' },
            { tipo: 'Video', nombre: 'The Social Dilemma (Netflix)', url: 'https://www.thesocialdilemma.com/' },
            { tipo: 'Video', nombre: 'TED: The Era of Blind Faith in Big Data - Cathy O\'Neil', url: 'https://www.ted.com/talks/cathy_o_neil_the_era_of_blind_faith_in_big_data_must_end' },
            { tipo: 'Libro', nombre: 'Weapons of Math Destruction - Cathy O\'Neil', url: 'https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815' },
            { tipo: 'Artículo', nombre: 'AI Ethics Guidelines - EU', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-03%20-%20POO%20II%2C%20DevOps%2C%20Etica/Etica' }
        ],
        color: 'rose',
        area: 'transversal'
    },

    // =============================================
    // BIMESTRE 04 - SQL & SEGURIDAD
    // =============================================

    // BDD4201 - SQL Consultas
    'sql-consultas': {
        id: 'sql-consultas',
        codigo: 'BDD4201',
        nombre: 'Consultas SQL',
        nombreCorto: 'SQL Consultas',
        bimestre: 4,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias avanzadas en consultas SQL, desde sentencias básicas hasta queries complejos con múltiples tablas, subconsultas y funciones de agregación.',
        proposito: 'Capacitar al estudiante en la extracción y manipulación eficiente de datos mediante SQL, dominando desde consultas básicas hasta queries avanzados para análisis de información.',
        objetivos: [
            'Dominar la sintaxis SQL estándar (SELECT, WHERE, ORDER BY)',
            'Realizar consultas con múltiples tablas usando JOINs',
            'Aplicar funciones de agregación y GROUP BY',
            'Implementar subconsultas y CTEs',
            'Optimizar consultas para mejor rendimiento',
            'Utilizar funciones de ventana (Window Functions)'
        ],
        competencias: [
            'Dominio de sintaxis SQL DQL estándar (SELECT, JOINs, aggregations)',
            'Diseño y ejecución de JOINs complejos entre múltiples tablas',
            'Aplicación de funciones de agregación para análisis de datos',
            'Implementación de subconsultas escalares, correlacionadas y CTEs',
            'Optimización de consultas mediante análisis de plan de ejecución',
            'Uso de Window Functions para cálculos analíticos avanzados',
            'Extracción de insights de negocio mediante SQL analítico',
            'Resolución de problemas de datos complejos con SQL'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos SQL y Consultas Básicas',
                semanas: 'Semana 1-3',
                descripcion: 'Sintaxis SQL básica, filtrado, ordenamiento y funciones integradas sobre tablas individuales.',
                contenidos: [
                    'SELECT, FROM, WHERE, DISTINCT: anatomía de una consulta',
                    'Operadores de comparación: =, <>, <, >, <=, >=, BETWEEN, LIKE',
                    'Operadores lógicos: AND, OR, NOT y precedencia',
                    'ORDER BY ASC/DESC, LIMIT, OFFSET para paginación',
                    'Funciones de texto: UPPER, LOWER, CONCAT, SUBSTRING, TRIM',
                    'Funciones de fecha: CURRENT_DATE, EXTRACT, DATE_PART, AGE',
                    'NULL handling: IS NULL, IS NOT NULL, COALESCE, NULLIF',
                    'CASE WHEN para lógica condicional en SELECT',
                    'Alias de columnas y tablas para legibilidad',
                    'Comentarios y formato de código SQL'
                ],
                actividades: [
                    'Consultas sobre base de datos Northwind/Sakila',
                    'Filtrado avanzado con operadores combinados',
                    'Ejercicios de funciones de texto para limpieza de datos',
                    'Consultas con funciones de fecha para análisis temporal',
                    'Transformación de datos con CASE WHEN',
                    'Práctica en SQLZoo y HackerRank SQL'
                ]
            },
            {
                numero: 2,
                titulo: 'JOINs y Agregaciones',
                semanas: 'Semana 4-5',
                descripcion: 'Consultas multi-tabla con diferentes tipos de JOIN y funciones de agregación para análisis.',
                contenidos: [
                    'INNER JOIN: registros coincidentes en ambas tablas',
                    'LEFT/RIGHT OUTER JOIN: registros con o sin coincidencia',
                    'FULL OUTER JOIN: unión completa de registros',
                    'Self-joins para relaciones jerárquicas',
                    'CROSS JOIN para productos cartesianos',
                    'COUNT, SUM, AVG, MIN, MAX: funciones de agregación',
                    'GROUP BY: agrupación para cálculos agregados',
                    'HAVING: filtrado sobre grupos agregados',
                    'JOINs con múltiples tablas (3+)',
                    'Análisis de planes de ejecución con EXPLAIN'
                ],
                actividades: [
                    'Consultas con múltiples JOINs encadenados',
                    'Reportes de ventas con agregaciones por período',
                    'Análisis de datos con GROUP BY y HAVING',
                    'Self-join para estructura organizacional',
                    'Identificación de registros huérfanos con LEFT JOIN',
                    'Optimización de JOINs con análisis EXPLAIN'
                ]
            },
            {
                numero: 3,
                titulo: 'Subconsultas y Funciones Avanzadas',
                semanas: 'Semana 6-8',
                descripcion: 'Subconsultas, CTEs, funciones de ventana y técnicas avanzadas para análisis de datos.',
                contenidos: [
                    'Subconsultas escalares en SELECT y WHERE',
                    'Subconsultas de tabla (derived tables)',
                    'Subconsultas correlacionadas: referencia a query externo',
                    'EXISTS, NOT EXISTS para verificación de existencia',
                    'IN, ANY, ALL para comparaciones con conjuntos',
                    'Common Table Expressions (CTEs): WITH clause',
                    'CTEs recursivos para estructuras jerárquicas',
                    'Window Functions: ROW_NUMBER, RANK, DENSE_RANK',
                    'LAG, LEAD, FIRST_VALUE, LAST_VALUE para análisis temporal',
                    'OVER con PARTITION BY y ORDER BY para particionamiento'
                ],
                actividades: [
                    'Consultas con subconsultas correlacionadas',
                    'CTEs para simplificar queries complejos',
                    'CTE recursivo para árbol organizacional',
                    'Ranking de productos con Window Functions',
                    'Análisis de tendencias con LAG/LEAD',
                    'Proyecto integrador: Dashboard de análisis SQL'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'MySQL', icon: 'mysql-plain', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'DataGrip', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'pgAdmin', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Server', icon: 'microsoftsqlserver-plain', iconType: 'devicon' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios SQL', ponderacion: 0, descripcion: 'Práctica de consultas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Consultas básicas y JOINs' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Agregaciones y subconsultas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto de análisis SQL' }
        ],
        prerrequisitos: ['Modelamiento de Datos'],
        conexiones: ['SQL Programación', 'Backend I', 'BD Aplicada'],
        recursos: [
            { tipo: 'Práctica', nombre: 'SQLZoo - Interactive Tutorial', url: 'https://sqlzoo.net/' },
            { tipo: 'Tutorial', nombre: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
            { tipo: 'Documentación', nombre: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
            { tipo: 'Práctica', nombre: 'LeetCode SQL Problems', url: 'https://leetcode.com/problemset/database/' },
            { tipo: 'Curso', nombre: 'SQL for Data Science - Coursera', url: 'https://www.coursera.org/learn/sql-for-data-science' },
            { tipo: 'Práctica', nombre: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql' },
            { tipo: 'Video', nombre: 'SQL Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { tipo: 'Libro', nombre: 'Learning SQL - Alan Beaulieu', url: 'https://www.amazon.com/Learning-SQL-Generate-Manipulate-Retrieve/dp/1492057614' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-04%20-%20SQL%20Consultas%2C%20Seguridad/SQL%20Consultas' }
        ],
        color: 'amber',
        area: 'datos'
    },

    // SEG4201 - Seguridad Informática
    'seguridad-informatica': {
        id: 'seguridad-informatica',
        codigo: 'SEG4201',
        nombre: 'Seguridad Informática',
        nombreCorto: 'Seguridad Informática',
        bimestre: 4,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce los fundamentos de ciberseguridad, vulnerabilidades comunes en aplicaciones web (OWASP Top 10), y prácticas de desarrollo seguro.',
        proposito: 'Desarrollar la capacidad de identificar, prevenir y mitigar vulnerabilidades de seguridad en aplicaciones de software, aplicando principios de seguridad desde el diseño.',
        objetivos: [
            'Comprender los principios de seguridad de la información (CIA)',
            'Identificar vulnerabilidades del OWASP Top 10',
            'Implementar prácticas de desarrollo seguro',
            'Aplicar técnicas de autenticación y autorización',
            'Realizar análisis básico de vulnerabilidades',
            'Implementar cifrado y manejo seguro de datos'
        ],
        competencias: [
            'Fundamentos de ciberseguridad',
            'OWASP Top 10',
            'Desarrollo seguro (SSDLC)',
            'Autenticación y autorización',
            'Criptografía básica'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Seguridad',
                semanas: 'Semana 1-3',
                descripcion: 'Principios de seguridad y amenazas comunes.',
                contenidos: [
                    'Triada CIA: Confidencialidad, Integridad, Disponibilidad',
                    'Tipos de amenazas y atacantes',
                    'Ingeniería social y phishing',
                    'Malware: virus, ransomware, troyanos',
                    'Seguridad en redes básica',
                    'Introducción a OWASP'
                ],
                actividades: [
                    'Análisis de casos de brechas de seguridad',
                    'Identificación de amenazas en sistemas',
                    'Laboratorio de phishing awareness'
                ]
            },
            {
                numero: 2,
                titulo: 'OWASP Top 10 y Vulnerabilidades Web',
                semanas: 'Semana 4-5',
                descripcion: 'Principales vulnerabilidades en aplicaciones web.',
                contenidos: [
                    'A01: Broken Access Control',
                    'A02: Cryptographic Failures',
                    'A03: Injection (SQL, XSS, Command)',
                    'A04: Insecure Design',
                    'A05: Security Misconfiguration',
                    'A07: Cross-Site Scripting (XSS)'
                ],
                actividades: [
                    'Laboratorio con OWASP WebGoat',
                    'Identificación de vulnerabilidades',
                    'Práctica de SQL Injection y XSS'
                ]
            },
            {
                numero: 3,
                titulo: 'Desarrollo Seguro y Mitigación',
                semanas: 'Semana 6-8',
                descripcion: 'Prácticas de desarrollo seguro y remediación.',
                contenidos: [
                    'Secure SDLC (SSDLC)',
                    'Validación de entrada y sanitización',
                    'Autenticación: contraseñas, MFA, OAuth',
                    'Autorización: RBAC, ABAC',
                    'Cifrado: hashing, AES, TLS',
                    'HTTPS y certificados SSL'
                ],
                actividades: [
                    'Implementación de autenticación segura',
                    'Remediación de vulnerabilidades',
                    'Proyecto: Aplicación segura'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'OWASP ZAP', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'Burp Suite', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Kali Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Wireshark', icon: 'fa-network-wired', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de seguridad', ponderacion: 0, descripcion: 'Prácticas en WebGoat' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos y amenazas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'OWASP Top 10' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto de desarrollo seguro' }
        ],
        prerrequisitos: [],
        conexiones: ['Seguridad y Calidad', 'Backend I', 'Cloud Native'],
        recursos: [
            { tipo: 'Documentación', nombre: 'OWASP Top 10', url: 'https://owasp.org/Top10/' },
            { tipo: 'Práctica', nombre: 'OWASP WebGoat', url: 'https://owasp.org/www-project-webgoat/' },
            { tipo: 'Curso', nombre: 'PortSwigger Academy', url: 'https://portswigger.net/web-security' },
            { tipo: 'Práctica', nombre: 'TryHackMe', url: 'https://tryhackme.com/' },
            { tipo: 'Curso', nombre: 'Cybersecurity - Google', url: 'https://grow.google/certificates/cybersecurity/' }
        ],
        color: 'red',
        area: 'arquitectura'
    },

    // =============================================
    // BIMESTRE 05 - SQL AVANZADO & CLOUD NATIVE
    // =============================================

    // BDD5201 - SQL Programación
    'sql-programacion': {
        id: 'sql-programacion',
        codigo: 'BDD5201',
        nombre: 'Programación SQL',
        nombreCorto: 'SQL Programacion',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias en programación de bases de datos: procedimientos almacenados, funciones, triggers, cursores y optimización de rendimiento.',
        proposito: 'Capacitar al estudiante en la programación avanzada de bases de datos para implementar lógica de negocio en el servidor, optimizar rendimiento y automatizar procesos de datos.',
        objetivos: [
            'Crear y gestionar procedimientos almacenados',
            'Implementar funciones definidas por el usuario',
            'Diseñar triggers para auditoría y validación',
            'Utilizar cursores y manejo de excepciones',
            'Optimizar queries y analizar planes de ejecución',
            'Gestionar transacciones y concurrencia'
        ],
        competencias: [
            'Stored Procedures',
            'Funciones y triggers',
            'PL/pgSQL y PL/SQL',
            'Optimización de rendimiento',
            'Transacciones ACID'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Procedimientos Almacenados y Funciones',
                semanas: 'Semana 1-3',
                descripcion: 'Creación de lógica de negocio en base de datos.',
                contenidos: [
                    'Procedimientos almacenados: CREATE PROCEDURE',
                    'Parámetros IN, OUT, INOUT',
                    'Variables y control de flujo',
                    'Funciones escalares y de tabla',
                    'Manejo de excepciones',
                    'Diferencias entre Oracle PL/SQL y PostgreSQL PL/pgSQL'
                ],
                actividades: [
                    'CRUD con procedimientos almacenados',
                    'Funciones de validación y cálculo',
                    'Manejo de errores y logging'
                ]
            },
            {
                numero: 2,
                titulo: 'Triggers y Cursores',
                semanas: 'Semana 4-5',
                descripcion: 'Automatización y procesamiento fila por fila.',
                contenidos: [
                    'Triggers: BEFORE, AFTER, INSTEAD OF',
                    'Triggers para auditoría de cambios',
                    'Restricciones con triggers',
                    'Cursores implícitos y explícitos',
                    'FETCH, LOOP, EXIT',
                    'Alternativas a cursores con CTEs'
                ],
                actividades: [
                    'Sistema de auditoría con triggers',
                    'Validaciones de negocio automatizadas',
                    'Procesamiento batch con cursores'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización y Transacciones',
                semanas: 'Semana 6-8',
                descripcion: 'Rendimiento de base de datos y concurrencia.',
                contenidos: [
                    'EXPLAIN ANALYZE y planes de ejecución',
                    'Índices: B-tree, Hash, GIN, GiST',
                    'Estrategias de indexación',
                    'Transacciones: COMMIT, ROLLBACK, SAVEPOINT',
                    'Niveles de aislamiento',
                    'Deadlocks y bloqueos'
                ],
                actividades: [
                    'Análisis y optimización de queries',
                    'Diseño de estrategia de índices',
                    'Proyecto: Sistema transaccional completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'PL/pgSQL', icon: 'fa-code', iconType: 'fontawesome' },
            { nombre: 'DBeaver', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'pgAdmin', icon: 'postgresql-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de programación', ponderacion: 0, descripcion: 'Práctica de SP y funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Procedimientos y funciones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Triggers y cursores' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto optimización' }
        ],
        prerrequisitos: ['SQL Consultas'],
        conexiones: ['BD Aplicada', 'Backend I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'PostgreSQL PL/pgSQL', url: 'https://www.postgresql.org/docs/current/plpgsql.html' },
            { tipo: 'Tutorial', nombre: 'Oracle PL/SQL', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/' },
            { tipo: 'Práctica', nombre: 'SQL Performance Explained', url: 'https://use-the-index-luke.com/' },
            { tipo: 'Video', nombre: 'PL/SQL Tutorial - Oracle', url: 'https://www.youtube.com/watch?v=3bEQaCUvp6Q' },
            { tipo: 'Curso', nombre: 'Database Performance Tuning', url: 'https://www.udemy.com/topic/sql-optimization/' }
        ],
        color: 'amber',
        area: 'datos'
    },

    // CLD5201 - Cloud Native
    'cloud-native': {
        id: 'cloud-native',
        codigo: 'CLD5201',
        nombre: 'Cloud Native',
        nombreCorto: 'Cloud Native',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en el desarrollo de aplicaciones cloud-native, introduciendo Kubernetes, microservicios y arquitecturas serverless.',
        proposito: 'Capacitar al estudiante en el diseño e implementación de aplicaciones nativas de la nube, aplicando patrones de microservicios y orquestación de contenedores.',
        objetivos: [
            'Comprender los principios de aplicaciones cloud-native',
            'Desplegar y gestionar aplicaciones en Kubernetes',
            'Diseñar arquitecturas de microservicios',
            'Implementar patrones de comunicación entre servicios',
            'Aplicar observabilidad: logs, métricas, traces',
            'Utilizar servicios serverless'
        ],
        competencias: [
            'Kubernetes básico',
            'Arquitectura de microservicios',
            'Service mesh concepts',
            'Observabilidad',
            'Serverless computing'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Cloud Native y Kubernetes',
                semanas: 'Semana 1-3',
                descripcion: 'Principios cloud-native y orquestación con Kubernetes.',
                contenidos: [
                    '12-Factor Apps',
                    'Arquitectura cloud-native',
                    'Kubernetes: Pods, Deployments, Services',
                    'ConfigMaps y Secrets',
                    'Namespaces y contextos',
                    'kubectl y manifiestos YAML'
                ],
                actividades: [
                    'Setup de cluster local (minikube/kind)',
                    'Despliegue de aplicación en K8s',
                    'Configuración con ConfigMaps'
                ]
            },
            {
                numero: 2,
                titulo: 'Microservicios y Comunicación',
                semanas: 'Semana 4-5',
                descripcion: 'Diseño e implementación de microservicios.',
                contenidos: [
                    'Monolito vs microservicios',
                    'Patrones de descomposición',
                    'Comunicación síncrona: REST, gRPC',
                    'Comunicación asíncrona: mensajería',
                    'API Gateway patterns',
                    'Service discovery'
                ],
                actividades: [
                    'Diseño de sistema con microservicios',
                    'Implementación de API Gateway',
                    'Comunicación entre servicios'
                ]
            },
            {
                numero: 3,
                titulo: 'Observabilidad y Serverless',
                semanas: 'Semana 6-8',
                descripcion: 'Monitoreo de sistemas distribuidos y serverless.',
                contenidos: [
                    'Logging centralizado',
                    'Métricas con Prometheus',
                    'Tracing distribuido',
                    'AWS Lambda / Cloud Functions',
                    'Arquitecturas event-driven',
                    'Escalamiento y costos'
                ],
                actividades: [
                    'Implementación de observabilidad',
                    'Desarrollo de función serverless',
                    'Proyecto: Sistema cloud-native completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Helm', icon: 'fa-dharmachakra', iconType: 'fontawesome' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Kubernetes', ponderacion: 0, descripcion: 'Prácticas de orquestación' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Kubernetes fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Microservicios' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto cloud-native' }
        ],
        prerrequisitos: ['DevOps', 'Computación en la Nube'],
        conexiones: ['Cloud Native II', 'Arquitectura Software', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/' },
            { tipo: 'Curso', nombre: 'CNCF Landscape', url: 'https://landscape.cncf.io/' },
            { tipo: 'Tutorial', nombre: 'Kubernetes Learning Path', url: 'https://learn.microsoft.com/en-us/training/paths/intro-to-kubernetes-on-azure/' },
            { tipo: 'Video', nombre: 'Kubernetes Tutorial - TechWorld', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { tipo: 'Libro', nombre: '12-Factor App', url: 'https://12factor.net/' }
        ],
        color: 'blue',
        area: 'cloud'
    },

    // IRS5201 - Ingeniería de Requisitos
    'ingenieria-requisitos': {
        id: 'ingenieria-requisitos',
        codigo: 'IRS5201',
        nombre: 'Ingeniería de Requisitos',
        nombreCorto: 'Ing. Requisitos',
        bimestre: 5,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que desarrolla competencias en elicitación, análisis, especificación y validación de requisitos de software.',
        proposito: 'Capacitar al estudiante en las técnicas y herramientas para gestionar requisitos de software, desde la elicitación con stakeholders hasta la documentación y trazabilidad.',
        objetivos: [
            'Aplicar técnicas de elicitación de requisitos',
            'Clasificar y priorizar requisitos funcionales y no funcionales',
            'Documentar requisitos usando estándares de la industria',
            'Modelar requisitos con casos de uso y user stories',
            'Gestionar cambios y trazabilidad de requisitos',
            'Validar requisitos con stakeholders'
        ],
        competencias: [
            'Elicitación de requisitos',
            'Análisis y priorización',
            'Documentación SRS',
            'User Stories y casos de uso',
            'Gestión de cambios'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos y Elicitación',
                semanas: 'Semana 1-3',
                descripcion: 'Conceptos básicos y técnicas de obtención de requisitos.',
                contenidos: [
                    'Tipos de requisitos: funcionales, no funcionales',
                    'Stakeholders y su identificación',
                    'Técnicas: entrevistas, cuestionarios, observación',
                    'Workshops y brainstorming',
                    'Prototipado como técnica de elicitación',
                    'Documentación inicial de requisitos'
                ],
                actividades: [
                    'Identificación de stakeholders en caso',
                    'Práctica de técnicas de elicitación',
                    'Elaboración de prototipos'
                ]
            },
            {
                numero: 2,
                titulo: 'Análisis y Especificación',
                semanas: 'Semana 4-5',
                descripcion: 'Modelado y documentación de requisitos.',
                contenidos: [
                    'Casos de uso UML',
                    'User Stories y criterios de aceptación',
                    'Especificación de requisitos (SRS)',
                    'IEEE 830 / ISO 29148',
                    'Priorización: MoSCoW, Kano',
                    'Requisitos no funcionales: rendimiento, seguridad'
                ],
                actividades: [
                    'Diagramas de casos de uso',
                    'Redacción de User Stories',
                    'Documento SRS parcial'
                ]
            },
            {
                numero: 3,
                titulo: 'Validación y Gestión',
                semanas: 'Semana 6-8',
                descripcion: 'Validación de requisitos y gestión del cambio.',
                contenidos: [
                    'Técnicas de validación: revisiones, prototipos',
                    'Trazabilidad de requisitos',
                    'Gestión de cambios',
                    'Herramientas: Jira, Azure DevOps',
                    'Matrices de trazabilidad',
                    'Métricas de requisitos'
                ],
                actividades: [
                    'Validación con stakeholders simulados',
                    'Matriz de trazabilidad',
                    'Proyecto: SRS completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' },
            { nombre: 'Figma', icon: 'figma-plain', iconType: 'devicon' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-object-group', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Ejercicios de elicitación', ponderacion: 0, descripcion: 'Práctica de técnicas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Elicitación y análisis' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Especificación y modelado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto SRS completo' }
        ],
        prerrequisitos: [],
        conexiones: ['Ing. Software I', 'Ing. Software II', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Estándar', nombre: 'IEEE 830 / ISO 29148', url: 'https://standards.ieee.org/' },
            { tipo: 'Tutorial', nombre: 'User Story Mapping', url: 'https://www.jpattonassociates.com/user-story-mapping/' },
            { tipo: 'Herramienta', nombre: 'Jira Software', url: 'https://www.atlassian.com/software/jira' },
            { tipo: 'Video', nombre: 'Requirements Engineering', url: 'https://www.youtube.com/watch?v=VVpWbODPIQI' },
            { tipo: 'Libro', nombre: 'Software Requirements - Wiegers', url: 'https://www.processimpact.com/books.html' }
        ],
        color: 'purple',
        area: 'gestion'
    },

    // =============================================
    // BIMESTRE 06 - BACKEND I & ING. SOFTWARE I
    // =============================================

    // BKE6201 - Backend I
    'backend-i': {
        id: 'backend-i',
        codigo: 'BKE6201',
        nombre: 'Desarrollo Backend I',
        nombreCorto: 'Backend I',
        bimestre: 6,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el desarrollo de APIs REST con Spring Boot, incluyendo arquitectura de capas, persistencia con JPA/Hibernate y seguridad básica.',
        proposito: 'Capacitar al estudiante en el desarrollo de servicios backend robustos utilizando Spring Boot, aplicando patrones de arquitectura y buenas prácticas de la industria.',
        objetivos: [
            'Comprender la arquitectura de aplicaciones backend',
            'Desarrollar APIs REST con Spring Boot',
            'Implementar persistencia con Spring Data JPA',
            'Aplicar arquitectura de capas (Controller-Service-Repository)',
            'Implementar validación y manejo de excepciones',
            'Documentar APIs con OpenAPI/Swagger'
        ],
        competencias: [
            'Spring Boot fundamentals',
            'APIs REST',
            'Spring Data JPA',
            'Arquitectura de capas',
            'Documentación OpenAPI'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Spring Boot y REST',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a Spring Boot y desarrollo de APIs REST.',
                contenidos: [
                    'Spring Framework y Spring Boot',
                    'Inyección de dependencias (DI) e IoC',
                    'Creación de proyecto con Spring Initializr',
                    'Controladores REST: @RestController, @GetMapping, @PostMapping',
                    'Request/Response: @RequestBody, @PathVariable, @RequestParam',
                    'HTTP Status codes y ResponseEntity'
                ],
                actividades: [
                    'Proyecto Spring Boot inicial',
                    'CRUD REST básico',
                    'Testing de endpoints con Postman'
                ]
            },
            {
                numero: 2,
                titulo: 'Persistencia con Spring Data JPA',
                semanas: 'Semana 4-5',
                descripcion: 'Acceso a datos con JPA y arquitectura de capas.',
                contenidos: [
                    'JPA y Hibernate: entidades, @Entity, @Id',
                    'Relaciones: @OneToMany, @ManyToOne, @ManyToMany',
                    'Spring Data JPA: JpaRepository',
                    'Query Methods y @Query',
                    'Arquitectura Controller-Service-Repository',
                    'DTOs y mapeo con MapStruct'
                ],
                actividades: [
                    'Modelado de entidades JPA',
                    'Implementación de capa Service',
                    'Consultas personalizadas'
                ]
            },
            {
                numero: 3,
                titulo: 'Validación, Excepciones y Documentación',
                semanas: 'Semana 6-8',
                descripcion: 'Robustez de APIs y documentación profesional.',
                contenidos: [
                    'Bean Validation: @Valid, @NotNull, @Size',
                    'Manejo global de excepciones: @ControllerAdvice',
                    'Excepciones personalizadas',
                    'OpenAPI 3.0 y Swagger UI',
                    'Anotaciones de documentación',
                    'Versionamiento de APIs'
                ],
                actividades: [
                    'Validación completa de DTOs',
                    'Sistema de excepciones robusto',
                    'Proyecto: API REST documentada'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Spring Boot', icon: 'spring-plain', iconType: 'devicon' },
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Postman', icon: 'postman-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'Swagger', icon: 'swagger-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Spring Boot', ponderacion: 0, descripcion: 'Prácticas guiadas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'API REST básica' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Persistencia JPA' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'API completa documentada' }
        ],
        prerrequisitos: ['POO II', 'SQL Consultas'],
        conexiones: ['Backend II-III', 'Frontend I-II', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Spring Boot Docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
            { tipo: 'Tutorial', nombre: 'Baeldung Spring', url: 'https://www.baeldung.com/spring-boot' },
            { tipo: 'Herramienta', nombre: 'Spring Initializr', url: 'https://start.spring.io/' },
            { tipo: 'Video', nombre: 'Spring Boot Full Course - Amigoscode', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U' },
            { tipo: 'Curso', nombre: 'Spring & Hibernate - Udemy', url: 'https://www.udemy.com/course/spring-hibernate-tutorial/' }
        ],
        color: 'green',
        area: 'programacion'
    },

    // ISW6201 - Ingeniería de Software I
    'ingenieria-software-i': {
        id: 'ingenieria-software-i',
        codigo: 'ISW6201',
        nombre: 'Ingeniería de Software I',
        nombreCorto: 'Ing. Software I',
        bimestre: 6,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce metodologías ágiles, Scrum, y gestión de proyectos de software, incluyendo estimación, planificación y seguimiento.',
        proposito: 'Capacitar al estudiante en la aplicación de metodologías ágiles para la gestión efectiva de proyectos de desarrollo de software.',
        objetivos: [
            'Comprender los principios del Manifiesto Ágil',
            'Aplicar el framework Scrum en proyectos de software',
            'Gestionar el Product Backlog y Sprint Backlog',
            'Realizar estimación ágil con Planning Poker',
            'Facilitar ceremonias Scrum',
            'Utilizar herramientas de gestión ágil'
        ],
        competencias: [
            'Metodologías ágiles',
            'Framework Scrum',
            'Estimación ágil',
            'Gestión de backlog',
            'Herramientas ágiles'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Ágiles y Scrum',
                semanas: 'Semana 1-3',
                descripcion: 'Principios ágiles y framework Scrum.',
                contenidos: [
                    'Manifiesto Ágil y sus principios',
                    'Metodologías tradicionales vs ágiles',
                    'Framework Scrum: roles, eventos, artefactos',
                    'Product Owner, Scrum Master, Development Team',
                    'Sprint, Sprint Planning, Daily Scrum',
                    'Sprint Review, Sprint Retrospective'
                ],
                actividades: [
                    'Análisis de casos de éxito ágil',
                    'Simulación de Sprint Planning',
                    'Práctica de Daily Scrum'
                ]
            },
            {
                numero: 2,
                titulo: 'Gestión del Backlog y Estimación',
                semanas: 'Semana 4-5',
                descripcion: 'Product Backlog, User Stories y técnicas de estimación.',
                contenidos: [
                    'Product Backlog: creación y refinamiento',
                    'User Stories: INVEST, criterios de aceptación',
                    'Épicas, Features, Tasks',
                    'Técnicas de estimación: Planning Poker, T-shirt sizing',
                    'Story Points y velocidad del equipo',
                    'Definition of Done y Definition of Ready'
                ],
                actividades: [
                    'Creación de Product Backlog',
                    'Sesión de Planning Poker',
                    'Refinamiento de User Stories'
                ]
            },
            {
                numero: 3,
                titulo: 'Herramientas y Métricas Ágiles',
                semanas: 'Semana 6-8',
                descripcion: 'Herramientas de gestión y métricas de seguimiento.',
                contenidos: [
                    'Jira: configuración de proyecto Scrum',
                    'Tableros Kanban y Scrum boards',
                    'Burndown y Burnup charts',
                    'Velocity tracking',
                    'Métricas ágiles: Lead time, Cycle time',
                    'Retrospectivas efectivas'
                ],
                actividades: [
                    'Configuración de proyecto en Jira',
                    'Seguimiento de Sprint con métricas',
                    'Proyecto: Sprint completo simulado'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'Trello', icon: 'trello-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Simulaciones Scrum', ponderacion: 0, descripcion: 'Práctica de ceremonias' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos Scrum' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Gestión de Backlog' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto Sprint completo' }
        ],
        prerrequisitos: ['Ing. Requisitos'],
        conexiones: ['Ing. Software II', 'Arquitectura Software', 'Gestión de Proyectos'],
        recursos: [
            { tipo: 'Guía', nombre: 'Scrum Guide', url: 'https://scrumguides.org/' },
            { tipo: 'Certificación', nombre: 'Scrum.org', url: 'https://www.scrum.org/' },
            { tipo: 'Tutorial', nombre: 'Atlassian Agile', url: 'https://www.atlassian.com/agile' },
            { tipo: 'Video', nombre: 'Scrum in 10 Minutes', url: 'https://www.youtube.com/watch?v=XU0llRltyFM' },
            { tipo: 'Curso', nombre: 'Agile with Atlassian Jira', url: 'https://www.coursera.org/learn/agile-atlassian-jira' }
        ],
        color: 'purple',
        area: 'gestion'
    },

    // =============================================
    // BIMESTRE 07 - BACKEND II-III & ING. SOFTWARE II
    // =============================================

    // BKE7201 - Backend II-III
    'backend-ii-iii': {
        id: 'backend-ii-iii',
        codigo: 'BKE7201',
        nombre: 'Desarrollo Backend II-III',
        nombreCorto: 'Backend II-III',
        bimestre: 7,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura avanzada de backend que cubre seguridad con Spring Security, autenticación JWT, testing, y patrones avanzados como CQRS y Event Sourcing.',
        proposito: 'Desarrollar competencias avanzadas en backend, incluyendo seguridad empresarial, testing automatizado y patrones de arquitectura moderna.',
        objetivos: [
            'Implementar autenticación y autorización con Spring Security',
            'Aplicar JWT para APIs stateless',
            'Desarrollar testing unitario e integración',
            'Implementar patrones avanzados de backend',
            'Aplicar caching y optimización de rendimiento',
            'Integrar con servicios externos y mensajería'
        ],
        competencias: [
            'Spring Security y JWT',
            'Testing con JUnit y Mockito',
            'Caching con Redis',
            'Mensajería asíncrona',
            'Patrones avanzados'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Seguridad con Spring Security',
                semanas: 'Semana 1-3',
                descripcion: 'Autenticación y autorización empresarial.',
                contenidos: [
                    'Spring Security: arquitectura y filtros',
                    'Autenticación: form-based, HTTP Basic',
                    'JWT: estructura, generación, validación',
                    'Autorización: roles y permisos',
                    '@PreAuthorize y @Secured',
                    'OAuth2 y OpenID Connect conceptos'
                ],
                actividades: [
                    'Implementación de login con JWT',
                    'Sistema de roles y permisos',
                    'Protección de endpoints'
                ]
            },
            {
                numero: 2,
                titulo: 'Testing y Calidad de Código',
                semanas: 'Semana 4-5',
                descripcion: 'Testing automatizado y métricas de calidad.',
                contenidos: [
                    'JUnit 5: @Test, @BeforeEach, assertions',
                    'Mockito: @Mock, @InjectMocks, when/thenReturn',
                    'Testing de controllers con MockMvc',
                    'Testing de repositorios con @DataJpaTest',
                    'Cobertura de código con JaCoCo',
                    'SonarQube y análisis estático'
                ],
                actividades: [
                    'Suite de tests unitarios',
                    'Tests de integración',
                    'Análisis con SonarQube'
                ]
            },
            {
                numero: 3,
                titulo: 'Patrones Avanzados y Optimización',
                semanas: 'Semana 6-8',
                descripcion: 'Caching, mensajería y patrones de arquitectura.',
                contenidos: [
                    'Caching con Spring Cache y Redis',
                    'Mensajería con RabbitMQ/Kafka',
                    'Patrón Specification para queries dinámicos',
                    'Auditoría con Spring Data Envers',
                    'Scheduling con @Scheduled',
                    'WebSockets para tiempo real'
                ],
                actividades: [
                    'Implementación de cache Redis',
                    'Sistema de notificaciones async',
                    'Proyecto: API empresarial completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Spring Boot', icon: 'spring-plain', iconType: 'devicon' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'RabbitMQ', icon: 'rabbitmq-plain', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' },
            { nombre: 'Mockito', icon: 'fa-check-double', iconType: 'fontawesome' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de seguridad', ponderacion: 0, descripcion: 'Prácticas de Spring Security' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Seguridad y JWT' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Testing automatizado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'API empresarial' }
        ],
        prerrequisitos: ['Backend I'],
        conexiones: ['Arquitectura Software', 'Cloud Native', 'Frontend I-II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Spring Security', url: 'https://docs.spring.io/spring-security/reference/' },
            { tipo: 'Tutorial', nombre: 'JWT.io', url: 'https://jwt.io/' },
            { tipo: 'Curso', nombre: 'Testing Spring Boot', url: 'https://www.baeldung.com/spring-boot-testing' },
            { tipo: 'Video', nombre: 'Spring Security JWT - Amigoscode', url: 'https://www.youtube.com/watch?v=KxqlJblhzfI' },
            { tipo: 'Práctica', nombre: 'Mockito Tutorial', url: 'https://site.mockito.org/' }
        ],
        color: 'green',
        area: 'programacion'
    },

    // ISW7201 - Ingeniería de Software II
    'ingenieria-software-ii': {
        id: 'ingenieria-software-ii',
        codigo: 'ISW7201',
        nombre: 'Ingeniería de Software II',
        nombreCorto: 'Ing. Software II',
        bimestre: 7,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en calidad de software, testing avanzado, integración continua y mejora de procesos.',
        proposito: 'Desarrollar competencias en aseguramiento de calidad de software, automatización de pruebas y mejora continua de procesos de desarrollo.',
        objetivos: [
            'Aplicar técnicas avanzadas de testing de software',
            'Implementar estrategias de testing automatizado',
            'Configurar pipelines de calidad en CI/CD',
            'Aplicar métricas de calidad de software',
            'Gestionar defectos y mejora continua',
            'Implementar testing de rendimiento y seguridad'
        ],
        competencias: [
            'Testing avanzado',
            'Automatización de pruebas',
            'CI/CD para calidad',
            'Métricas de software',
            'Performance testing'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Estrategias de Testing',
                semanas: 'Semana 1-3',
                descripcion: 'Niveles de testing y diseño de casos de prueba.',
                contenidos: [
                    'Niveles de testing: unitario, integración, sistema, aceptación',
                    'Técnicas de diseño: caja negra, caja blanca',
                    'Partición de equivalencia y valores límite',
                    'Testing basado en riesgos',
                    'Test-Driven Development (TDD)',
                    'Behavior-Driven Development (BDD)'
                ],
                actividades: [
                    'Diseño de plan de pruebas',
                    'Práctica de TDD',
                    'Implementación de BDD con Cucumber'
                ]
            },
            {
                numero: 2,
                titulo: 'Automatización de Pruebas',
                semanas: 'Semana 4-5',
                descripcion: 'Frameworks de automatización y testing E2E.',
                contenidos: [
                    'Selenium WebDriver para testing E2E',
                    'Cypress para testing frontend',
                    'API testing con REST Assured',
                    'Page Object Model pattern',
                    'Data-driven testing',
                    'Reporting de resultados'
                ],
                actividades: [
                    'Suite de tests E2E con Selenium',
                    'Testing de API con REST Assured',
                    'Framework de automatización'
                ]
            },
            {
                numero: 3,
                titulo: 'Calidad y Mejora Continua',
                semanas: 'Semana 6-8',
                descripcion: 'Métricas, performance testing y procesos de calidad.',
                contenidos: [
                    'Métricas de calidad: defect density, code coverage',
                    'Performance testing con JMeter',
                    'Security testing básico',
                    'Gestión de defectos en Jira',
                    'Quality Gates en CI/CD',
                    'Retrospectivas de calidad'
                ],
                actividades: [
                    'Testing de carga con JMeter',
                    'Configuración de quality gates',
                    'Proyecto: Plan de calidad completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Selenium', icon: 'selenium-original', iconType: 'devicon' },
            { nombre: 'Cypress', icon: 'fa-vial', iconType: 'fontawesome' },
            { nombre: 'JMeter', icon: 'fa-tachometer-alt', iconType: 'fontawesome' },
            { nombre: 'Cucumber', icon: 'cucumber-plain', iconType: 'devicon' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' },
            { nombre: 'Postman', icon: 'postman-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs de testing', ponderacion: 0, descripcion: 'Práctica de automatización' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Estrategias de testing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Automatización E2E' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Plan de calidad' }
        ],
        prerrequisitos: ['Ing. Software I'],
        conexiones: ['Arquitectura Software', 'DevOps', 'Seguridad y Calidad'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Selenium Docs', url: 'https://www.selenium.dev/documentation/' },
            { tipo: 'Tutorial', nombre: 'Cypress Docs', url: 'https://docs.cypress.io/' },
            { tipo: 'Herramienta', nombre: 'JMeter', url: 'https://jmeter.apache.org/' },
            { tipo: 'Video', nombre: 'Playwright Full Course', url: 'https://www.youtube.com/watch?v=VELWdMWQN8c' },
            { tipo: 'Libro', nombre: 'Software Testing - ISTQB', url: 'https://www.istqb.org/' }
        ],
        color: 'purple',
        area: 'gestion'
    },

    // =============================================
    // BIMESTRE 08 - FRONTEND I-II & ARQUITECTURA
    // =============================================

    // FRE8201 - Frontend I-II
    'frontend-i-ii': {
        id: 'frontend-i-ii',
        codigo: 'FRE8201',
        nombre: 'Desarrollo Frontend I-II',
        nombreCorto: 'Frontend I-II',
        bimestre: 8,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura que cubre desarrollo frontend moderno con React, incluyendo componentes, estado, hooks, routing y consumo de APIs.',
        proposito: 'Capacitar al estudiante en el desarrollo de interfaces de usuario modernas y reactivas utilizando React y su ecosistema.',
        objetivos: [
            'Dominar los fundamentos de React y JSX',
            'Implementar componentes funcionales con hooks',
            'Gestionar estado global con Context API y Redux',
            'Implementar routing con React Router',
            'Consumir APIs REST desde frontend',
            'Aplicar testing de componentes'
        ],
        competencias: [
            'React fundamentals',
            'Hooks y estado',
            'React Router',
            'State management',
            'Testing frontend'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos React y Componentes',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a React, JSX y componentes.',
                contenidos: [
                    'React: virtual DOM, reconciliación',
                    'JSX: sintaxis y expresiones',
                    'Componentes funcionales',
                    'Props y children',
                    'Hooks básicos: useState, useEffect',
                    'Eventos y formularios controlados'
                ],
                actividades: [
                    'Setup con Vite + React',
                    'Componentes reutilizables',
                    'Formularios con validación'
                ]
            },
            {
                numero: 2,
                titulo: 'Estado Avanzado y Routing',
                semanas: 'Semana 4-5',
                descripcion: 'Gestión de estado y navegación SPA.',
                contenidos: [
                    'useContext y Context API',
                    'useReducer para estado complejo',
                    'Custom hooks',
                    'React Router: rutas, params, navigate',
                    'Rutas protegidas',
                    'Introducción a Redux Toolkit'
                ],
                actividades: [
                    'Context para autenticación',
                    'Sistema de navegación completo',
                    'Implementación de Redux'
                ]
            },
            {
                numero: 3,
                titulo: 'APIs, Testing y Producción',
                semanas: 'Semana 6-8',
                descripcion: 'Integración con backend y preparación para producción.',
                contenidos: [
                    'Fetch API y Axios',
                    'React Query / TanStack Query',
                    'Manejo de loading y errores',
                    'Testing con Vitest y React Testing Library',
                    'Build y optimización',
                    'Deploy a Vercel/Netlify'
                ],
                actividades: [
                    'Integración con API backend',
                    'Suite de tests de componentes',
                    'Proyecto: SPA completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Vite', icon: 'vitejs-plain', iconType: 'devicon' },
            { nombre: 'Tailwind', icon: 'tailwindcss-original', iconType: 'devicon' },
            { nombre: 'Redux', icon: 'redux-original', iconType: 'devicon' },
            { nombre: 'Axios', icon: 'axios-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs React', ponderacion: 0, descripcion: 'Prácticas de componentes' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Componentes y hooks' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Estado y routing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto SPA' }
        ],
        prerrequisitos: ['POO II'],
        conexiones: ['Frontend III', 'Mobile I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'React Docs', url: 'https://react.dev/' },
            { tipo: 'Tutorial', nombre: 'React Tutorial', url: 'https://react.dev/learn' },
            { tipo: 'Curso', nombre: 'Frontend Masters React', url: 'https://frontendmasters.com/learn/react/' },
            { tipo: 'Video', nombre: 'React Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
            { tipo: 'Práctica', nombre: 'React Challenges', url: 'https://www.frontendmentor.io/' }
        ],
        color: 'cyan',
        area: 'programacion'
    },

    // ARQ8201 - Arquitectura de Software
    'arquitectura-software': {
        id: 'arquitectura-software',
        codigo: 'ARQ8201',
        nombre: 'Arquitectura de Software',
        nombreCorto: 'Arquitectura Software',
        bimestre: 8,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce patrones de arquitectura de software, diseño de sistemas distribuidos y documentación arquitectónica.',
        proposito: 'Desarrollar la capacidad de diseñar y documentar arquitecturas de software escalables, mantenibles y alineadas con los requerimientos del negocio.',
        objetivos: [
            'Comprender los estilos y patrones arquitectónicos',
            'Diseñar arquitecturas de microservicios',
            'Aplicar patrones de diseño de sistemas',
            'Documentar arquitectura con ADRs y C4',
            'Evaluar trade-offs arquitectónicos',
            'Implementar patrones de resiliencia'
        ],
        competencias: [
            'Estilos arquitectónicos',
            'Diseño de microservicios',
            'Patrones de resiliencia',
            'Documentación C4',
            'Decisiones arquitectónicas'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Arquitectura',
                semanas: 'Semana 1-3',
                descripcion: 'Estilos arquitectónicos y principios de diseño.',
                contenidos: [
                    'Rol del arquitecto de software',
                    'Atributos de calidad: escalabilidad, mantenibilidad',
                    'Estilos: monolito, capas, microservicios, serverless',
                    'Clean Architecture y Hexagonal',
                    'Domain-Driven Design (DDD) conceptos',
                    'Bounded Contexts y agregados'
                ],
                actividades: [
                    'Análisis de arquitecturas existentes',
                    'Diseño con Clean Architecture',
                    'Identificación de bounded contexts'
                ]
            },
            {
                numero: 2,
                titulo: 'Patrones de Sistemas Distribuidos',
                semanas: 'Semana 4-5',
                descripcion: 'Patrones para sistemas escalables y resilientes.',
                contenidos: [
                    'API Gateway pattern',
                    'Service Mesh conceptos',
                    'Circuit Breaker pattern',
                    'Retry y Timeout patterns',
                    'Event-Driven Architecture',
                    'CQRS y Event Sourcing'
                ],
                actividades: [
                    'Implementación de Circuit Breaker',
                    'Diseño event-driven',
                    'Análisis de trade-offs'
                ]
            },
            {
                numero: 3,
                titulo: 'Documentación y Decisiones',
                semanas: 'Semana 6-8',
                descripcion: 'Documentación arquitectónica y ADRs.',
                contenidos: [
                    'Modelo C4: Context, Container, Component, Code',
                    'Architecture Decision Records (ADRs)',
                    'Diagramas de secuencia y colaboración',
                    'Fitness functions y métricas',
                    'Evolutionary architecture',
                    'Tech Radar y estrategia tecnológica'
                ],
                actividades: [
                    'Documentación C4 de sistema',
                    'Redacción de ADRs',
                    'Proyecto: Arquitectura completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Mermaid', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'PlantUML', icon: 'fa-sitemap', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-draw-polygon', iconType: 'fontawesome' },
            { nombre: 'Structurizr', icon: 'fa-cubes', iconType: 'fontawesome' },
            { nombre: 'Lucidchart', icon: 'fa-object-ungroup', iconType: 'fontawesome' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Análisis de arquitecturas', ponderacion: 0, descripcion: 'Estudio de casos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Estilos y patrones' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Sistemas distribuidos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Documentación arquitectónica' }
        ],
        prerrequisitos: ['Backend I', 'Cloud Native'],
        conexiones: ['Cloud Native II', 'Seguridad y Calidad', 'Fullstack I'],
        recursos: [
            { tipo: 'Libro', nombre: 'Fundamentals of Software Architecture', url: 'https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/' },
            { tipo: 'Modelo', nombre: 'C4 Model', url: 'https://c4model.com/' },
            { tipo: 'Tutorial', nombre: 'ADR GitHub', url: 'https://adr.github.io/' },
            { tipo: 'Video', nombre: 'Software Architecture - Mark Richards', url: 'https://www.youtube.com/watch?v=DngAZyWMGR0' },
            { tipo: 'Curso', nombre: 'Software Architecture & Design', url: 'https://www.udacity.com/course/software-architecture-design--ud821' }
        ],
        color: 'indigo',
        area: 'arquitectura'
    },

    // =============================================
    // BIMESTRE 09 - MOBILE I & FRONTEND III
    // =============================================

    // MOB9201 - Mobile I
    'mobile-i': {
        id: 'mobile-i',
        codigo: 'MOB9201',
        nombre: 'Desarrollo Mobile I',
        nombreCorto: 'Mobile I',
        bimestre: 9,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce el desarrollo de aplicaciones móviles multiplataforma con React Native o Flutter.',
        proposito: 'Capacitar al estudiante en el desarrollo de aplicaciones móviles nativas multiplataforma, aplicando conocimientos previos de frontend.',
        objetivos: [
            'Comprender el ecosistema de desarrollo móvil',
            'Desarrollar aplicaciones con React Native',
            'Implementar navegación y UI nativa',
            'Gestionar estado en aplicaciones móviles',
            'Acceder a APIs del dispositivo',
            'Publicar aplicaciones en stores'
        ],
        competencias: [
            'React Native fundamentals',
            'Navegación móvil',
            'APIs del dispositivo',
            'Storage local',
            'Build y deploy'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos React Native',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a React Native y componentes nativos.',
                contenidos: [
                    'React Native vs nativo vs híbrido',
                    'Setup con Expo',
                    'Componentes: View, Text, Image, ScrollView',
                    'Estilos con StyleSheet',
                    'Flexbox para layouts',
                    'Manejo de listas con FlatList'
                ],
                actividades: [
                    'Primera app con Expo',
                    'Layouts responsivos',
                    'Listas optimizadas'
                ]
            },
            {
                numero: 2,
                titulo: 'Navegación y Estado',
                semanas: 'Semana 4-5',
                descripcion: 'React Navigation y gestión de estado.',
                contenidos: [
                    'React Navigation: Stack, Tab, Drawer',
                    'Paso de parámetros entre pantallas',
                    'Deep linking',
                    'AsyncStorage para persistencia',
                    'Context API en mobile',
                    'Redux/Zustand para estado global'
                ],
                actividades: [
                    'Navegación completa',
                    'Autenticación con persistencia',
                    'Estado global de la app'
                ]
            },
            {
                numero: 3,
                titulo: 'APIs Nativas y Publicación',
                semanas: 'Semana 6-8',
                descripcion: 'Acceso a hardware y proceso de publicación.',
                contenidos: [
                    'Cámara y galería',
                    'Geolocalización',
                    'Notificaciones push',
                    'Expo EAS Build',
                    'Configuración para stores',
                    'App Store y Play Store'
                ],
                actividades: [
                    'App con cámara y ubicación',
                    'Build para Android/iOS',
                    'Proyecto: App móvil completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React Native', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'Expo', icon: 'fa-mobile-alt', iconType: 'fontawesome' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Android Studio', icon: 'android-plain', iconType: 'devicon' },
            { nombre: 'Xcode', icon: 'xcode-plain', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Mobile', ponderacion: 0, descripcion: 'Prácticas de componentes' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos RN' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Navegación y estado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App móvil completa' }
        ],
        prerrequisitos: ['Frontend I-II'],
        conexiones: ['Mobile II', 'App Móviles'],
        recursos: [
            { tipo: 'Documentación', nombre: 'React Native Docs', url: 'https://reactnative.dev/' },
            { tipo: 'Tutorial', nombre: 'Expo Docs', url: 'https://docs.expo.dev/' },
            { tipo: 'Curso', nombre: 'React Native Course', url: 'https://www.udemy.com/course/react-native-the-practical-guide/' },
            { tipo: 'Video', nombre: 'React Native Full Course - Mosh', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc' },
            { tipo: 'Práctica', nombre: 'Expo Snack', url: 'https://snack.expo.dev/' }
        ],
        color: 'blue',
        area: 'mobile'
    },

    // FRE9201 - Frontend III
    'frontend-iii': {
        id: 'frontend-iii',
        codigo: 'FRE9201',
        nombre: 'Desarrollo Frontend III',
        nombreCorto: 'Frontend III',
        bimestre: 9,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de frontend que cubre Next.js, SSR/SSG, optimización de rendimiento y accesibilidad.',
        proposito: 'Desarrollar competencias avanzadas en frontend moderno, incluyendo frameworks full-stack, optimización y mejores prácticas de la industria.',
        objetivos: [
            'Dominar Next.js y sus patrones de renderizado',
            'Implementar SSR, SSG e ISR',
            'Optimizar rendimiento con Core Web Vitals',
            'Aplicar accesibilidad (a11y)',
            'Implementar internacionalización (i18n)',
            'Desplegar aplicaciones Next.js'
        ],
        competencias: [
            'Next.js App Router',
            'SSR/SSG/ISR',
            'Performance optimization',
            'Accesibilidad web',
            'Internacionalización'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Next.js y Renderizado',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de Next.js y estrategias de renderizado.',
                contenidos: [
                    'Next.js App Router',
                    'Server Components vs Client Components',
                    'SSR: Server-Side Rendering',
                    'SSG: Static Site Generation',
                    'ISR: Incremental Static Regeneration',
                    'Layouts y templates'
                ],
                actividades: [
                    'Proyecto Next.js con App Router',
                    'Implementación de SSR y SSG',
                    'Sistema de layouts'
                ]
            },
            {
                numero: 2,
                titulo: 'Data Fetching y APIs',
                semanas: 'Semana 4-5',
                descripcion: 'Fetching de datos y API routes.',
                contenidos: [
                    'Server Actions',
                    'Route Handlers (API Routes)',
                    'Caching y revalidación',
                    'Streaming y Suspense',
                    'Loading states y Error boundaries',
                    'Parallel y Sequential data fetching'
                ],
                actividades: [
                    'API Routes para backend',
                    'Server Actions para formularios',
                    'Optimistic updates'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización y Deploy',
                semanas: 'Semana 6-8',
                descripcion: 'Performance, accesibilidad y despliegue.',
                contenidos: [
                    'Core Web Vitals: LCP, FID, CLS',
                    'Image optimization con next/image',
                    'Font optimization',
                    'Accesibilidad: ARIA, semantic HTML',
                    'Testing con Playwright',
                    'Deploy en Vercel'
                ],
                actividades: [
                    'Auditoría de performance',
                    'Implementación de a11y',
                    'Proyecto: App full-stack Next.js'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Next.js', icon: 'nextjs-original', iconType: 'devicon' },
            { nombre: 'React', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Next.js', ponderacion: 0, descripcion: 'Prácticas de renderizado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Next.js fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Data fetching' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App full-stack' }
        ],
        prerrequisitos: ['Frontend I-II'],
        conexiones: ['Fullstack I', 'Arquitectura Software'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Next.js Docs', url: 'https://nextjs.org/docs' },
            { tipo: 'Tutorial', nombre: 'Next.js Learn', url: 'https://nextjs.org/learn' },
            { tipo: 'Curso', nombre: 'Vercel Templates', url: 'https://vercel.com/templates/next.js' },
            { tipo: 'Video', nombre: 'Next.js 14 Full Course - Codevolution', url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA' },
            { tipo: 'Práctica', nombre: 'web.dev Performance', url: 'https://web.dev/performance/' }
        ],
        color: 'cyan',
        area: 'programacion'
    },

    // =============================================
    // BIMESTRE 10 - MOBILE II & TALLER DE TÍTULO
    // =============================================

    // MOB10201 - Mobile II
    'mobile-ii': {
        id: 'mobile-ii',
        codigo: 'MOB10201',
        nombre: 'Desarrollo Mobile II',
        nombreCorto: 'Mobile II',
        bimestre: 10,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de desarrollo móvil que cubre patrones de arquitectura, testing, CI/CD y optimización de aplicaciones.',
        proposito: 'Desarrollar competencias avanzadas en desarrollo móvil, incluyendo arquitectura escalable, testing automatizado y optimización de rendimiento.',
        objetivos: [
            'Aplicar patrones de arquitectura en mobile',
            'Implementar testing automatizado de apps',
            'Configurar CI/CD para aplicaciones móviles',
            'Optimizar rendimiento y experiencia de usuario',
            'Implementar offline-first y sincronización',
            'Monetización y analytics'
        ],
        competencias: [
            'Arquitectura mobile',
            'Testing E2E mobile',
            'CI/CD mobile',
            'Optimización de performance',
            'Analytics y monetización'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Arquitectura y Patrones',
                semanas: 'Semana 1-3',
                descripcion: 'Patrones de arquitectura para apps escalables.',
                contenidos: [
                    'Clean Architecture en mobile',
                    'MVVM pattern',
                    'Repository pattern',
                    'Dependency injection',
                    'Offline-first con sincronización',
                    'SQLite y Realm para persistencia'
                ],
                actividades: [
                    'Refactorización a Clean Architecture',
                    'Implementación de offline mode',
                    'Sincronización con servidor'
                ]
            },
            {
                numero: 2,
                titulo: 'Testing y CI/CD',
                semanas: 'Semana 4-5',
                descripcion: 'Testing automatizado y pipelines para mobile.',
                contenidos: [
                    'Unit testing con Jest',
                    'Integration testing',
                    'E2E testing con Detox',
                    'CI/CD con EAS Build',
                    'GitHub Actions para mobile',
                    'Distribución beta: TestFlight, Internal Testing'
                ],
                actividades: [
                    'Suite de tests completa',
                    'Pipeline CI/CD',
                    'Distribución beta automatizada'
                ]
            },
            {
                numero: 3,
                titulo: 'Producción y Monetización',
                semanas: 'Semana 6-8',
                descripcion: 'Preparación para producción y estrategias de negocio.',
                contenidos: [
                    'Performance profiling',
                    'Memory leaks y optimización',
                    'Firebase Analytics',
                    'Crash reporting con Sentry',
                    'In-app purchases',
                    'ASO (App Store Optimization)'
                ],
                actividades: [
                    'Optimización de performance',
                    'Integración de analytics',
                    'Proyecto: App lista para producción'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'React Native', icon: 'react-original', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' },
            { nombre: 'Jest', icon: 'jest-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Sentry', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs avanzados', ponderacion: 0, descripcion: 'Prácticas de arquitectura' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Arquitectura mobile' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Testing y CI/CD' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App producción' }
        ],
        prerrequisitos: ['Mobile I'],
        conexiones: ['App Móviles', 'Cloud Native II'],
        recursos: [
            { tipo: 'Tutorial', nombre: 'React Native Performance', url: 'https://reactnative.dev/docs/performance' },
            { tipo: 'Herramienta', nombre: 'Detox', url: 'https://wix.github.io/Detox/' },
            { tipo: 'Servicio', nombre: 'Firebase', url: 'https://firebase.google.com/' },
            { tipo: 'Video', nombre: 'React Native Testing', url: 'https://www.youtube.com/watch?v=aSwCB9Vbv8k' },
            { tipo: 'Guía', nombre: 'EAS Build Docs', url: 'https://docs.expo.dev/build/introduction/' }
        ],
        color: 'blue',
        area: 'mobile'
    },

    // TTL10201 - Taller de Título
    'taller-titulo': {
        id: 'taller-titulo',
        codigo: 'TTL10201',
        nombre: 'Taller de Título',
        nombreCorto: 'Taller de Titulo',
        bimestre: 10,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 8,
        descripcion: 'Asignatura integradora donde los estudiantes desarrollan un proyecto de software completo, aplicando todos los conocimientos adquiridos durante la carrera.',
        proposito: 'Demostrar las competencias profesionales del estudiante mediante el desarrollo de un proyecto de software que resuelva una problemática real, siguiendo metodologías profesionales.',
        objetivos: [
            'Desarrollar un proyecto de software integral',
            'Aplicar metodologías ágiles en proyecto real',
            'Documentar técnicamente un proyecto profesional',
            'Presentar y defender el proyecto ante tribunal',
            'Trabajar en equipo multidisciplinario',
            'Gestionar un proyecto de principio a fin'
        ],
        competencias: [
            'Desarrollo full-stack',
            'Gestión de proyectos',
            'Documentación técnica',
            'Presentación profesional',
            'Trabajo en equipo'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Definición y Planificación',
                semanas: 'Semana 1-3',
                descripcion: 'Definición del proyecto y planificación inicial.',
                contenidos: [
                    'Selección y validación de idea',
                    'Análisis de factibilidad',
                    'Especificación de requisitos',
                    'Diseño de arquitectura',
                    'Planificación de sprints',
                    'Configuración del entorno'
                ],
                actividades: [
                    'Propuesta de proyecto',
                    'Documento de requisitos',
                    'Diseño arquitectónico',
                    'Product Backlog inicial'
                ]
            },
            {
                numero: 2,
                titulo: 'Desarrollo e Iteraciones',
                semanas: 'Semana 4-5',
                descripcion: 'Desarrollo iterativo del proyecto.',
                contenidos: [
                    'Sprint 1: MVP funcional',
                    'Sprint 2: Features principales',
                    'Integración continua',
                    'Code reviews',
                    'Testing automatizado',
                    'Documentación continua'
                ],
                actividades: [
                    'Desarrollo de features',
                    'Daily standups',
                    'Sprint reviews',
                    'Retrospectivas'
                ]
            },
            {
                numero: 3,
                titulo: 'Cierre y Defensa',
                semanas: 'Semana 6-8',
                descripcion: 'Finalización del proyecto y presentación.',
                contenidos: [
                    'Sprint final: pulido y QA',
                    'Documentación final',
                    'Manual de usuario',
                    'Video demo',
                    'Preparación de defensa',
                    'Presentación ante tribunal'
                ],
                actividades: [
                    'Testing final y correcciones',
                    'Documentación completa',
                    'Ensayo de presentación',
                    'Defensa de proyecto'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Stack completo', icon: 'fa-layer-group', iconType: 'fontawesome' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' },
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Sumativa', nombre: 'Propuesta', ponderacion: 15, descripcion: 'Documento de propuesta' },
            { tipo: 'Sumativa', nombre: 'Avance 1', ponderacion: 20, descripcion: 'MVP funcional' },
            { tipo: 'Sumativa', nombre: 'Avance 2', ponderacion: 20, descripcion: 'Features completas' },
            { tipo: 'Sumativa', nombre: 'Producto final', ponderacion: 25, descripcion: 'Software terminado' },
            { tipo: 'Sumativa', nombre: 'Defensa', ponderacion: 20, descripcion: 'Presentación ante tribunal' }
        ],
        prerrequisitos: ['Backend II-III', 'Frontend I-II', 'Ing. Software II'],
        conexiones: ['Título Analista Programador'],
        recursos: [
            { tipo: 'Guía', nombre: 'Writing README Files', url: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes' },
            { tipo: 'Template', nombre: 'Awesome README Templates', url: 'https://github.com/matiassingers/awesome-readme' },
            { tipo: 'Video', nombre: 'How to Present Software Projects', url: 'https://www.youtube.com/watch?v=3rFMYMJd1Wc' },
            { tipo: 'Guía', nombre: 'Software Documentation Best Practices', url: 'https://www.writethedocs.org/' },
            { tipo: 'Herramienta', nombre: 'Canva para presentaciones', url: 'https://www.canva.com/' }
        ],
        color: 'emerald',
        area: 'gestion'
    },

    // =============================================
    // BIMESTRE 11 - FULLSTACK I & BD APLICADA
    // =============================================

    // FST11201 - Desarrollo Fullstack I
    'fullstack-i': {
        id: 'fullstack-i',
        codigo: 'FST11201',
        nombre: 'Desarrollo Fullstack I',
        nombreCorto: 'Desarrollo Fullstack I',
        bimestre: 11,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura que integra desarrollo frontend y backend, cubriendo arquitecturas modernas, APIs RESTful avanzadas y patrones de integración fullstack.',
        proposito: 'Desarrollar competencias integrales en desarrollo fullstack, capacitando al estudiante para construir aplicaciones web completas desde el frontend hasta el backend.',
        objetivos: [
            'Integrar frontend y backend en aplicaciones completas',
            'Implementar autenticación y autorización end-to-end',
            'Diseñar arquitecturas fullstack escalables',
            'Aplicar patrones de comunicación cliente-servidor',
            'Gestionar estado compartido entre capas',
            'Desplegar aplicaciones fullstack en producción'
        ],
        competencias: [
            'Arquitectura fullstack',
            'Autenticación JWT/OAuth',
            'APIs RESTful avanzadas',
            'State management',
            'Deployment integrado'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Arquitectura Fullstack',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de integración frontend-backend.',
                contenidos: [
                    'Arquitectura cliente-servidor moderna',
                    'Monorepos con Turborepo/Nx',
                    'Shared types entre front y back',
                    'Environment configuration',
                    'CORS y seguridad cross-origin',
                    'API versioning strategies'
                ],
                actividades: [
                    'Setup de monorepo fullstack',
                    'Configuración de tipos compartidos',
                    'Implementación de CORS seguro'
                ]
            },
            {
                numero: 2,
                titulo: 'Autenticación End-to-End',
                semanas: 'Semana 4-5',
                descripcion: 'Implementación de autenticación completa.',
                contenidos: [
                    'JWT tokens: access y refresh',
                    'OAuth 2.0 y OpenID Connect',
                    'Social login: Google, GitHub',
                    'Session management seguro',
                    'Protected routes frontend',
                    'Guards y middleware backend'
                ],
                actividades: [
                    'Sistema de login completo',
                    'Integración OAuth con Google',
                    'Refresh token rotation'
                ]
            },
            {
                numero: 3,
                titulo: 'Integración y Deployment',
                semanas: 'Semana 6-8',
                descripcion: 'Patrones avanzados y despliegue.',
                contenidos: [
                    'Real-time con WebSockets',
                    'Server-Sent Events (SSE)',
                    'Optimistic updates',
                    'Error handling unificado',
                    'Logging y monitoring',
                    'Deploy: Vercel + Railway/Render'
                ],
                actividades: [
                    'Chat real-time',
                    'Sistema de notificaciones',
                    'Proyecto: App fullstack completa'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Next.js', icon: 'nextjs-original', iconType: 'devicon' },
            { nombre: 'NestJS', icon: 'nestjs-original', iconType: 'devicon' },
            { nombre: 'TypeScript', icon: 'typescript-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Fullstack', ponderacion: 0, descripcion: 'Integraciones prácticas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Arquitectura fullstack' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Autenticación E2E' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto fullstack' }
        ],
        prerrequisitos: ['Frontend III', 'Backend II-III'],
        conexiones: ['Fullstack II', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Next.js Docs', url: 'https://nextjs.org/docs' },
            { tipo: 'Documentación', nombre: 'NestJS Docs', url: 'https://docs.nestjs.com/' },
            { tipo: 'Tutorial', nombre: 'Fullstack Guide', url: 'https://www.freecodecamp.org/news/full-stack-development/' },
            { tipo: 'Video', nombre: 'Next.js 14 Full Course - Codevolution', url: 'https://www.youtube.com/watch?v=wm5gMKuwSYk' },
            { tipo: 'Video', nombre: 'NestJS Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=wqhNoDE6pb4' }
        ],
        color: 'teal',
        area: 'programacion'
    },

    // BDA11201 - BD Aplicada
    'bd-aplicada': {
        id: 'bd-aplicada',
        codigo: 'BDA11201',
        nombre: 'Bases de Datos Aplicada',
        nombreCorto: 'BD Aplicada',
        bimestre: 11,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en bases de datos NoSQL, data modeling avanzado, optimización de queries y gestión de datos a escala.',
        proposito: 'Desarrollar competencias avanzadas en diseño y gestión de bases de datos, incluyendo NoSQL, optimización y arquitecturas de datos modernas.',
        objetivos: [
            'Diseñar schemas NoSQL eficientes',
            'Implementar bases de datos documentales y key-value',
            'Optimizar queries y performance',
            'Aplicar patrones de data modeling',
            'Gestionar migraciones y versioning',
            'Implementar estrategias de caching'
        ],
        competencias: [
            'MongoDB y bases documentales',
            'Redis y caching',
            'Data modeling avanzado',
            'Query optimization',
            'Database migrations'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Bases de Datos NoSQL',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de bases de datos NoSQL.',
                contenidos: [
                    'NoSQL vs SQL: casos de uso',
                    'MongoDB: documentos, colecciones',
                    'Schema design patterns',
                    'Embedded vs Referenced documents',
                    'Indexes en MongoDB',
                    'Aggregation pipeline'
                ],
                actividades: [
                    'Setup MongoDB Atlas',
                    'Modelado de datos NoSQL',
                    'Queries y aggregations'
                ]
            },
            {
                numero: 2,
                titulo: 'Caching y Key-Value',
                semanas: 'Semana 4-5',
                descripcion: 'Redis y estrategias de caching.',
                contenidos: [
                    'Redis: strings, hashes, lists, sets',
                    'Cache-aside pattern',
                    'Write-through y write-behind',
                    'TTL y eviction policies',
                    'Pub/Sub con Redis',
                    'Session storage'
                ],
                actividades: [
                    'Implementación de cache layer',
                    'Session management con Redis',
                    'Real-time features'
                ]
            },
            {
                numero: 3,
                titulo: 'Optimización y Escalabilidad',
                semanas: 'Semana 6-8',
                descripcion: 'Performance y arquitecturas de datos.',
                contenidos: [
                    'Query optimization techniques',
                    'Explain plans y profiling',
                    'Sharding y replication',
                    'Database migrations con herramientas',
                    'Backup y disaster recovery',
                    'Multi-database architectures'
                ],
                actividades: [
                    'Optimización de queries lentas',
                    'Setup de replicación',
                    'Proyecto: Sistema con múltiples DBs'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'MongoDB', icon: 'mongodb-plain', iconType: 'devicon' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Prisma', icon: 'prisma-original', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'dbeaver-plain', iconType: 'devicon' },
            { nombre: 'Elasticsearch', icon: 'elasticsearch-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs NoSQL', ponderacion: 0, descripcion: 'Prácticas de modelado' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'MongoDB y NoSQL' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Redis y caching' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto multi-DB' }
        ],
        prerrequisitos: ['SQL Programación'],
        conexiones: ['Fullstack I', 'Cloud Computing'],
        recursos: [
            { tipo: 'Documentación', nombre: 'MongoDB Docs', url: 'https://www.mongodb.com/docs/' },
            { tipo: 'Documentación', nombre: 'Redis Docs', url: 'https://redis.io/docs/' },
            { tipo: 'Curso', nombre: 'MongoDB University', url: 'https://university.mongodb.com/' },
            { tipo: 'Video', nombre: 'MongoDB Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
            { tipo: 'Tutorial', nombre: 'Redis Tutorial - TutorialsPoint', url: 'https://www.tutorialspoint.com/redis/index.htm' }
        ],
        color: 'amber',
        area: 'datos'
    },

    // =============================================
    // BIMESTRE 12 - FULLSTACK II & CLOUD COMPUTING
    // =============================================

    // FST12201 - Desarrollo Fullstack II
    'fullstack-ii': {
        id: 'fullstack-ii',
        codigo: 'FST12201',
        nombre: 'Desarrollo Fullstack II',
        nombreCorto: 'Desarrollo Fullstack II',
        bimestre: 12,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura avanzada de desarrollo fullstack que cubre microservicios, event-driven architecture, testing E2E y observabilidad.',
        proposito: 'Profundizar en arquitecturas fullstack avanzadas, preparando al estudiante para desarrollar sistemas distribuidos y aplicaciones enterprise.',
        objetivos: [
            'Diseñar arquitecturas de microservicios',
            'Implementar comunicación asíncrona entre servicios',
            'Aplicar testing E2E en fullstack',
            'Configurar observabilidad y monitoring',
            'Implementar feature flags y A/B testing',
            'Gestionar configuración distribuida'
        ],
        competencias: [
            'Microservicios architecture',
            'Event-driven systems',
            'E2E testing',
            'Observability',
            'Feature management'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Microservicios Fullstack',
                semanas: 'Semana 1-3',
                descripcion: 'Arquitectura de microservicios para fullstack.',
                contenidos: [
                    'Descomposición de monolito',
                    'API Gateway patterns',
                    'Service discovery',
                    'gRPC vs REST',
                    'Inter-service communication',
                    'Distributed tracing'
                ],
                actividades: [
                    'Diseño de microservicios',
                    'Implementación de API Gateway',
                    'Service mesh básico'
                ]
            },
            {
                numero: 2,
                titulo: 'Event-Driven Architecture',
                semanas: 'Semana 4-5',
                descripcion: 'Sistemas basados en eventos.',
                contenidos: [
                    'Message queues: RabbitMQ, SQS',
                    'Event streaming: Kafka basics',
                    'Saga pattern',
                    'Event sourcing introduction',
                    'CQRS patterns',
                    'Eventual consistency'
                ],
                actividades: [
                    'Setup de message queue',
                    'Implementación de Saga',
                    'Sistema event-driven'
                ]
            },
            {
                numero: 3,
                titulo: 'Testing y Observabilidad',
                semanas: 'Semana 6-8',
                descripcion: 'Testing E2E y monitoring.',
                contenidos: [
                    'E2E testing con Playwright',
                    'Contract testing',
                    'Logging centralizado (ELK)',
                    'Metrics con Prometheus',
                    'Dashboards con Grafana',
                    'Alerting y on-call'
                ],
                actividades: [
                    'Suite de tests E2E',
                    'Setup de observability stack',
                    'Proyecto: Sistema distribuido'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'RabbitMQ', icon: 'rabbitmq-original', iconType: 'devicon' },
            { nombre: 'Playwright', icon: 'playwright-plain', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Microservicios', ponderacion: 0, descripcion: 'Prácticas distribuidas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Microservicios' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Event-driven' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Sistema completo' }
        ],
        prerrequisitos: ['Fullstack I'],
        conexiones: ['Fullstack III', 'Cloud Computing'],
        recursos: [
            { tipo: 'Libro', nombre: 'Building Microservices', url: 'https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/' },
            { tipo: 'Documentación', nombre: 'RabbitMQ Tutorials', url: 'https://www.rabbitmq.com/tutorials' },
            { tipo: 'Tutorial', nombre: 'Playwright Docs', url: 'https://playwright.dev/docs/intro' },
            { tipo: 'Video', nombre: 'Microservices Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Cy9fAvsXGZA' },
            { tipo: 'Tutorial', nombre: 'Prometheus + Grafana Monitoring', url: 'https://prometheus.io/docs/tutorials/getting_started/' }
        ],
        color: 'teal',
        area: 'programacion'
    },

    // CLC12201 - Cloud Computing
    'cloud-computing': {
        id: 'cloud-computing',
        codigo: 'CLC12201',
        nombre: 'Cloud Computing',
        nombreCorto: 'Cloud Computing',
        bimestre: 12,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que profundiza en servicios cloud, IaC (Infrastructure as Code), serverless y arquitecturas cloud-native.',
        proposito: 'Desarrollar competencias avanzadas en cloud computing, preparando al estudiante para diseñar e implementar soluciones escalables en la nube.',
        objetivos: [
            'Diseñar arquitecturas cloud escalables',
            'Implementar Infrastructure as Code',
            'Desarrollar aplicaciones serverless',
            'Configurar servicios managed de cloud',
            'Aplicar cost optimization',
            'Implementar disaster recovery'
        ],
        competencias: [
            'AWS/Azure/GCP services',
            'Terraform y IaC',
            'Serverless architecture',
            'Cloud security',
            'Cost management'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Servicios Cloud Core',
                semanas: 'Semana 1-3',
                descripcion: 'Servicios fundamentales de cloud.',
                contenidos: [
                    'Compute: EC2, Lambda, ECS',
                    'Storage: S3, EBS, EFS',
                    'Networking: VPC, subnets, security groups',
                    'Database: RDS, DynamoDB',
                    'IAM y security',
                    'CloudWatch monitoring'
                ],
                actividades: [
                    'Arquitectura VPC completa',
                    'Setup de servicios managed',
                    'Configuración de IAM'
                ]
            },
            {
                numero: 2,
                titulo: 'Infrastructure as Code',
                semanas: 'Semana 4-5',
                descripcion: 'Automatización de infraestructura.',
                contenidos: [
                    'Terraform fundamentals',
                    'Modules y workspaces',
                    'State management',
                    'AWS CDK introduction',
                    'GitOps con infraestructura',
                    'Drift detection'
                ],
                actividades: [
                    'Infraestructura con Terraform',
                    'Módulos reutilizables',
                    'Pipeline de IaC'
                ]
            },
            {
                numero: 3,
                titulo: 'Serverless y Optimización',
                semanas: 'Semana 6-8',
                descripcion: 'Arquitecturas serverless y costos.',
                contenidos: [
                    'Lambda functions avanzado',
                    'API Gateway',
                    'Step Functions',
                    'Event-driven serverless',
                    'Cost Explorer y budgets',
                    'Reserved instances y Savings Plans'
                ],
                actividades: [
                    'API serverless completa',
                    'Workflow con Step Functions',
                    'Proyecto: App cloud-native'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Terraform', icon: 'terraform-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Ansible', icon: 'ansible-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Cloud', ponderacion: 0, descripcion: 'Prácticas en AWS' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Servicios core' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'IaC con Terraform' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Proyecto serverless' }
        ],
        prerrequisitos: ['DevOps', 'Cloud Native'],
        conexiones: ['Fullstack II', 'Cloud Native I'],
        recursos: [
            { tipo: 'Certificación', nombre: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
            { tipo: 'Documentación', nombre: 'Terraform Docs', url: 'https://developer.hashicorp.com/terraform/docs' },
            { tipo: 'Tutorial', nombre: 'AWS Free Tier', url: 'https://aws.amazon.com/free/' },
            { tipo: 'Video', nombre: 'AWS Course for Beginners - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ulprqHHWlng' },
            { tipo: 'Tutorial', nombre: 'Terraform on AWS - HashiCorp Learn', url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started' }
        ],
        color: 'orange',
        area: 'infraestructura'
    },

    // =============================================
    // BIMESTRE 13 - FULLSTACK III
    // =============================================

    // FST13201 - Desarrollo Fullstack III
    'fullstack-iii': {
        id: 'fullstack-iii',
        codigo: 'FST13201',
        nombre: 'Desarrollo Fullstack III',
        nombreCorto: 'Desarrollo Fullstack III',
        bimestre: 13,
        creditos: 6,
        horasTeoricas: 2,
        horasPracticas: 6,
        descripcion: 'Asignatura de especialización fullstack que cubre GraphQL, real-time systems, performance optimization y arquitecturas avanzadas.',
        proposito: 'Consolidar y especializar las competencias fullstack del estudiante, preparándolo para liderar proyectos de desarrollo complejo.',
        objetivos: [
            'Implementar APIs GraphQL',
            'Desarrollar sistemas real-time escalables',
            'Optimizar performance frontend y backend',
            'Aplicar patrones de arquitectura avanzados',
            'Implementar CI/CD completo',
            'Liderar equipos de desarrollo fullstack'
        ],
        competencias: [
            'GraphQL y Apollo',
            'Real-time systems',
            'Performance engineering',
            'Advanced patterns',
            'Technical leadership'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'GraphQL y APIs Avanzadas',
                semanas: 'Semana 1-3',
                descripcion: 'APIs modernas con GraphQL.',
                contenidos: [
                    'GraphQL schema design',
                    'Queries, mutations, subscriptions',
                    'Apollo Server y Client',
                    'DataLoaders y N+1 problem',
                    'Federation y supergraphs',
                    'GraphQL vs REST trade-offs'
                ],
                actividades: [
                    'API GraphQL completa',
                    'Cliente Apollo React',
                    'Real-time subscriptions'
                ]
            },
            {
                numero: 2,
                titulo: 'Performance Engineering',
                semanas: 'Semana 4-5',
                descripcion: 'Optimización de rendimiento.',
                contenidos: [
                    'Frontend: bundle optimization, lazy loading',
                    'Backend: query optimization, caching',
                    'Database: indexing, connection pooling',
                    'CDN y edge computing',
                    'Load testing con k6',
                    'Profiling y bottleneck detection'
                ],
                actividades: [
                    'Auditoría de performance',
                    'Optimización de aplicación existente',
                    'Load testing y tuning'
                ]
            },
            {
                numero: 3,
                titulo: 'Arquitecturas Avanzadas',
                semanas: 'Semana 6-8',
                descripcion: 'Patrones enterprise y liderazgo.',
                contenidos: [
                    'Hexagonal architecture implementation',
                    'DDD tactical patterns',
                    'Multi-tenant architectures',
                    'Blue-green y canary deployments',
                    'Technical documentation',
                    'Code review y mentoring'
                ],
                actividades: [
                    'Refactoring a arquitectura hexagonal',
                    'Documentación técnica completa',
                    'Proyecto: Capstone fullstack'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'GraphQL', icon: 'graphql-plain', iconType: 'devicon' },
            { nombre: 'Apollo', icon: 'fa-project-diagram', iconType: 'fontawesome' },
            { nombre: 'Redis', icon: 'redis-plain', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Lighthouse', icon: 'fa-tachometer-alt', iconType: 'fontawesome' },
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Avanzados', ponderacion: 0, descripcion: 'Prácticas especializadas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'GraphQL' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Performance' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Capstone project' }
        ],
        prerrequisitos: ['Fullstack II'],
        conexiones: ['Cloud Native I', 'App Móviles'],
        recursos: [
            { tipo: 'Documentación', nombre: 'GraphQL Docs', url: 'https://graphql.org/learn/' },
            { tipo: 'Documentación', nombre: 'Apollo Docs', url: 'https://www.apollographql.com/docs/' },
            { tipo: 'Herramienta', nombre: 'k6 Load Testing', url: 'https://k6.io/docs/' },
            { tipo: 'Video', nombre: 'GraphQL Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q' },
            { tipo: 'Tutorial', nombre: 'web.dev Performance Guide', url: 'https://web.dev/learn/performance' }
        ],
        color: 'teal',
        area: 'programacion'
    },

    // =============================================
    // BIMESTRE 14 - APP MÓVILES & CLOUD NATIVE I
    // =============================================

    // MOB14201 - Desarrollo App Móviles
    'app-moviles': {
        id: 'app-moviles',
        codigo: 'MOB14201',
        nombre: 'Desarrollo de Aplicaciones Móviles',
        nombreCorto: 'Desarrollo App Móviles',
        bimestre: 14,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de desarrollo móvil que cubre Flutter, desarrollo nativo avanzado, offline-first y publicación en stores.',
        proposito: 'Especializar al estudiante en desarrollo móvil multiplataforma, preparándolo para crear aplicaciones móviles profesionales.',
        objetivos: [
            'Desarrollar aplicaciones con Flutter',
            'Implementar arquitecturas móviles avanzadas',
            'Crear aplicaciones offline-first',
            'Integrar con servicios nativos',
            'Publicar en App Store y Play Store',
            'Optimizar rendimiento móvil'
        ],
        competencias: [
            'Flutter y Dart',
            'Mobile architectures',
            'Offline-first design',
            'Native integrations',
            'Store publishing'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Flutter Development',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de Flutter y Dart.',
                contenidos: [
                    'Dart language fundamentals',
                    'Flutter widgets y layouts',
                    'State management: Riverpod, Bloc',
                    'Navigation 2.0',
                    'Flutter DevTools',
                    'Hot reload y debugging'
                ],
                actividades: [
                    'App Flutter básica',
                    'Implementación de estado',
                    'Navegación compleja'
                ]
            },
            {
                numero: 2,
                titulo: 'Offline y Sincronización',
                semanas: 'Semana 4-5',
                descripcion: 'Aplicaciones offline-first.',
                contenidos: [
                    'SQLite y Hive local storage',
                    'Sync strategies',
                    'Conflict resolution',
                    'Background sync',
                    'Push notifications',
                    'Firebase integration'
                ],
                actividades: [
                    'App offline-first',
                    'Sistema de sincronización',
                    'Notificaciones push'
                ]
            },
            {
                numero: 3,
                titulo: 'Nativo y Publicación',
                semanas: 'Semana 6-8',
                descripcion: 'Integraciones nativas y stores.',
                contenidos: [
                    'Platform channels',
                    'Biometrics y secure storage',
                    'Camera y sensors avanzados',
                    'App signing y certificates',
                    'Play Store submission',
                    'App Store review guidelines'
                ],
                actividades: [
                    'Integración de biometrics',
                    'Preparación para stores',
                    'Proyecto: App publicable'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Flutter', icon: 'flutter-plain', iconType: 'devicon' },
            { nombre: 'Dart', icon: 'dart-plain', iconType: 'devicon' },
            { nombre: 'Firebase', icon: 'firebase-plain', iconType: 'devicon' },
            { nombre: 'SQLite', icon: 'sqlite-plain', iconType: 'devicon' },
            { nombre: 'Android Studio', icon: 'androidstudio-plain', iconType: 'devicon' },
            { nombre: 'Xcode', icon: 'xcode-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Flutter', ponderacion: 0, descripcion: 'Prácticas móviles' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Flutter basics' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Offline-first' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'App completa' }
        ],
        prerrequisitos: ['Mobile II'],
        conexiones: ['Cloud Native I'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Flutter Docs', url: 'https://docs.flutter.dev/' },
            { tipo: 'Tutorial', nombre: 'Flutter Codelabs', url: 'https://docs.flutter.dev/codelabs' },
            { tipo: 'Curso', nombre: 'Flutter Complete Course', url: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/' },
            { tipo: 'Video', nombre: 'Flutter Course for Beginners - freeCodeCamp', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8' },
            { tipo: 'Tutorial', nombre: 'Flutter by Example', url: 'https://flutterbyexample.com/' }
        ],
        color: 'blue',
        area: 'mobile'
    },

    // CLN14201 - Cloud Native I
    'cloud-native-i': {
        id: 'cloud-native-i',
        codigo: 'CLN14201',
        nombre: 'Cloud Native I',
        nombreCorto: 'Cloud Native I',
        bimestre: 14,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que introduce desarrollo cloud-native con Kubernetes, service mesh y observabilidad avanzada.',
        proposito: 'Desarrollar competencias en arquitecturas cloud-native, preparando al estudiante para operar aplicaciones en Kubernetes.',
        objetivos: [
            'Desplegar aplicaciones en Kubernetes',
            'Implementar service mesh',
            'Configurar observabilidad cloud-native',
            'Aplicar GitOps workflows',
            'Gestionar secrets y configuration',
            'Implementar auto-scaling'
        ],
        competencias: [
            'Kubernetes operations',
            'Helm charts',
            'Service mesh',
            'GitOps',
            'Cloud-native observability'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Kubernetes Fundamentals',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de Kubernetes.',
                contenidos: [
                    'K8s architecture: nodes, pods, services',
                    'Deployments y ReplicaSets',
                    'ConfigMaps y Secrets',
                    'Persistent Volumes',
                    'Ingress controllers',
                    'kubectl y k9s'
                ],
                actividades: [
                    'Cluster local con kind/minikube',
                    'Deployment de aplicación',
                    'Configuración de Ingress'
                ]
            },
            {
                numero: 2,
                titulo: 'Helm y GitOps',
                semanas: 'Semana 4-5',
                descripcion: 'Packaging y deployment automatizado.',
                contenidos: [
                    'Helm charts: templates, values',
                    'Chart repositories',
                    'ArgoCD fundamentals',
                    'GitOps workflows',
                    'Progressive delivery',
                    'Rollback strategies'
                ],
                actividades: [
                    'Creación de Helm chart',
                    'Setup de ArgoCD',
                    'Pipeline GitOps'
                ]
            },
            {
                numero: 3,
                titulo: 'Service Mesh y Observability',
                semanas: 'Semana 6-8',
                descripcion: 'Networking avanzado y monitoring.',
                contenidos: [
                    'Istio basics',
                    'Traffic management',
                    'mTLS y security policies',
                    'Prometheus y Grafana en K8s',
                    'Jaeger distributed tracing',
                    'Kiali dashboard'
                ],
                actividades: [
                    'Setup de Istio',
                    'Observability stack',
                    'Proyecto: App cloud-native'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Helm', icon: 'helm-original', iconType: 'devicon' },
            { nombre: 'ArgoCD', icon: 'argocd-original', iconType: 'devicon' },
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Istio', icon: 'fa-network-wired', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs K8s', ponderacion: 0, descripcion: 'Prácticas en cluster' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Kubernetes basics' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Helm y GitOps' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Cloud-native app' }
        ],
        prerrequisitos: ['Cloud Computing', 'DevOps'],
        conexiones: ['Cloud Native II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/' },
            { tipo: 'Tutorial', nombre: 'Helm Docs', url: 'https://helm.sh/docs/' },
            { tipo: 'Certificación', nombre: 'CKA Exam', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/' },
            { tipo: 'Video', nombre: 'Kubernetes Tutorial - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=X48VuDVv0do' },
            { tipo: 'Tutorial', nombre: 'CKAD Exercises - GitHub', url: 'https://github.com/dgkanatsios/CKAD-exercises' }
        ],
        color: 'blue',
        area: 'infraestructura'
    },

    // =============================================
    // BIMESTRE 15 - CLOUD NATIVE II & SEGURIDAD
    // =============================================

    // CLN15201 - Cloud Native II
    'cloud-native-ii': {
        id: 'cloud-native-ii',
        codigo: 'CLN15201',
        nombre: 'Cloud Native II',
        nombreCorto: 'Cloud Native II',
        bimestre: 15,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura avanzada de cloud-native que cubre multi-cluster, disaster recovery, security y platform engineering.',
        proposito: 'Profundizar en operaciones cloud-native avanzadas, preparando al estudiante para roles de SRE y Platform Engineering.',
        objetivos: [
            'Gestionar múltiples clusters',
            'Implementar disaster recovery',
            'Aplicar security best practices',
            'Desarrollar internal developer platforms',
            'Implementar FinOps',
            'Liderar iniciativas cloud-native'
        ],
        competencias: [
            'Multi-cluster management',
            'Disaster recovery',
            'Cloud security',
            'Platform engineering',
            'FinOps'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Multi-Cluster y HA',
                semanas: 'Semana 1-3',
                descripcion: 'Gestión de múltiples clusters.',
                contenidos: [
                    'Multi-cluster architectures',
                    'Federation concepts',
                    'Cross-cluster networking',
                    'Disaster recovery strategies',
                    'Backup con Velero',
                    'RTO y RPO planning'
                ],
                actividades: [
                    'Setup multi-cluster',
                    'Backup y restore',
                    'DR simulation'
                ]
            },
            {
                numero: 2,
                titulo: 'Security y Compliance',
                semanas: 'Semana 4-5',
                descripcion: 'Seguridad en Kubernetes.',
                contenidos: [
                    'Pod Security Standards',
                    'Network Policies',
                    'OPA Gatekeeper',
                    'Vault integration',
                    'Image scanning',
                    'Compliance frameworks'
                ],
                actividades: [
                    'Implementación de policies',
                    'Secrets con Vault',
                    'Security audit'
                ]
            },
            {
                numero: 3,
                titulo: 'Platform Engineering',
                semanas: 'Semana 6-8',
                descripcion: 'Internal Developer Platforms.',
                contenidos: [
                    'Platform engineering principles',
                    'Developer experience (DevEx)',
                    'Self-service portals',
                    'Backstage introduction',
                    'Cost management y chargebacks',
                    'SLOs y error budgets'
                ],
                actividades: [
                    'Developer portal básico',
                    'Cost attribution',
                    'Proyecto: Platform MVP'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Kubernetes', icon: 'kubernetes-plain', iconType: 'devicon' },
            { nombre: 'Vault', icon: 'vault-original', iconType: 'devicon' },
            { nombre: 'Terraform', icon: 'terraform-plain', iconType: 'devicon' },
            { nombre: 'Grafana', icon: 'grafana-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Avanzados', ponderacion: 0, descripcion: 'Prácticas enterprise' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Multi-cluster' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Security' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Platform project' }
        ],
        prerrequisitos: ['Cloud Native I'],
        conexiones: ['Seguridad y Calidad'],
        recursos: [
            { tipo: 'Certificación', nombre: 'CKS Exam', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/' },
            { tipo: 'Documentación', nombre: 'Vault Docs', url: 'https://developer.hashicorp.com/vault/docs' },
            { tipo: 'Framework', nombre: 'Backstage', url: 'https://backstage.io/docs/overview/what-is-backstage' },
            { tipo: 'Video', nombre: 'DevOps Engineering Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=j5Zsa_eOXeY' },
            { tipo: 'Tutorial', nombre: 'Platform Engineering with Backstage', url: 'https://backstage.io/docs/getting-started/' }
        ],
        color: 'blue',
        area: 'infraestructura'
    },

    // SEG15201 - Seguridad y Calidad
    'seguridad-calidad': {
        id: 'seguridad-calidad',
        codigo: 'SEG15201',
        nombre: 'Seguridad y Calidad de Software',
        nombreCorto: 'Seguridad y Calidad',
        bimestre: 15,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que integra seguridad de aplicaciones (AppSec) y calidad de software, cubriendo OWASP, SAST/DAST y métricas de calidad.',
        proposito: 'Desarrollar competencias en seguridad y calidad de software, preparando al estudiante para crear aplicaciones seguras y de alta calidad.',
        objetivos: [
            'Aplicar OWASP Top 10 y security best practices',
            'Implementar SAST y DAST en pipelines',
            'Definir y medir métricas de calidad',
            'Realizar security code reviews',
            'Implementar DevSecOps',
            'Gestionar vulnerabilidades'
        ],
        competencias: [
            'Application security',
            'SAST/DAST tools',
            'Security testing',
            'Quality metrics',
            'DevSecOps'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Application Security',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de seguridad de aplicaciones.',
                contenidos: [
                    'OWASP Top 10 2021',
                    'Injection attacks y prevención',
                    'Authentication y session management',
                    'XSS y CSRF',
                    'Security headers',
                    'Secure coding practices'
                ],
                actividades: [
                    'Análisis de vulnerabilidades',
                    'Hardening de aplicación',
                    'Security headers implementation'
                ]
            },
            {
                numero: 2,
                titulo: 'Security Testing',
                semanas: 'Semana 4-5',
                descripcion: 'Testing de seguridad automatizado.',
                contenidos: [
                    'SAST: SonarQube, Snyk',
                    'DAST: OWASP ZAP',
                    'Dependency scanning',
                    'Container scanning',
                    'Secrets detection',
                    'Penetration testing basics'
                ],
                actividades: [
                    'Pipeline con SAST',
                    'Scan de vulnerabilidades',
                    'Remediation workflow'
                ]
            },
            {
                numero: 3,
                titulo: 'Calidad y DevSecOps',
                semanas: 'Semana 6-8',
                descripcion: 'Métricas de calidad y DevSecOps.',
                contenidos: [
                    'Quality gates en CI/CD',
                    'Code coverage y mutation testing',
                    'Technical debt management',
                    'Security Champions program',
                    'Incident response',
                    'Compliance automation'
                ],
                actividades: [
                    'Quality gates completos',
                    'Dashboard de métricas',
                    'Proyecto: DevSecOps pipeline'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'SonarQube', icon: 'sonarqube-plain', iconType: 'devicon' },
            { nombre: 'Snyk', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'OWASP ZAP', icon: 'fa-bug', iconType: 'fontawesome' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'Burp Suite', icon: 'fa-user-secret', iconType: 'fontawesome' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Labs Security', ponderacion: 0, descripcion: 'Prácticas de seguridad' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'AppSec fundamentals' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Security testing' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'DevSecOps pipeline' }
        ],
        prerrequisitos: ['Ing. Software II', 'DevOps'],
        conexiones: ['Cloud Native II'],
        recursos: [
            { tipo: 'Documentación', nombre: 'OWASP', url: 'https://owasp.org/' },
            { tipo: 'Herramienta', nombre: 'SonarQube', url: 'https://www.sonarsource.com/products/sonarqube/' },
            { tipo: 'Tutorial', nombre: 'Snyk Learn', url: 'https://learn.snyk.io/' },
            { tipo: 'Video', nombre: 'Web Security Course - Computerphile', url: 'https://www.youtube.com/playlist?list=PLzH6n4zXuckrLBxd2MVWH_a6mlN0cYuOL' },
            { tipo: 'Certificación', nombre: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security' }
        ],
        color: 'red',
        area: 'seguridad'
    },

    // =============================================
    // BIMESTRE 16 - GESTIÓN DE PROYECTOS SW
    // =============================================

    // GPR16201 - Evaluación y Gestión de Proyectos
    'gestion-proyectos': {
        id: 'gestion-proyectos',
        codigo: 'GPR16201',
        nombre: 'Evaluación y Gestión de Proyectos de Software',
        nombreCorto: 'Evaluacion y Gestion Proyectos',
        bimestre: 16,
        creditos: 4,
        horasTeoricas: 2,
        horasPracticas: 4,
        descripcion: 'Asignatura que cubre gestión de proyectos de software, metodologías ágiles avanzadas, estimación, métricas y liderazgo técnico.',
        proposito: 'Desarrollar competencias de gestión y liderazgo técnico, preparando al estudiante para liderar equipos y proyectos de desarrollo de software.',
        objetivos: [
            'Aplicar metodologías ágiles a escala',
            'Estimar proyectos de software',
            'Gestionar equipos de desarrollo',
            'Definir y seguir métricas de proyecto',
            'Comunicar efectivamente con stakeholders',
            'Liderar transformaciones técnicas'
        ],
        competencias: [
            'Agile at scale',
            'Project estimation',
            'Team leadership',
            'Stakeholder management',
            'Technical communication'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Agile a Escala',
                semanas: 'Semana 1-3',
                descripcion: 'Metodologías ágiles para organizaciones.',
                contenidos: [
                    'SAFe fundamentals',
                    'LeSS y Nexus',
                    'Program Increment planning',
                    'Release trains',
                    'Agile portfolio management',
                    'Value stream mapping'
                ],
                actividades: [
                    'PI Planning simulation',
                    'Value stream analysis',
                    'Portfolio prioritization'
                ]
            },
            {
                numero: 2,
                titulo: 'Estimación y Métricas',
                semanas: 'Semana 4-5',
                descripcion: 'Estimación y tracking de proyectos.',
                contenidos: [
                    'Story points y velocity',
                    'Function points',
                    'COCOMO basics',
                    'Burndown y burnup charts',
                    'Lead time y cycle time',
                    'DORA metrics'
                ],
                actividades: [
                    'Estimación de proyecto real',
                    'Dashboard de métricas',
                    'Forecasting'
                ]
            },
            {
                numero: 3,
                titulo: 'Liderazgo y Comunicación',
                semanas: 'Semana 6-8',
                descripcion: 'Soft skills para líderes técnicos.',
                contenidos: [
                    '1:1s y feedback',
                    'Technical interviews',
                    'Architecture Decision Records',
                    'RFCs y design docs',
                    'Presentations y demos',
                    'Conflict resolution'
                ],
                actividades: [
                    'Mock technical interview',
                    'Design doc writing',
                    'Proyecto: Plan de proyecto completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Jira', icon: 'jira-plain', iconType: 'devicon' },
            { nombre: 'Confluence', icon: 'confluence-plain', iconType: 'devicon' },
            { nombre: 'Notion', icon: 'notion-plain', iconType: 'devicon' },
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' },
            { nombre: 'Slack', icon: 'slack-plain', iconType: 'devicon' },
            { nombre: 'Azure DevOps', icon: 'azure-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Workshops', ponderacion: 0, descripcion: 'Dinámicas grupales' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Agile at scale' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Estimación' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Plan de proyecto' }
        ],
        prerrequisitos: ['Ing. Software II'],
        conexiones: ['Taller Aplicado Software'],
        recursos: [
            { tipo: 'Framework', nombre: 'SAFe', url: 'https://www.scaledagileframework.com/' },
            { tipo: 'Métricas', nombre: 'DORA Metrics', url: 'https://dora.dev/' },
            { tipo: 'Curso', nombre: 'Atlassian Agile', url: 'https://www.atlassian.com/agile' },
            { tipo: 'Video', nombre: 'Agile Project Management - Google', url: 'https://www.coursera.org/learn/agile-project-management' },
            { tipo: 'Certificación', nombre: 'PMI-ACP', url: 'https://www.pmi.org/certifications/agile-acp' }
        ],
        color: 'purple',
        area: 'gestion'
    },

    // =============================================
    // BIMESTRE 17 - ÉTICA & TALLER APLICADO
    // =============================================

    // ETI17201 - Ética Profesional
    'etica-profesional': {
        id: 'etica-profesional',
        codigo: 'ETI17201',
        nombre: 'Ética Profesional en TI',
        nombreCorto: 'Etica Profesional',
        bimestre: 17,
        creditos: 2,
        horasTeoricas: 2,
        horasPracticas: 2,
        descripcion: 'Asignatura que profundiza en ética profesional, responsabilidad social, privacidad de datos y aspectos legales en tecnología.',
        proposito: 'Formar profesionales éticos y responsables, conscientes del impacto social de la tecnología y las regulaciones vigentes.',
        objetivos: [
            'Aplicar principios éticos en decisiones tecnológicas',
            'Comprender regulaciones de privacidad (GDPR, etc.)',
            'Evaluar impacto social de sistemas',
            'Gestionar dilemas éticos en IA',
            'Promover diversidad e inclusión en tech',
            'Practicar responsabilidad profesional'
        ],
        competencias: [
            'Ética tecnológica',
            'Privacidad y compliance',
            'Responsabilidad social',
            'AI ethics',
            'Professional responsibility'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos Éticos',
                semanas: 'Semana 1-3',
                descripcion: 'Principios éticos en tecnología.',
                contenidos: [
                    'Códigos de ética: ACM, IEEE',
                    'Responsabilidad profesional',
                    'Conflictos de interés',
                    'Propiedad intelectual',
                    'Open source ethics',
                    'Whistleblowing'
                ],
                actividades: [
                    'Análisis de casos éticos',
                    'Debate sobre dilemas',
                    'Código de ética personal'
                ]
            },
            {
                numero: 2,
                titulo: 'Privacidad y Regulaciones',
                semanas: 'Semana 4-5',
                descripcion: 'Marco legal y privacidad.',
                contenidos: [
                    'GDPR principles',
                    'Privacy by design',
                    'Data protection impact assessment',
                    'User consent management',
                    'Data breach response',
                    'Legislación local'
                ],
                actividades: [
                    'DPIA de sistema',
                    'Privacy policy analysis',
                    'Compliance checklist'
                ]
            },
            {
                numero: 3,
                titulo: 'Impacto Social y AI Ethics',
                semanas: 'Semana 6-8',
                descripcion: 'Responsabilidad social y ética en IA.',
                contenidos: [
                    'Bias en algoritmos',
                    'Fairness en ML',
                    'Explicabilidad de IA',
                    'Impacto ambiental de tech',
                    'Digital divide',
                    'Accessibility y inclusion'
                ],
                actividades: [
                    'Audit de bias en modelo',
                    'Sustainability assessment',
                    'Proyecto: Ethical review'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Fairlearn', icon: 'fa-balance-scale', iconType: 'fontawesome' },
            { nombre: 'AI Explainability', icon: 'fa-brain', iconType: 'fontawesome' },
            { nombre: 'GDPR Tools', icon: 'fa-shield-alt', iconType: 'fontawesome' },
            { nombre: 'Accessibility', icon: 'fa-universal-access', iconType: 'fontawesome' },
            { nombre: 'Python', icon: 'python-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Debates', ponderacion: 0, descripcion: 'Discusiones éticas' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 1', ponderacion: 30, descripcion: 'Fundamentos éticos' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 2', ponderacion: 30, descripcion: 'Privacidad' },
            { tipo: 'Sumativa', nombre: 'Evaluación Sumativa 3', ponderacion: 40, descripcion: 'Ethical review' }
        ],
        prerrequisitos: ['Ética (B03)'],
        conexiones: ['Taller Aplicado Software'],
        recursos: [
            { tipo: 'Código', nombre: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics' },
            { tipo: 'Documentación', nombre: 'GDPR Info', url: 'https://gdpr.eu/' },
            { tipo: 'Framework', nombre: 'AI Ethics Guidelines', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
            { tipo: 'Video', nombre: 'Ethics in Technology - TED', url: 'https://www.ted.com/topics/technology' },
            { tipo: 'Tutorial', nombre: 'Responsible AI - Microsoft', url: 'https://www.microsoft.com/en-us/ai/responsible-ai' }
        ],
        color: 'slate',
        area: 'general'
    },

    // TAS17201 - Taller Aplicado Software
    'taller-aplicado-sw': {
        id: 'taller-aplicado-sw',
        codigo: 'TAS17201',
        nombre: 'Taller Aplicado de Software',
        nombreCorto: 'Taller Aplicado Software',
        bimestre: 17,
        creditos: 8,
        horasTeoricas: 2,
        horasPracticas: 10,
        descripcion: 'Asignatura de cierre de carrera donde los estudiantes desarrollan un proyecto integrador de ingeniería de software con cliente real.',
        proposito: 'Consolidar todas las competencias de la carrera mediante el desarrollo de un proyecto real que demuestre las habilidades del ingeniero de software.',
        objetivos: [
            'Desarrollar proyecto de software con cliente real',
            'Aplicar metodologías ágiles en contexto real',
            'Integrar todas las competencias técnicas',
            'Documentar arquitectura y decisiones',
            'Presentar y defender el proyecto',
            'Demostrar profesionalismo y ética'
        ],
        competencias: [
            'Desarrollo end-to-end',
            'Client management',
            'Technical documentation',
            'Project presentation',
            'Professional ethics'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Inception y Arquitectura',
                semanas: 'Semana 1-3',
                descripcion: 'Definición del proyecto y diseño.',
                contenidos: [
                    'Client discovery y requirements',
                    'User story mapping',
                    'Architecture design',
                    'Tech stack selection',
                    'MVP definition',
                    'Project roadmap'
                ],
                actividades: [
                    'Kickoff con cliente',
                    'Documentación de arquitectura',
                    'Sprint 0 planning'
                ]
            },
            {
                numero: 2,
                titulo: 'Desarrollo Iterativo',
                semanas: 'Semana 4-5',
                descripcion: 'Implementación con sprints.',
                contenidos: [
                    'Sprint execution',
                    'Daily standups',
                    'Code reviews',
                    'CI/CD implementation',
                    'Client demos',
                    'Feedback incorporation'
                ],
                actividades: [
                    'Sprints de desarrollo',
                    'Demos quincenales',
                    'Retrospectivas'
                ]
            },
            {
                numero: 3,
                titulo: 'Entrega y Defensa',
                semanas: 'Semana 6-8',
                descripcion: 'Finalización y presentación.',
                contenidos: [
                    'Feature completion',
                    'Testing y QA final',
                    'Documentation completion',
                    'Deployment a producción',
                    'Client handoff',
                    'Project defense'
                ],
                actividades: [
                    'Release final',
                    'Entrega a cliente',
                    'Defensa de proyecto'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Stack completo', icon: 'fa-layer-group', iconType: 'fontawesome' },
            { nombre: 'CI/CD', icon: 'fa-sync', iconType: 'fontawesome' },
            { nombre: 'Cloud', icon: 'fa-cloud', iconType: 'fontawesome' },
            { nombre: 'Agile', icon: 'fa-tasks', iconType: 'fontawesome' },
            { nombre: 'GitHub', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
        ],
        evaluaciones: [
            { tipo: 'Formativa', nombre: 'Sprint reviews', ponderacion: 0, descripcion: 'Demos de sprint' },
            { tipo: 'Sumativa', nombre: 'Avance 1', ponderacion: 20, descripcion: 'Arquitectura y MVP' },
            { tipo: 'Sumativa', nombre: 'Avance 2', ponderacion: 30, descripcion: 'Desarrollo iterativo' },
            { tipo: 'Sumativa', nombre: 'Entrega Final', ponderacion: 50, descripcion: 'Proyecto completo y defensa' }
        ],
        prerrequisitos: ['Fullstack III', 'Gestión de Proyectos'],
        conexiones: [],
        recursos: [
            { tipo: 'Template', nombre: 'Architecture Decision Records', url: 'https://adr.github.io/' },
            { tipo: 'Framework', nombre: 'Scrum Guide', url: 'https://scrumguides.org/' },
            { tipo: 'Tool', nombre: 'Notion for Teams', url: 'https://www.notion.so/product/teams' },
            { tipo: 'Video', nombre: 'How to Present a Technical Project', url: 'https://www.youtube.com/watch?v=Unzc731iCUY' },
            { tipo: 'Tutorial', nombre: 'Git Best Practices for Teams', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows' }
        ],
        color: 'emerald',
        area: 'proyecto'
    }
};

// Función helper para obtener asignaturas por bimestre
export function getAsignaturasByBimestre(bimestre: number): Asignatura[] {
    return Object.values(asignaturas).filter(a => a.bimestre === bimestre);
}

// Función helper para obtener asignatura por ID
export function getAsignaturaById(id: string): Asignatura | undefined {
    return asignaturas[id];
}

// Función helper para obtener asignaturas por área
export function getAsignaturasByArea(area: Asignatura['area']): Asignatura[] {
    return Object.values(asignaturas).filter(a => a.area === area);
}

// Mapeo de nombres cortos a IDs - Todos los bimestres (B01-B17)
export const nombreCortoToId: Record<string, string> = {
    // Bimestre 01
    'Fundamentos Prog.': 'fundamentos-programacion',
    'Modelamiento BD': 'modelamiento-datos',
    'Antropologia': 'antropologia',
    // Bimestre 02
    'POO I': 'poo-i',
    'Computacion Nube': 'computacion-nube',
    'Comunicacion': 'comunicacion',
    // Bimestre 03
    'POO II': 'poo-ii',
    'DevOps': 'devops',
    'Etica': 'etica',
    // Bimestre 04
    'SQL Consultas': 'sql-consultas',
    'Seguridad Informatica': 'seguridad-informatica',
    // Bimestre 05
    'SQL Programacion': 'sql-programacion',
    'Cloud Native': 'cloud-native',
    'Ing. Requisitos': 'ingenieria-requisitos',
    // Bimestre 06
    'Backend I': 'backend-i',
    'Ing. Software I': 'ingenieria-software-i',
    // Bimestre 07
    'Backend II-III': 'backend-ii-iii',
    'Ing. Software II': 'ingenieria-software-ii',
    // Bimestre 08
    'Frontend I-II': 'frontend-i-ii',
    'Arquitectura Software': 'arquitectura-software',
    // Bimestre 09
    'Mobile I': 'mobile-i',
    'Frontend III': 'frontend-iii',
    // Bimestre 10
    'Mobile II': 'mobile-ii',
    'Taller de Titulo': 'taller-titulo',
    // Bimestre 11 - Ingeniería
    'Desarrollo Fullstack I': 'fullstack-i',
    'BD Aplicada': 'bd-aplicada',
    // Bimestre 12
    'Desarrollo Fullstack II': 'fullstack-ii',
    'Cloud Computing': 'cloud-computing',
    // Bimestre 13
    'Desarrollo Fullstack III': 'fullstack-iii',
    // Bimestre 14
    'Desarrollo App Móviles': 'app-moviles',
    'Cloud Native I': 'cloud-native-i',
    // Bimestre 15
    'Cloud Native II': 'cloud-native-ii',
    'Seguridad y Calidad': 'seguridad-calidad',
    // Bimestre 16
    'Evaluacion y Gestion Proyectos': 'gestion-proyectos',
    // Bimestre 17
    'Etica Profesional': 'etica-profesional',
    'Taller Aplicado Software': 'taller-aplicado-sw'
};
