# Portfolio de Asier — Desarrollador Fullstack

Portfolio personal construido con **React** y **Tailwind CSS** que muestra mis habilidades como desarrollador fullstack, mis herramientas de trabajo y proyectos reales.

## Tecnologias utilizadas

| Area | Tecnologias |
|------|-------------|
| **Frontend** | React 19, Tailwind CSS 4, JavaScript ES6+, HTML5/CSS3 |
| **Backend** | Laravel, PHP, APIs REST, WebSockets |
| **Base de datos** | MySQL, Eloquent ORM |
| **Build** | Vite 7, ESLint |
| **Control de versiones** | Git, GitHub |

## Estructura del proyecto

```
src/
├── main.jsx                    # Punto de entrada de React
├── App.jsx                     # Componente raiz
├── index.css                   # Estilos globales + tema Tailwind
├── assets/
│   └── react.svg
├── components/
│   ├── Navbar.jsx              # Barra de navegacion fija (desktop + mobile)
│   ├── HeroSection.jsx         # Seccion hero con foto de perfil
│   ├── ToolsSection.jsx        # Stack tecnologico (Frontend / Backend / DevTools)
│   ├── ProjectsSection.jsx     # Seccion de proyectos reales
│   ├── DemosSection.jsx        # Demos interactivas
│   ├── ToolCard.jsx            # Tarjeta reutilizable de herramienta
│   ├── Footer.jsx              # Pie de pagina con enlace a GitHub
│   └── demos/
│       ├── AnimatedCards.jsx   # Demo de tarjetas 3D con flip
│       ├── CounterDemo.jsx     # Contadores animados con SVG
│       └── MorphGrid.jsx      # Grid con layouts dinamicos
└── hooks/
    ├── useInView.js            # Hook de Intersection Observer
    └── useCounter.js           # Hook de contador animado
```

## Secciones del portfolio

### Hero
Presentacion personal con foto de perfil, titulo de "Desarrollador Fullstack" y descripcion sobre mi experiencia con React, Laravel, APIs y WebSockets.

### Stack tecnologico
Dividido en tres categorias:
- **Frontend**: React JS, Tailwind CSS, JavaScript, HTML5/CSS3
- **Backend**: Laravel, APIs REST, WebSockets, Bases de datos (MySQL)
- **Herramientas de desarrollo**: Vite, Git

### Proyectos

#### Parking ANPR Manager
Aplicacion web fullstack que gestiona las camaras de un parking con reconocimiento automatico de matriculas (ANPR):
- Integracion con camaras IP Hikvision via API/SDK
- Reconocimiento automatico de matriculas para registrar entradas y salidas
- Almacenamiento en base de datos MySQL
- Visualizacion en DataTable interactiva con busqueda, filtros y paginacion
- **Stack**: Laravel, React, MySQL, Hikvision SDK, DataTables, API REST

### Demos interactivas
Tres demos que muestran capacidades de React:
1. **Animated Cards** — Tarjetas 3D con flip y perspectiva CSS
2. **Counter Demo** — Contadores animados con anillo SVG y easing
3. **Morph Grid** — Grid con layouts intercambiables (grid/lista/mosaico)

## Instalacion y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de produccion
npm run build
```

## Imagen de perfil

Coloca tu foto en `public/profile.jpg` para que aparezca en la seccion hero.

## Despliegue

El proyecto esta configurado con base path `/portfolioAsier/` para despliegue en subdirectorio (GitHub Pages u otro hosting).

## Autor

**Asier** — [GitHub](https://github.com/ASIERcce)
