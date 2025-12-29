# CLAUDE.md

Este archivo proporciona orientación para Claude Code cuando trabaja con este repositorio.

## Comandos de Desarrollo

```bash
# Desarrollo local
cd astro-site && npm run dev      # Servidor en localhost:4321

# Build para producción
cd astro-site && npm run build    # Output: ../docs (GitHub Pages)

# Preview del build
cd astro-site && npm run preview
```

## Repositorios (Multi-Repo Sync)

El proyecto se sincroniza en 4 repositorios:

| Plataforma | Remote | URL |
|------------|--------|-----|
| GitHub | origin | https://github.com/fos-duoc/Analista-Programador-Computacional-DuocUC |
| GitLab | gitlab | https://gitlab.com/fos-duoc/analista-programador-computacional-duocuc |
| Azure DevOps | azure | https://dev.azure.com/fos-duoc/Analista-Programador-Computacional-DuocUC/_git/Analista-Programador-Computacional-DuocUC |
| Bitbucket | bitbucket | https://bitbucket.org/fos-duoc/analista-programador-computacional-duocuc |

```bash
# Push a todos los repos
git push origin main && git push gitlab main && git push azure main && git push bitbucket main
```

## Arquitectura del Proyecto

```
/
├── astro-site/              # Sitio Astro (source)
│   ├── src/
│   │   ├── components/      # 45+ componentes .astro
│   │   ├── layouts/         # Layout.astro principal
│   │   └── pages/           # Rutas del sitio
│   ├── public/assets/       # CSS, JS, imágenes
│   └── astro.config.mjs     # Configuración Astro
├── docs/                    # Build output (GitHub Pages)
├── Bimestre-01/ ... Bimestre-17/  # Materiales académicos
└── _Recursos-Adicionales/   # Mallas curriculares, PDFs
```

## Sitio Web

- **URL**: https://fos-duoc.github.io/Analista-Programador-Computacional-DuocUC/
- **Deploy**: GitHub Pages desde `/docs`
- **Framework**: Astro 5.x con View Transitions

## Componentes Clave

- `DataPipeline.astro` - Visualizaciones de pipelines de datos (10 modos)
- `TechStack2025.astro` - Stack tecnológico con filtros y fuentes de datos
- `PlanEstudiosHero.astro` - Plan de estudios 17 bimestres
- `ArchitectureSection.astro` - Patrones de arquitectura
- `Layout.astro` - Layout principal con tooltips, scroll buttons, theme toggle

## Iconos

El proyecto usa múltiples fuentes de iconos:
- **Devicon**: `<i class="devicon-python-plain"></i>`
- **Font Awesome**: `<i class="fas fa-database"></i>`
- **Simple Icons CDN**: `<img src="https://cdn.simpleicons.org/snowflake/29B5E8">`

Algunos iconos de Simple Icons no existen - usar Font Awesome como fallback.

## Reglas de Commits

- Usar commits descriptivos en español o inglés
- NO incluir: "Claude", "Claude AI", "Co-Authored-By: Claude", "AI", "Generated with Claude Code"
- NO incluir referencias a herramientas de IA
