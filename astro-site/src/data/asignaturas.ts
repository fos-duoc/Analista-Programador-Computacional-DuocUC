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
            'Pensamiento algorítmico y lógico',
            'Resolución de problemas computacionales',
            'Programación estructurada en Python',
            'Trabajo con estructuras de datos lineales',
            'Debugging y testing básico'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Introducción a la Programación y Algoritmos',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos del pensamiento computacional, diseño de algoritmos y primeros pasos en Python.',
                contenidos: [
                    'Conceptos básicos: variable, constante, tipo de dato',
                    'Operadores aritméticos, lógicos y relacionales',
                    'Entrada/salida de datos (input, print)',
                    'Pseudocódigo y diagramas de flujo',
                    'Instalación y configuración del entorno Python',
                    'Sintaxis básica de Python'
                ],
                actividades: [
                    'Ejercicios de pseudocódigo y diagramas de flujo',
                    'Primeros programas en Python: calculadora básica',
                    'Resolución de problemas matemáticos simples'
                ]
            },
            {
                numero: 2,
                titulo: 'Estructuras de Control y Funciones',
                semanas: 'Semana 4-5',
                descripcion: 'Control de flujo del programa mediante condicionales, bucles y modularización con funciones.',
                contenidos: [
                    'Estructuras condicionales: if, elif, else',
                    'Estructuras repetitivas: while, for',
                    'Bucles anidados y control de iteración',
                    'Definición y llamada de funciones',
                    'Parámetros, argumentos y retorno de valores',
                    'Alcance de variables (scope)'
                ],
                actividades: [
                    'Programas con validación de datos',
                    'Menús interactivos con bucles',
                    'Refactorización de código en funciones',
                    'Mini-proyecto: Sistema de calificaciones'
                ]
            },
            {
                numero: 3,
                titulo: 'Estructuras de Datos y Proyecto Final',
                semanas: 'Semana 6-8',
                descripcion: 'Trabajo con colecciones de datos y desarrollo de un proyecto integrador.',
                contenidos: [
                    'Listas: creación, acceso, modificación',
                    'Métodos de listas: append, remove, sort',
                    'Tuplas y sus características',
                    'Diccionarios: claves y valores',
                    'Comprensión de listas (list comprehension)',
                    'Manejo básico de archivos de texto'
                ],
                actividades: [
                    'CRUD con listas y diccionarios',
                    'Lectura y escritura de archivos',
                    'Proyecto integrador: Sistema de inventario'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Python', icon: 'python-plain', iconType: 'devicon' },
            { nombre: 'VS Code', icon: 'vscode-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' }
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
            'Análisis de requerimientos de datos',
            'Modelamiento Entidad-Relación',
            'Normalización de bases de datos',
            'Diseño de esquemas relacionales',
            'Documentación técnica de bases de datos'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos y Modelo Conceptual',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a las bases de datos y diseño del modelo Entidad-Relación.',
                contenidos: [
                    'Conceptos básicos: dato, información, base de datos',
                    'Tipos de bases de datos: relacional, NoSQL',
                    'Modelo Entidad-Relación (E-R)',
                    'Entidades fuertes y débiles',
                    'Atributos: simples, compuestos, derivados, multivaluados',
                    'Relaciones y cardinalidad (1:1, 1:N, N:M)'
                ],
                actividades: [
                    'Análisis de casos de estudio empresariales',
                    'Diseño de diagramas E-R con herramientas CASE',
                    'Identificación de entidades y relaciones'
                ]
            },
            {
                numero: 2,
                titulo: 'Normalización y Modelo Lógico',
                semanas: 'Semana 4-5',
                descripcion: 'Técnicas de normalización y transformación al modelo relacional.',
                contenidos: [
                    'Dependencias funcionales',
                    'Primera Forma Normal (1FN)',
                    'Segunda Forma Normal (2FN)',
                    'Tercera Forma Normal (3FN)',
                    'Transformación E-R a modelo relacional',
                    'Claves primarias y foráneas'
                ],
                actividades: [
                    'Ejercicios de normalización paso a paso',
                    'Transformación de modelos E-R a tablas',
                    'Identificación de dependencias funcionales'
                ]
            },
            {
                numero: 3,
                titulo: 'Modelo Físico y Documentación',
                semanas: 'Semana 6-8',
                descripcion: 'Implementación del modelo en SGBD y documentación profesional.',
                contenidos: [
                    'DDL: CREATE TABLE, ALTER, DROP',
                    'Restricciones: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK',
                    'Tipos de datos en Oracle/PostgreSQL',
                    'Diccionario de datos',
                    'Documentación de modelos',
                    'Introducción a herramientas CASE'
                ],
                actividades: [
                    'Creación de esquemas en Oracle/PostgreSQL',
                    'Elaboración de diccionario de datos',
                    'Proyecto: Modelo completo para caso empresarial'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'SQL Developer', icon: 'fa-database', iconType: 'fontawesome' },
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' }
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
            'Pensamiento crítico y reflexivo',
            'Sensibilidad intercultural',
            'Comunicación efectiva',
            'Trabajo colaborativo',
            'Responsabilidad ética y social'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'El Ser Humano y su Naturaleza',
                semanas: 'Semana 1-3',
                descripcion: 'Exploración de las dimensiones fundamentales de la condición humana.',
                contenidos: [
                    'Concepto de antropología y sus ramas',
                    'Dimensiones del ser humano: biológica, psicológica, social',
                    'El ser humano como ser cultural',
                    'Identidad personal y colectiva',
                    'El trabajo como dimensión humana'
                ],
                actividades: [
                    'Análisis de textos filosóficos',
                    'Debate sobre la naturaleza humana',
                    'Reflexión personal sobre identidad'
                ]
            },
            {
                numero: 2,
                titulo: 'Cultura y Diversidad',
                semanas: 'Semana 4-5',
                descripcion: 'Análisis de la diversidad cultural y sus manifestaciones.',
                contenidos: [
                    'Concepto de cultura y sus elementos',
                    'Diversidad cultural y globalización',
                    'Etnocentrismo y relativismo cultural',
                    'Interculturalidad en el mundo profesional',
                    'Tecnología y transformación cultural'
                ],
                actividades: [
                    'Investigación sobre culturas del mundo',
                    'Análisis de casos de diversidad en empresas tech',
                    'Presentación grupal sobre interculturalidad'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética y Sociedad Contemporánea',
                semanas: 'Semana 6-8',
                descripcion: 'Reflexión ética sobre los desafíos del mundo actual.',
                contenidos: [
                    'Fundamentos de ética y moral',
                    'Ética profesional en tecnología',
                    'Responsabilidad social empresarial',
                    'Desafíos éticos de la inteligencia artificial',
                    'Sostenibilidad y medio ambiente'
                ],
                actividades: [
                    'Análisis de dilemas éticos en TI',
                    'Debate sobre IA y ética',
                    'Proyecto: Propuesta de RSE para empresa tech'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Presentaciones', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Investigación', icon: 'fa-search', iconType: 'fontawesome' },
            { nombre: 'Colaboración', icon: 'fa-users', iconType: 'fontawesome' }
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
            { tipo: 'Lectura', nombre: 'Material de estudio DuocUC', url: '#' },
            { tipo: 'Video', nombre: 'TED Talks sobre cultura', url: 'https://www.ted.com/topics/culture' }
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
            'Diseño orientado a objetos',
            'Programación en Java',
            'Modelado con UML básico',
            'Manejo de excepciones',
            'Uso de colecciones genéricas'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de POO y Clases en Java',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción al paradigma OO y creación de clases básicas en Java.',
                contenidos: [
                    'Paradigma orientado a objetos vs estructurado',
                    'Clases y objetos: definición y diferencias',
                    'Atributos y métodos',
                    'Constructores y sobrecarga',
                    'Modificadores de acceso: public, private, protected',
                    'Encapsulamiento: getters y setters'
                ],
                actividades: [
                    'Creación de clases básicas con atributos y métodos',
                    'Implementación de constructores y sobrecarga',
                    'Práctica de encapsulamiento con validaciones'
                ]
            },
            {
                numero: 2,
                titulo: 'Herencia y Composición',
                semanas: 'Semana 4-5',
                descripcion: 'Relaciones entre clases: herencia simple y composición de objetos.',
                contenidos: [
                    'Herencia: extends y super',
                    'Sobrescritura de métodos (@Override)',
                    'Clases abstractas y métodos abstractos',
                    'Composición vs herencia',
                    'Agregación y asociación',
                    'Diagramas de clase UML básicos'
                ],
                actividades: [
                    'Diseño de jerarquías de herencia',
                    'Implementación de clases compuestas',
                    'Modelado UML de sistema simple'
                ]
            },
            {
                numero: 3,
                titulo: 'Polimorfismo, Interfaces y Colecciones',
                semanas: 'Semana 6-8',
                descripcion: 'Polimorfismo, interfaces y trabajo con colecciones genéricas.',
                contenidos: [
                    'Polimorfismo: tipos y aplicaciones',
                    'Interfaces: definición e implementación',
                    'Colecciones genéricas: List, ArrayList',
                    'Manejo de excepciones: try-catch-finally',
                    'Excepciones personalizadas',
                    'Lectura y escritura de archivos'
                ],
                actividades: [
                    'Implementación de interfaces funcionales',
                    'Gestión de listas de objetos',
                    'Proyecto integrador: Sistema de gestión con POO'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'IntelliJ IDEA', icon: 'intellij-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'Git', icon: 'git-plain', iconType: 'devicon' }
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
            'Administración de servicios cloud',
            'Despliegue de aplicaciones en AWS',
            'Gestión de almacenamiento cloud',
            'Configuración de redes virtuales',
            'Seguridad básica en cloud'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Cloud Computing',
                semanas: 'Semana 1-3',
                descripcion: 'Introducción a los conceptos y modelos de computación en la nube.',
                contenidos: [
                    'Historia y evolución del cloud computing',
                    'Modelos de servicio: IaaS, PaaS, SaaS',
                    'Modelos de despliegue: público, privado, híbrido',
                    'Principales proveedores: AWS, Azure, GCP',
                    'Introducción a AWS y creación de cuenta',
                    'Consola de administración AWS'
                ],
                actividades: [
                    'Exploración de servicios cloud de diferentes proveedores',
                    'Creación de cuenta AWS Academy',
                    'Navegación por la consola AWS'
                ]
            },
            {
                numero: 2,
                titulo: 'Cómputo y Almacenamiento en AWS',
                semanas: 'Semana 4-5',
                descripcion: 'Servicios de cómputo EC2 y almacenamiento S3.',
                contenidos: [
                    'Amazon EC2: tipos de instancias',
                    'Creación y configuración de instancias',
                    'Grupos de seguridad y acceso SSH',
                    'Amazon S3: buckets y objetos',
                    'Políticas de acceso y permisos',
                    'Ciclo de vida de objetos'
                ],
                actividades: [
                    'Lanzamiento de instancias EC2',
                    'Configuración de servidor web en EC2',
                    'Gestión de archivos en S3'
                ]
            },
            {
                numero: 3,
                titulo: 'Redes, Bases de Datos y Despliegue',
                semanas: 'Semana 6-8',
                descripcion: 'Servicios de red, bases de datos y despliegue de aplicaciones.',
                contenidos: [
                    'Amazon VPC: subredes y routing',
                    'Amazon RDS: bases de datos administradas',
                    'Elastic Beanstalk: despliegue simplificado',
                    'IAM: gestión de identidades',
                    'CloudWatch: monitoreo básico',
                    'Buenas prácticas y costos'
                ],
                actividades: [
                    'Configuración de VPC básica',
                    'Despliegue de aplicación web completa',
                    'Proyecto: Aplicación cloud-native simple'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'AWS', icon: 'amazonwebservices-plain-wordmark', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'SSH', icon: 'ssh-original', iconType: 'devicon' },
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
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
            'Comprensión lectora avanzada',
            'Redacción técnica y profesional',
            'Comunicación oral efectiva',
            'Argumentación lógica',
            'Presentaciones profesionales'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Comprensión Lectora',
                semanas: 'Semana 1-3',
                descripcion: 'Técnicas de lectura comprensiva y análisis de textos.',
                contenidos: [
                    'Estrategias de lectura comprensiva',
                    'Identificación de ideas principales y secundarias',
                    'Análisis de textos técnicos',
                    'Síntesis y resumen de información',
                    'Lectura crítica y evaluativa'
                ],
                actividades: [
                    'Análisis de artículos técnicos de TI',
                    'Elaboración de resúmenes ejecutivos',
                    'Ejercicios de comprensión lectora'
                ]
            },
            {
                numero: 2,
                titulo: 'Producción Escrita',
                semanas: 'Semana 4-5',
                descripcion: 'Redacción de documentos profesionales y técnicos.',
                contenidos: [
                    'Estructura de documentos profesionales',
                    'Coherencia y cohesión textual',
                    'Redacción de informes técnicos',
                    'Correos profesionales y minutas',
                    'Citación y referencias'
                ],
                actividades: [
                    'Redacción de informe técnico',
                    'Elaboración de documentación de proyecto',
                    'Práctica de comunicación escrita formal'
                ]
            },
            {
                numero: 3,
                titulo: 'Comunicación Oral y Presentaciones',
                semanas: 'Semana 6-8',
                descripcion: 'Técnicas de presentación y comunicación oral efectiva.',
                contenidos: [
                    'Técnicas de comunicación oral',
                    'Estructura de presentaciones efectivas',
                    'Uso de recursos visuales',
                    'Manejo del nerviosismo',
                    'Comunicación no verbal'
                ],
                actividades: [
                    'Presentación de proyecto técnico',
                    'Práctica de pitch de ideas',
                    'Retroalimentación entre pares'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PowerPoint', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Google Docs', icon: 'google-plain', iconType: 'devicon' },
            { nombre: 'Canva', icon: 'canva-original', iconType: 'devicon' }
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
            { tipo: 'Herramienta', nombre: 'Grammarly', url: 'https://www.grammarly.com/' },
            { tipo: 'Repositorio', nombre: 'Materiales del Curso', url: 'https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC/tree/main/Bimestre-02%20-%20POO%20I%2C%20Cloud%2C%20Comunicacion/Comunicacion' }
        ],
        color: 'pink',
        area: 'transversal'
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

// Mapeo de nombres cortos a IDs
export const nombreCortoToId: Record<string, string> = {
    'Fundamentos Prog.': 'fundamentos-programacion',
    'Modelamiento BD': 'modelamiento-datos',
    'Antropologia': 'antropologia',
    'POO I': 'poo-i',
    'Computacion Nube': 'computacion-nube',
    'Comunicacion': 'comunicacion'
};
