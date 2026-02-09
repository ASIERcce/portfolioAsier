import ToolCard from './ToolCard'

const frontendTools = [
  {
    icon: '⚛️',
    name: 'React JS',
    description: 'Mi libreria principal para construir interfaces interactivas y componentes reutilizables.',
    highlight: true,
  },
  {
    icon: '🎨',
    name: 'Tailwind CSS',
    description: 'Estilizado rapido y consistente con clases de utilidad directamente en el markup.',
    highlight: true,
  },
  {
    icon: '⚡',
    name: 'JavaScript',
    description: 'La base de todo. ES6+, async/await y manipulacion del DOM.',
    highlight: false,
  },
  {
    icon: '🌐',
    name: 'HTML5 / CSS3',
    description: 'Los fundamentos de la web, semanticos y accesibles.',
    highlight: false,
  },
]

const backendTools = [
  {
    icon: '🔶',
    name: 'Laravel',
    description: 'Framework PHP para backend robusto: Eloquent ORM, migraciones, middlewares y mas.',
    highlight: true,
  },
  {
    icon: '🔗',
    name: 'APIs REST',
    description: 'Diseno e implementacion de APIs RESTful con autenticacion, validacion y documentacion.',
    highlight: true,
  },
  {
    icon: '📡',
    name: 'WebSockets',
    description: 'Comunicacion en tiempo real con Laravel Broadcasting, Pusher y eventos en vivo.',
    highlight: false,
  },
  {
    icon: '🗄️',
    name: 'Bases de datos',
    description: 'MySQL, migraciones, seeders, relaciones Eloquent y optimizacion de consultas.',
    highlight: false,
  },
]

const devTools = [
  {
    icon: '🚀',
    name: 'Vite',
    description: 'Herramienta de build ultrarapida para desarrollo moderno.',
    highlight: false,
  },
  {
    icon: '🔧',
    name: 'Git',
    description: 'Control de versiones para gestionar codigo de forma profesional.',
    highlight: false,
  },
]

function ToolsSection() {
  return (
    <section id="herramientas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Mi stack tecnologico
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Tecnologias que domino para desarrollar aplicaciones web completas, del frontend al backend.
        </p>

        {/* Frontend */}
        <h3 className="text-xl font-semibold text-accent-blue mb-6">Frontend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {frontendTools.map((tool, index) => (
            <ToolCard key={tool.name} {...tool} index={index} />
          ))}
        </div>

        {/* Backend */}
        <h3 className="text-xl font-semibold text-accent-purple mb-6">Backend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {backendTools.map((tool, index) => (
            <ToolCard key={tool.name} {...tool} index={index} />
          ))}
        </div>

        {/* DevTools */}
        <h3 className="text-xl font-semibold text-accent-cyan mb-6">Herramientas de desarrollo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devTools.map((tool, index) => (
            <ToolCard key={tool.name} {...tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
