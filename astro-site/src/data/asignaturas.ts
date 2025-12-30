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
            'Principios SOLID',
            'Patrones de diseño GoF',
            'Persistencia con JDBC',
            'Interfaces gráficas JavaFX',
            'Testing unitario con JUnit'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Principios SOLID y Patrones Creacionales',
                semanas: 'Semana 1-3',
                descripcion: 'Fundamentos de diseño de software y patrones creacionales.',
                contenidos: [
                    'Principio de Responsabilidad Única (SRP)',
                    'Principio Abierto/Cerrado (OCP)',
                    'Principio de Sustitución de Liskov (LSP)',
                    'Principio de Segregación de Interfaces (ISP)',
                    'Principio de Inversión de Dependencias (DIP)',
                    'Patrones: Singleton, Factory Method, Abstract Factory'
                ],
                actividades: [
                    'Refactorización de código aplicando SOLID',
                    'Implementación de patrones creacionales',
                    'Code review con criterios SOLID'
                ]
            },
            {
                numero: 2,
                titulo: 'JDBC y Patrones de Acceso a Datos',
                semanas: 'Semana 4-5',
                descripcion: 'Conexión a bases de datos y patrones estructurales.',
                contenidos: [
                    'JDBC: Connection, Statement, ResultSet',
                    'PreparedStatement y prevención de SQL Injection',
                    'Patrón DAO (Data Access Object)',
                    'Patrón Repository',
                    'Connection Pooling con HikariCP',
                    'Transacciones y manejo de errores'
                ],
                actividades: [
                    'CRUD completo con JDBC y DAO',
                    'Implementación de pool de conexiones',
                    'Testing de capa de persistencia'
                ]
            },
            {
                numero: 3,
                titulo: 'JavaFX y Arquitectura MVC',
                semanas: 'Semana 6-8',
                descripcion: 'Desarrollo de interfaces gráficas con patrón MVC.',
                contenidos: [
                    'JavaFX: Scene, Stage, controles básicos',
                    'FXML y Scene Builder',
                    'Patrón MVC en aplicaciones desktop',
                    'Data binding y eventos',
                    'Patrón Observer para actualización de UI',
                    'Empaquetado de aplicaciones'
                ],
                actividades: [
                    'Diseño de interfaces con Scene Builder',
                    'Proyecto: Aplicación CRUD con JavaFX + JDBC',
                    'Testing con JUnit 5'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Java', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'JavaFX', icon: 'java-plain', iconType: 'devicon' },
            { nombre: 'Maven', icon: 'maven-plain', iconType: 'devicon' },
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' }
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
            { tipo: 'Tutorial', nombre: 'Refactoring Guru - Patrones', url: 'https://refactoring.guru/es/design-patterns' },
            { tipo: 'Práctica', nombre: 'JDBC Tutorial', url: 'https://www.baeldung.com/java-jdbc' }
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
            'Cultura DevOps',
            'Containerización con Docker',
            'CI/CD con GitHub Actions',
            'Infrastructure as Code',
            'Monitoreo y logging'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos DevOps y Control de Versiones',
                semanas: 'Semana 1-3',
                descripcion: 'Cultura DevOps, Git avanzado y automatización básica.',
                contenidos: [
                    'Principios DevOps: CALMS',
                    'Git Flow y estrategias de branching',
                    'Pull Requests y Code Review',
                    'Semantic Versioning',
                    'Introducción a GitHub Actions',
                    'Automatización de tareas con scripts'
                ],
                actividades: [
                    'Configuración de flujo Git en equipo',
                    'Primer workflow de GitHub Actions',
                    'Automatización de validaciones de código'
                ]
            },
            {
                numero: 2,
                titulo: 'Docker y Containerización',
                semanas: 'Semana 4-5',
                descripcion: 'Containerización de aplicaciones con Docker.',
                contenidos: [
                    'Contenedores vs máquinas virtuales',
                    'Docker: imágenes, contenedores, volúmenes',
                    'Dockerfile: multi-stage builds',
                    'Docker Compose para multi-contenedor',
                    'Docker Hub y registros privados',
                    'Best practices para imágenes'
                ],
                actividades: [
                    'Containerización de aplicación Java/Python',
                    'Orquestación con Docker Compose',
                    'Push de imágenes a Docker Hub'
                ]
            },
            {
                numero: 3,
                titulo: 'CI/CD y Deployment',
                semanas: 'Semana 6-8',
                descripcion: 'Pipelines completos de integración y despliegue continuo.',
                contenidos: [
                    'Pipeline CI: build, test, lint, security scan',
                    'Pipeline CD: staging, production',
                    'Secrets y variables de entorno',
                    'Deploy a servicios cloud (Render, Railway)',
                    'Monitoreo con logs y métricas básicas',
                    'Rollback y estrategias de deployment'
                ],
                actividades: [
                    'Pipeline CI/CD completo',
                    'Deploy automatizado a la nube',
                    'Proyecto: Aplicación con DevOps completo'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' },
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' },
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' },
            { nombre: 'Bash', icon: 'bash-plain', iconType: 'devicon' }
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
            { tipo: 'Documentación', nombre: 'Docker Docs', url: 'https://docs.docker.com/' },
            { tipo: 'Tutorial', nombre: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions' },
            { tipo: 'Curso', nombre: 'DevOps Roadmap', url: 'https://roadmap.sh/devops' }
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
            'Razonamiento ético',
            'Responsabilidad profesional',
            'Pensamiento crítico',
            'Conciencia social',
            'Integridad profesional'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos de Ética',
                semanas: 'Semana 1-3',
                descripcion: 'Bases filosóficas y teorías éticas aplicadas.',
                contenidos: [
                    'Ética, moral y valores',
                    'Teorías éticas: deontología, utilitarismo, virtudes',
                    'Relativismo vs universalismo ético',
                    'Códigos de ética profesional (ACM, IEEE)',
                    'Responsabilidad del profesional TI'
                ],
                actividades: [
                    'Análisis de códigos de ética profesional',
                    'Debate sobre teorías éticas',
                    'Reflexión sobre valores profesionales'
                ]
            },
            {
                numero: 2,
                titulo: 'Ética en Tecnología',
                semanas: 'Semana 4-5',
                descripcion: 'Dilemas éticos específicos del sector tecnológico.',
                contenidos: [
                    'Privacidad y protección de datos (GDPR, LGPD)',
                    'Sesgos en algoritmos e IA',
                    'Propiedad intelectual y software libre',
                    'Ciberseguridad y hacking ético',
                    'Impacto ambiental de la tecnología'
                ],
                actividades: [
                    'Análisis de casos de violación de privacidad',
                    'Debate sobre sesgos algorítmicos',
                    'Investigación sobre green IT'
                ]
            },
            {
                numero: 3,
                titulo: 'Ética Aplicada y Proyecto',
                semanas: 'Semana 6-8',
                descripcion: 'Aplicación práctica de principios éticos en proyectos.',
                contenidos: [
                    'Toma de decisiones éticas en proyectos',
                    'Whistleblowing y conflictos de interés',
                    'Responsabilidad social empresarial en tech',
                    'Futuro del trabajo y automatización',
                    'Tecnología para el bien social'
                ],
                actividades: [
                    'Análisis de dilemas éticos reales',
                    'Proyecto: Propuesta de tech for good',
                    'Presentación de caso ético'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'Investigación', icon: 'fa-search', iconType: 'fontawesome' },
            { nombre: 'Presentaciones', icon: 'fa-file-powerpoint', iconType: 'fontawesome' },
            { nombre: 'Colaboración', icon: 'fa-users', iconType: 'fontawesome' }
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
            { tipo: 'Lectura', nombre: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics' },
            { tipo: 'Curso', nombre: 'Ethics in AI - Google', url: 'https://ai.google/responsibility/responsible-ai-practices/' }
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
            'SQL DQL avanzado',
            'JOINs y relaciones',
            'Funciones de agregación',
            'Subconsultas y CTEs',
            'Optimización de queries'
        ],
        experiencias: [
            {
                numero: 1,
                titulo: 'Fundamentos SQL y Consultas Básicas',
                semanas: 'Semana 1-3',
                descripcion: 'Sintaxis SQL básica y consultas sobre tablas individuales.',
                contenidos: [
                    'SELECT, FROM, WHERE, DISTINCT',
                    'Operadores de comparación y lógicos',
                    'ORDER BY, LIMIT, OFFSET',
                    'Funciones de texto: UPPER, LOWER, CONCAT',
                    'Funciones de fecha: DATE, EXTRACT',
                    'NULL y operador COALESCE'
                ],
                actividades: [
                    'Consultas sobre base de datos de ejemplo',
                    'Filtrado y ordenamiento de datos',
                    'Ejercicios de funciones integradas'
                ]
            },
            {
                numero: 2,
                titulo: 'JOINs y Agregaciones',
                semanas: 'Semana 4-5',
                descripcion: 'Consultas multi-tabla y funciones de agregación.',
                contenidos: [
                    'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN',
                    'Self-joins y cross joins',
                    'COUNT, SUM, AVG, MIN, MAX',
                    'GROUP BY y HAVING',
                    'Agregaciones con múltiples tablas',
                    'Optimización de JOINs'
                ],
                actividades: [
                    'Consultas con múltiples JOINs',
                    'Reportes con agregaciones',
                    'Análisis de datos con GROUP BY'
                ]
            },
            {
                numero: 3,
                titulo: 'Subconsultas y Funciones Avanzadas',
                semanas: 'Semana 6-8',
                descripcion: 'Subconsultas, CTEs y funciones de ventana.',
                contenidos: [
                    'Subconsultas escalares y de tabla',
                    'EXISTS, IN, ANY, ALL',
                    'Common Table Expressions (CTEs)',
                    'CTEs recursivos',
                    'Window Functions: ROW_NUMBER, RANK, LAG, LEAD',
                    'Particionamiento con OVER'
                ],
                actividades: [
                    'Consultas complejas con subconsultas',
                    'Análisis de rankings con Window Functions',
                    'Proyecto: Dashboard de análisis SQL'
                ]
            }
        ],
        tecnologias: [
            { nombre: 'PostgreSQL', icon: 'postgresql-plain', iconType: 'devicon' },
            { nombre: 'Oracle', icon: 'oracle-original', iconType: 'devicon' },
            { nombre: 'DBeaver', icon: 'fa-database', iconType: 'fontawesome' }
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
            { tipo: 'Práctica', nombre: 'SQLZoo', url: 'https://sqlzoo.net/' },
            { tipo: 'Tutorial', nombre: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
            { tipo: 'Documentación', nombre: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' }
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
            { nombre: 'Linux', icon: 'linux-plain', iconType: 'devicon' }
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
            { tipo: 'Curso', nombre: 'PortSwigger Academy', url: 'https://portswigger.net/web-security' }
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
            { nombre: 'PL/pgSQL', icon: 'fa-code', iconType: 'fontawesome' }
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
            { tipo: 'Práctica', nombre: 'SQL Performance Explained', url: 'https://use-the-index-luke.com/' }
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
            { nombre: 'Prometheus', icon: 'prometheus-original', iconType: 'devicon' }
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
            { tipo: 'Tutorial', nombre: 'Katacoda K8s', url: 'https://www.katacoda.com/courses/kubernetes' }
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
            { nombre: 'Draw.io', icon: 'fa-project-diagram', iconType: 'fontawesome' }
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
            { tipo: 'Estándar', nombre: 'IEEE 830', url: 'https://standards.ieee.org/' },
            { tipo: 'Tutorial', nombre: 'User Story Mapping', url: 'https://www.jpattonassociates.com/user-story-mapping/' },
            { tipo: 'Herramienta', nombre: 'Jira Software', url: 'https://www.atlassian.com/software/jira' }
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
            { nombre: 'Postman', icon: 'postman-plain', iconType: 'devicon' }
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
            { tipo: 'Herramienta', nombre: 'Spring Initializr', url: 'https://start.spring.io/' }
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
            { nombre: 'Miro', icon: 'fa-chalkboard', iconType: 'fontawesome' }
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
            { tipo: 'Tutorial', nombre: 'Atlassian Agile', url: 'https://www.atlassian.com/agile' }
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
            { nombre: 'JUnit', icon: 'junit-plain', iconType: 'devicon' }
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
            { tipo: 'Curso', nombre: 'Testing Spring Boot', url: 'https://www.baeldung.com/spring-boot-testing' }
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
            { nombre: 'Cucumber', icon: 'cucumber-plain', iconType: 'devicon' }
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
            { tipo: 'Herramienta', nombre: 'JMeter', url: 'https://jmeter.apache.org/' }
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
            { nombre: 'Tailwind', icon: 'tailwindcss-original', iconType: 'devicon' }
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
            { tipo: 'Curso', nombre: 'Frontend Masters React', url: 'https://frontendmasters.com/learn/react/' }
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
            { nombre: 'Structurizr', icon: 'fa-cubes', iconType: 'fontawesome' }
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
            { tipo: 'Tutorial', nombre: 'ADR GitHub', url: 'https://adr.github.io/' }
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
            { nombre: 'Android Studio', icon: 'android-plain', iconType: 'devicon' }
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
            { tipo: 'Curso', nombre: 'React Native Course', url: 'https://www.udemy.com/course/react-native-the-practical-guide/' }
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
            { nombre: 'Vercel', icon: 'vercel-original', iconType: 'devicon' }
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
            { tipo: 'Curso', nombre: 'Vercel Templates', url: 'https://vercel.com/templates/next.js' }
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
            { nombre: 'GitHub Actions', icon: 'github-original', iconType: 'devicon' }
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
            { tipo: 'Servicio', nombre: 'Firebase', url: 'https://firebase.google.com/' }
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
            { nombre: 'Docker', icon: 'docker-plain', iconType: 'devicon' }
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
            { tipo: 'Guía', nombre: 'Guía de Proyecto DuocUC', url: '#' },
            { tipo: 'Template', nombre: 'Plantillas de documentación', url: '#' },
            { tipo: 'Ejemplo', nombre: 'Proyectos anteriores', url: '#' }
        ],
        color: 'emerald',
        area: 'gestion'
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
