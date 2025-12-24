// Quiz Questions Database for Certification Practice

export interface Question {
    id: string;
    category: 'javascript' | 'python' | 'sql' | 'java' | 'aws' | 'docker';
    certification: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    question: string;
    code?: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const questions: Question[] = [
    // JavaScript Questions
    {
        id: 'js-001',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cuál es el resultado de typeof null?',
        code: 'console.log(typeof null);',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswer: 2,
        explanation: 'En JavaScript, typeof null retorna "object". Esto es un bug histórico que se mantiene por compatibilidad.'
    },
    {
        id: 'js-002',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Qué método se usa para agregar un elemento al final de un array?',
        options: ['unshift()', 'push()', 'pop()', 'shift()'],
        correctAnswer: 1,
        explanation: 'push() agrega elementos al final del array. unshift() los agrega al inicio, pop() remueve del final, y shift() del inicio.'
    },
    {
        id: 'js-003',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Cuál es el output de este código?',
        code: 'console.log(0.1 + 0.2 === 0.3);',
        options: ['true', 'false', 'undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'Debido a la representación de punto flotante en JavaScript, 0.1 + 0.2 da 0.30000000000000004, no exactamente 0.3.'
    },
    {
        id: 'js-004',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué es una closure en JavaScript?',
        options: [
            'Una función que se ejecuta inmediatamente',
            'Una función que tiene acceso al scope de su función padre',
            'Un método para cerrar conexiones',
            'Un tipo de loop'
        ],
        correctAnswer: 1,
        explanation: 'Una closure es una función que recuerda y tiene acceso a las variables del scope en el que fue creada, incluso después de que ese scope haya terminado de ejecutarse.'
    },
    {
        id: 'js-005',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre let y var?',
        options: [
            'No hay diferencia',
            'let tiene block scope, var tiene function scope',
            'var es más moderno que let',
            'let no puede ser reasignado'
        ],
        correctAnswer: 1,
        explanation: 'let tiene alcance de bloque (block scope), mientras que var tiene alcance de función (function scope). Además, let no sufre de hoisting de la misma manera que var.'
    },
    {
        id: 'js-006',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué método convierte un JSON string a objeto JavaScript?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
        correctAnswer: 0,
        explanation: 'JSON.parse() convierte un string JSON a un objeto JavaScript. JSON.stringify() hace lo contrario, convierte un objeto a string JSON.'
    },
    {
        id: 'js-007',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Qué output produce este código?',
        code: `const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);`,
        options: ['1', '2', 'undefined', 'Error'],
        correctAnswer: 0,
        explanation: 'Object.freeze() hace que un objeto sea inmutable. Intentar modificar una propiedad de un objeto congelado falla silenciosamente (o lanza error en strict mode).'
    },
    {
        id: 'js-008',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'intermediate',
        question: '¿Qué es el Event Loop en JavaScript?',
        options: [
            'Un tipo de loop for...of',
            'El mecanismo que maneja la ejecución asíncrona',
            'Un evento del DOM',
            'Una función para iterar eventos'
        ],
        correctAnswer: 1,
        explanation: 'El Event Loop es el mecanismo que permite a JavaScript ejecutar código asíncrono, manejando el call stack y las callback queues.'
    },
    {
        id: 'js-009',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'beginner',
        question: '¿Cómo se declara una constante en JavaScript?',
        options: ['var x = 5', 'let x = 5', 'const x = 5', 'constant x = 5'],
        correctAnswer: 2,
        explanation: 'const se usa para declarar constantes. Una vez asignado, el valor no puede ser reasignado (aunque objetos y arrays pueden ser mutados).'
    },
    {
        id: 'js-010',
        category: 'javascript',
        certification: 'JavaScript Developer',
        difficulty: 'advanced',
        question: '¿Cuál es el output?',
        code: `async function test() {
    return 1;
}
console.log(test());`,
        options: ['1', 'Promise { 1 }', 'undefined', 'Error'],
        correctAnswer: 1,
        explanation: 'Las funciones async siempre retornan una Promise. Aunque retornamos 1, el resultado es una Promise que resuelve a 1.'
    },

    // Python Questions
    {
        id: 'py-001',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Cuál es el output de este código?',
        code: 'print(type([]))',
        options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'set'>"],
        correctAnswer: 1,
        explanation: 'En Python, [] crea una lista (list), no un array. Los arrays son parte del módulo array.'
    },
    {
        id: 'py-002',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Qué método se usa para agregar un elemento a una lista?',
        options: ['add()', 'push()', 'append()', 'insert()'],
        correctAnswer: 2,
        explanation: 'append() agrega un elemento al final de la lista. insert() permite especificar la posición.'
    },
    {
        id: 'py-003',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Cuál es el output?',
        code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
        options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
        correctAnswer: 1,
        explanation: 'En Python, las listas son mutables y se pasan por referencia. y = x crea una referencia al mismo objeto, no una copia.'
    },
    {
        id: 'py-004',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Qué es una list comprehension?',
        code: '[x**2 for x in range(5)]',
        options: [
            'Un error de sintaxis',
            'Una forma concisa de crear listas',
            'Un tipo de loop',
            'Una función built-in'
        ],
        correctAnswer: 1,
        explanation: 'List comprehension es una forma elegante y concisa de crear listas en Python. El ejemplo crea [0, 1, 4, 9, 16].'
    },
    {
        id: 'py-005',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre == y is?',
        options: [
            'No hay diferencia',
            '== compara valores, is compara identidad',
            'is es más rápido que ==',
            '== solo funciona con números'
        ],
        correctAnswer: 1,
        explanation: '== compara si dos objetos tienen el mismo valor, mientras que is compara si son el mismo objeto en memoria.'
    },
    {
        id: 'py-006',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Qué hace el decorador @staticmethod?',
        options: [
            'Hace el método más rápido',
            'Define un método que no requiere self ni cls',
            'Hace el método privado',
            'Convierte el método en generador'
        ],
        correctAnswer: 1,
        explanation: '@staticmethod define un método que no recibe self (instancia) ni cls (clase), funcionando como una función regular dentro de la clase.'
    },
    {
        id: 'py-007',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'advanced',
        question: '¿Cuál es el output?',
        code: `def func(a, b=[]):
    b.append(a)
    return b

print(func(1))
print(func(2))`,
        options: ['[1] y [2]', '[1] y [1, 2]', '[1, 2] y [1, 2]', 'Error'],
        correctAnswer: 1,
        explanation: 'Los argumentos por defecto mutables (como listas) se evalúan una sola vez. La misma lista se reutiliza en cada llamada.'
    },
    {
        id: 'py-008',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'beginner',
        question: '¿Cómo se define un diccionario vacío?',
        options: ['[]', '{}', '()', 'dict[]'],
        correctAnswer: 1,
        explanation: '{} crea un diccionario vacío. [] crea una lista, () una tupla.'
    },
    {
        id: 'py-009',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'intermediate',
        question: '¿Qué es un generator en Python?',
        options: [
            'Una función que genera números aleatorios',
            'Una función que usa yield para retornar valores de forma lazy',
            'Un tipo de clase',
            'Una forma de crear listas'
        ],
        correctAnswer: 1,
        explanation: 'Un generator es una función que usa yield para retornar valores uno a la vez, manteniendo su estado entre llamadas.'
    },
    {
        id: 'py-010',
        category: 'python',
        certification: 'PCEP/PCAP',
        difficulty: 'advanced',
        question: '¿Qué es el GIL (Global Interpreter Lock)?',
        options: [
            'Un mecanismo de seguridad',
            'Un lock que permite solo un thread ejecutar Python a la vez',
            'Una herramienta de debugging',
            'Un tipo de variable global'
        ],
        correctAnswer: 1,
        explanation: 'El GIL es un mutex que protege el acceso a objetos Python, permitiendo solo un thread ejecutar bytecode a la vez, limitando el paralelismo real.'
    },

    // SQL Questions
    {
        id: 'sql-001',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre WHERE y HAVING?',
        options: [
            'No hay diferencia',
            'WHERE filtra filas, HAVING filtra grupos',
            'HAVING es más rápido',
            'WHERE solo funciona con números'
        ],
        correctAnswer: 1,
        explanation: 'WHERE filtra filas antes del agrupamiento, HAVING filtra después del GROUP BY sobre los grupos resultantes.'
    },
    {
        id: 'sql-002',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Qué hace DISTINCT?',
        options: [
            'Ordena los resultados',
            'Elimina filas duplicadas',
            'Cuenta filas',
            'Une tablas'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCT elimina filas duplicadas del resultado de una query.'
    },
    {
        id: 'sql-003',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre INNER JOIN y LEFT JOIN?',
        options: [
            'No hay diferencia',
            'INNER retorna solo coincidencias, LEFT retorna todas las filas de la tabla izquierda',
            'LEFT JOIN es más rápido',
            'INNER JOIN une más de 2 tablas'
        ],
        correctAnswer: 1,
        explanation: 'INNER JOIN retorna solo filas que coinciden en ambas tablas. LEFT JOIN retorna todas las filas de la tabla izquierda y las coincidencias de la derecha.'
    },
    {
        id: 'sql-004',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Qué función cuenta filas incluyendo NULL?',
        options: ['COUNT(*)', 'COUNT(column)', 'SUM()', 'TOTAL()'],
        correctAnswer: 0,
        explanation: 'COUNT(*) cuenta todas las filas incluyendo NULLs. COUNT(column) solo cuenta valores no NULL de esa columna.'
    },
    {
        id: 'sql-005',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué es una subquery correlacionada?',
        options: [
            'Una query anidada que no depende de la query externa',
            'Una query anidada que referencia columnas de la query externa',
            'Una query con JOIN',
            'Una query con UNION'
        ],
        correctAnswer: 1,
        explanation: 'Una subquery correlacionada hace referencia a columnas de la query externa, ejecutándose una vez por cada fila de la query principal.'
    },
    {
        id: 'sql-006',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'advanced',
        question: '¿Qué es un índice clustered?',
        options: [
            'Un índice secundario',
            'Un índice que determina el orden físico de los datos en la tabla',
            'Un índice para queries paralelas',
            'Un índice temporal'
        ],
        correctAnswer: 1,
        explanation: 'Un índice clustered determina el orden físico de almacenamiento de las filas. Solo puede haber uno por tabla.'
    },
    {
        id: 'sql-007',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'beginner',
        question: '¿Cuál es el orden correcto de las cláusulas SQL?',
        options: [
            'SELECT, WHERE, FROM, GROUP BY',
            'SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY',
            'FROM, SELECT, WHERE, ORDER BY',
            'SELECT, FROM, ORDER BY, WHERE'
        ],
        correctAnswer: 1,
        explanation: 'El orden correcto es: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.'
    },
    {
        id: 'sql-008',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué es normalización en bases de datos?',
        options: [
            'Proceso de optimizar queries',
            'Proceso de organizar datos para reducir redundancia',
            'Proceso de hacer backup',
            'Proceso de crear índices'
        ],
        correctAnswer: 1,
        explanation: 'La normalización organiza las tablas y relaciones para minimizar la redundancia de datos y mejorar la integridad.'
    },
    {
        id: 'sql-009',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'advanced',
        question: '¿Qué es ACID en bases de datos?',
        options: [
            'Un tipo de query',
            'Atomicity, Consistency, Isolation, Durability',
            'Un motor de base de datos',
            'Un lenguaje de programación'
        ],
        correctAnswer: 1,
        explanation: 'ACID son las propiedades que garantizan transacciones confiables: Atomicidad, Consistencia, Aislamiento y Durabilidad.'
    },
    {
        id: 'sql-010',
        category: 'sql',
        certification: 'SQL Fundamentals',
        difficulty: 'intermediate',
        question: '¿Qué hace COALESCE?',
        options: [
            'Une strings',
            'Retorna el primer valor no NULL de una lista',
            'Convierte tipos de datos',
            'Agrupa resultados'
        ],
        correctAnswer: 1,
        explanation: 'COALESCE retorna el primer valor no NULL de la lista de argumentos. Es útil para manejar NULLs.'
    },

    // AWS Questions
    {
        id: 'aws-001',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS se usa para almacenamiento de objetos?',
        options: ['EC2', 'S3', 'RDS', 'Lambda'],
        correctAnswer: 1,
        explanation: 'Amazon S3 (Simple Storage Service) es el servicio de almacenamiento de objetos de AWS, ideal para archivos, backups, y contenido estático.'
    },
    {
        id: 'aws-002',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué es EC2?',
        options: [
            'Base de datos relacional',
            'Servicio de computación en la nube (máquinas virtuales)',
            'Servicio de storage',
            'Servicio de red'
        ],
        correctAnswer: 1,
        explanation: 'Amazon EC2 (Elastic Compute Cloud) proporciona capacidad de computación escalable en la nube, permitiendo lanzar servidores virtuales.'
    },
    {
        id: 'aws-003',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Cuál es el modelo de responsabilidad compartida de AWS?',
        options: [
            'AWS es responsable de todo',
            'El cliente es responsable de todo',
            'AWS de la infraestructura, el cliente de sus datos y aplicaciones',
            'Solo aplica a empresas grandes'
        ],
        correctAnswer: 2,
        explanation: 'En el modelo de responsabilidad compartida, AWS gestiona la seguridad DE la nube (infraestructura), y el cliente gestiona la seguridad EN la nube (datos, apps, configuración).'
    },
    {
        id: 'aws-004',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS es serverless para ejecutar código?',
        options: ['EC2', 'ECS', 'Lambda', 'Lightsail'],
        correctAnswer: 2,
        explanation: 'AWS Lambda permite ejecutar código sin aprovisionar servidores. Solo pagas por el tiempo de ejecución.'
    },
    {
        id: 'aws-005',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Qué es una VPC en AWS?',
        options: [
            'Virtual Private Cloud - red virtual aislada',
            'Virtual Processing Center',
            'Very Private Connection',
            'Virtual Public Cloud'
        ],
        correctAnswer: 0,
        explanation: 'VPC (Virtual Private Cloud) es una red virtual aislada lógicamente en AWS donde puedes lanzar recursos.'
    },
    {
        id: 'aws-006',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre RDS y DynamoDB?',
        options: [
            'RDS es NoSQL, DynamoDB es SQL',
            'RDS es SQL relacional, DynamoDB es NoSQL',
            'No hay diferencia',
            'DynamoDB es más caro siempre'
        ],
        correctAnswer: 1,
        explanation: 'RDS es un servicio de base de datos relacional (MySQL, PostgreSQL, etc.), mientras DynamoDB es NoSQL key-value.'
    },
    {
        id: 'aws-007',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué servicio de AWS se usa para CDN (distribución de contenido)?',
        options: ['S3', 'CloudFront', 'Route 53', 'ELB'],
        correctAnswer: 1,
        explanation: 'Amazon CloudFront es el servicio de CDN que distribuye contenido globalmente con baja latencia.'
    },
    {
        id: 'aws-008',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'advanced',
        question: '¿Qué es AWS IAM?',
        options: [
            'Internet Access Manager',
            'Identity and Access Management',
            'Integrated Application Monitor',
            'Instance Administration Module'
        ],
        correctAnswer: 1,
        explanation: 'IAM (Identity and Access Management) permite gestionar usuarios, grupos, roles y permisos de acceso a recursos AWS.'
    },
    {
        id: 'aws-009',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'intermediate',
        question: '¿Qué clases de almacenamiento S3 son las más económicas para datos raramente accedidos?',
        options: [
            'S3 Standard',
            'S3 Glacier / Glacier Deep Archive',
            'S3 One Zone-IA',
            'S3 Intelligent-Tiering'
        ],
        correctAnswer: 1,
        explanation: 'S3 Glacier y Glacier Deep Archive son las opciones más económicas para archivado de largo plazo con acceso poco frecuente.'
    },
    {
        id: 'aws-010',
        category: 'aws',
        certification: 'AWS Cloud Practitioner',
        difficulty: 'beginner',
        question: '¿Qué es Route 53?',
        options: [
            'Servicio de routing de red',
            'Servicio de DNS',
            'Balanceador de carga',
            'Firewall'
        ],
        correctAnswer: 1,
        explanation: 'Amazon Route 53 es el servicio de DNS de AWS, que también ofrece health checks y routing policies.'
    },

    // Docker Questions
    {
        id: 'docker-001',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Cuál es la diferencia entre una imagen y un contenedor Docker?',
        options: [
            'No hay diferencia',
            'La imagen es el template, el contenedor es la instancia en ejecución',
            'El contenedor es el template',
            'La imagen solo existe en la nube'
        ],
        correctAnswer: 1,
        explanation: 'Una imagen Docker es un template inmutable. Un contenedor es una instancia en ejecución de esa imagen.'
    },
    {
        id: 'docker-002',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Qué comando lista los contenedores en ejecución?',
        options: ['docker images', 'docker ps', 'docker list', 'docker containers'],
        correctAnswer: 1,
        explanation: 'docker ps lista los contenedores en ejecución. docker ps -a lista todos, incluyendo los detenidos.'
    },
    {
        id: 'docker-003',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué instrucción de Dockerfile se usa para ejecutar comandos durante el build?',
        options: ['CMD', 'RUN', 'EXEC', 'BUILD'],
        correctAnswer: 1,
        explanation: 'RUN ejecuta comandos durante el build de la imagen. CMD define el comando por defecto cuando el contenedor inicia.'
    },
    {
        id: 'docker-004',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Cuál es la diferencia entre CMD y ENTRYPOINT?',
        options: [
            'No hay diferencia',
            'CMD puede ser sobrescrito al ejecutar, ENTRYPOINT define el ejecutable principal',
            'ENTRYPOINT es más antiguo',
            'CMD es solo para scripts'
        ],
        correctAnswer: 1,
        explanation: 'ENTRYPOINT configura el contenedor como un ejecutable. CMD proporciona argumentos por defecto que pueden ser sobrescritos.'
    },
    {
        id: 'docker-005',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Cómo se expone un puerto en un contenedor Docker?',
        options: [
            'docker run -p 80:80 image',
            'docker run --port 80 image',
            'docker run -open 80 image',
            'docker expose 80 image'
        ],
        correctAnswer: 0,
        explanation: 'La flag -p (publish) mapea puertos. -p host:container, por ejemplo -p 8080:80 mapea el puerto 80 del contenedor al 8080 del host.'
    },
    {
        id: 'docker-006',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué es un Docker volume?',
        options: [
            'Un tipo de red',
            'Un mecanismo para persistir datos fuera del contenedor',
            'Un contenedor especial',
            'Una imagen comprimida'
        ],
        correctAnswer: 1,
        explanation: 'Los volumes permiten persistir datos generados por contenedores, almacenándolos fuera del sistema de archivos del contenedor.'
    },
    {
        id: 'docker-007',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'advanced',
        question: '¿Qué es Docker Compose?',
        options: [
            'Un editor de Dockerfiles',
            'Una herramienta para definir y ejecutar aplicaciones multi-contenedor',
            'Un sistema de monitoreo',
            'Un registro de imágenes'
        ],
        correctAnswer: 1,
        explanation: 'Docker Compose permite definir y ejecutar aplicaciones multi-contenedor usando un archivo YAML (docker-compose.yml).'
    },
    {
        id: 'docker-008',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'intermediate',
        question: '¿Qué hace la instrucción COPY en un Dockerfile?',
        options: [
            'Copia archivos del contenedor al host',
            'Copia archivos del contexto de build a la imagen',
            'Clona un repositorio git',
            'Duplica una capa de la imagen'
        ],
        correctAnswer: 1,
        explanation: 'COPY copia archivos o directorios del contexto de build (host) a la imagen Docker.'
    },
    {
        id: 'docker-009',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'advanced',
        question: '¿Qué es un multi-stage build?',
        options: [
            'Construir múltiples imágenes a la vez',
            'Usar múltiples FROM en un Dockerfile para reducir el tamaño final',
            'Ejecutar múltiples CMD',
            'Usar varios registros'
        ],
        correctAnswer: 1,
        explanation: 'Multi-stage builds permiten usar múltiples FROM en un Dockerfile, copiando solo los artefactos necesarios a la imagen final, reduciendo su tamaño.'
    },
    {
        id: 'docker-010',
        category: 'docker',
        certification: 'Docker Certified Associate',
        difficulty: 'beginner',
        question: '¿Dónde se almacenan las imágenes Docker por defecto?',
        options: [
            'En la nube',
            'En Docker Hub',
            'En el sistema de archivos local del Docker daemon',
            'En el contenedor'
        ],
        correctAnswer: 2,
        explanation: 'Las imágenes se almacenan localmente en el sistema de archivos del Docker daemon. Docker Hub es un registro remoto opcional.'
    }
];

export const categories = {
    javascript: {
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        color: '#f7df1e',
        certifications: ['JavaScript Developer', 'Salesforce JS-Dev-I']
    },
    python: {
        name: 'Python',
        icon: 'fab fa-python',
        color: '#3776ab',
        certifications: ['PCEP', 'PCAP']
    },
    sql: {
        name: 'SQL',
        icon: 'fas fa-database',
        color: '#00758f',
        certifications: ['SQL Fundamentals', 'Oracle SQL']
    },
    aws: {
        name: 'AWS',
        icon: 'fab fa-aws',
        color: '#ff9900',
        certifications: ['Cloud Practitioner', 'Solutions Architect']
    },
    docker: {
        name: 'Docker',
        icon: 'fab fa-docker',
        color: '#2496ed',
        certifications: ['Docker Certified Associate']
    }
};

export function getQuestionsByCategory(category: string): Question[] {
    return questions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: string): Question[] {
    return questions.filter(q => q.difficulty === difficulty);
}

export function getRandomQuestions(count: number, category?: string, difficulty?: string): Question[] {
    let filtered = [...questions];

    if (category) {
        filtered = filtered.filter(q => q.category === category);
    }
    if (difficulty) {
        filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Shuffle and take count
    return filtered
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}
