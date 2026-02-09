import useInView from '../hooks/useInView'

const projects = [
  {
    title: 'Parking ANPR Manager',
    subtitle: 'Gestion de parking con reconocimiento de matriculas',
    description:
      'Aplicacion web fullstack que gestiona las camaras de un parking mediante integracion con camaras Hikvision. Utiliza reconocimiento automatico de matriculas (ANPR) para registrar entradas y salidas de vehiculos en tiempo real.',
    features: [
      'Integracion con camaras IP Hikvision via API/SDK',
      'Reconocimiento automatico de matriculas (ANPR)',
      'Registro de entradas y salidas con fecha y hora',
      'DataTable interactiva con busqueda, filtros y paginacion',
      'Base de datos MySQL para almacenar registros historicos',
      'Dashboard con estadisticas de ocupacion en tiempo real',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'Hikvision SDK', 'DataTables', 'API REST'],
    gradient: 'from-accent-blue to-accent-cyan',
  },
]

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-dark-700/50 border border-dark-600 rounded-2xl overflow-hidden transition-all duration-700 hover:border-accent-blue/50 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-accent-blue text-sm font-medium mb-4">{project.subtitle}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                Funcionalidades principales
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-accent-cyan mt-0.5">&#9654;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-dark-600 text-gray-300 border border-dark-600 hover:border-accent-purple/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Proyectos
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Aplicaciones reales en las que he trabajado, combinando frontend y backend.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
