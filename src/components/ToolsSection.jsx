import ToolCard from './ToolCard'

const tools = [
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
  {
    icon: '🌐',
    name: 'HTML5 / CSS3',
    description: 'Los fundamentos de la web, semanticos y accesibles.',
    highlight: false,
  },
]

function ToolsSection() {
  return (
    <section id="herramientas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Herramientas que utilizo
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Estas son las tecnologias con las que trabajo para crear experiencias web modernas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} {...tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
