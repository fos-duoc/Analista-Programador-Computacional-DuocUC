/**
 * Content Collections Configuration
 * Enterprise-grade schema definitions with Zod validation
 *
 * Based on:
 * - Astro 5.x Content Layer API
 * - Industry best practices for educational content management
 */

import { defineCollection, z } from 'astro:content';

// ============================================================================
// QUIZ QUESTIONS COLLECTION
// ============================================================================

const quizCategoryEnum = z.enum([
    'javascript',
    'python',
    'sql',
    'java',
    'aws',
    'docker',
    'snowflake',
    'databricks',
    'linux',
    'hardware',
    'architecture',
    'devops',
    'testing',
    'security'
]);

const difficultyEnum = z.enum(['beginner', 'intermediate', 'advanced']);

const quizSchema = z.object({
    id: z.string().regex(/^[a-z]+-\d{3}$/, 'ID must be in format: category-001'),
    category: quizCategoryEnum,
    certification: z.string().min(1),
    difficulty: difficultyEnum,
    question: z.string().min(10),
    code: z.string().optional(),
    options: z.array(z.string()).length(4, 'Must have exactly 4 options'),
    correctAnswer: z.number().min(0).max(3),
    explanation: z.string().min(20),
    // Metadata adicional para analytics y filtrado
    tags: z.array(z.string()).optional(),
    relatedSubject: z.string().optional(), // Código asignatura DuocUC
    lastUpdated: z.date().optional(),
});

const quizCollection = defineCollection({
    type: 'data',
    schema: quizSchema,
});

// ============================================================================
// BIMESTRES COLLECTION
// ============================================================================

const bimestreSchema = z.object({
    id: z.string(),
    number: z.number().min(1).max(17),
    name: z.string(),
    year: z.number().min(1).max(4),
    program: z.enum(['APC', 'IDS']),
    period: z.string(), // "B01", "B02", etc.
    subjects: z.array(z.object({
        code: z.string(),
        name: z.string(),
        credits: z.number().optional(),
        folder: z.string().optional(), // Ruta a carpeta GitHub
    })),
    competencies: z.array(z.string()),
    milestone: z.string().optional(),
});

const bimestresCollection = defineCollection({
    type: 'data',
    schema: bimestreSchema,
});

// ============================================================================
// TECHNOLOGY STACK COLLECTION
// ============================================================================

const techStackSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum([
        'languages',
        'frontend',
        'backend',
        'databases',
        'cloud',
        'devops',
        'data-engineering',
        'mobile',
        'testing',
        'ai-ml',
        'bi-visualization',
        'fundamentals',
        'practices'
    ]),
    icon: z.string(),
    iconType: z.enum(['devicon', 'fontawesome', 'simpleicons', 'img']),
    url: z.string().url(),
    description: z.string(),
    useCase: z.string().optional(),
    stats: z.object({
        percentage: z.number().optional(),
        source: z.string().optional(),
        trend: z.enum(['up', 'down', 'stable', 'hot']).optional(),
    }).optional(),
    isHot: z.boolean().default(false),
    relatedBimestres: z.array(z.string()).optional(),
});

const techStackCollection = defineCollection({
    type: 'data',
    schema: techStackSchema,
});

// ============================================================================
// CERTIFICATIONS COLLECTION
// ============================================================================

const certificationSchema = z.object({
    id: z.string(),
    name: z.string(),
    provider: z.string(),
    category: z.enum([
        'cloud',
        'development',
        'devops',
        'data',
        'agile',
        'security',
        'architecture',
        'ids-advanced'
    ]),
    level: z.enum(['entry', 'associate', 'professional', 'expert']),
    url: z.string().url(),
    price: z.object({
        amount: z.number(),
        currency: z.string().default('USD'),
        isFree: z.boolean().default(false),
    }),
    iconClass: z.string(),
    isHot: z.boolean().default(false),
    prerequisites: z.array(z.string()).optional(),
    relatedSubjects: z.array(z.string()).optional(),
});

const certificationsCollection = defineCollection({
    type: 'data',
    schema: certificationSchema,
});

// ============================================================================
// DECISION GUIDES COLLECTION
// ============================================================================

const decisionGuideSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.enum([
        'database',
        'architecture',
        'cloud',
        'frontend',
        'backend',
        'devops',
        'testing'
    ]),
    icon: z.string(),
    questions: z.array(z.object({
        id: z.string(),
        question: z.string(),
        options: z.array(z.object({
            label: z.string(),
            value: z.string(),
            leadsTo: z.string().optional(), // Next question or recommendation
        })),
    })),
    recommendations: z.array(z.object({
        id: z.string(),
        technology: z.string(),
        description: z.string(),
        pros: z.array(z.string()),
        cons: z.array(z.string()),
        bestFor: z.array(z.string()),
        resources: z.array(z.object({
            title: z.string(),
            url: z.string().url(),
            type: z.enum(['docs', 'tutorial', 'video', 'course']),
        })).optional(),
    })),
});

const decisionGuidesCollection = defineCollection({
    type: 'data',
    schema: decisionGuideSchema,
});

// ============================================================================
// EXPORT COLLECTIONS
// ============================================================================

export const collections = {
    'quiz': quizCollection,
    'bimestres': bimestresCollection,
    'tech-stack': techStackCollection,
    'certifications': certificationsCollection,
    'decision-guides': decisionGuidesCollection,
};
