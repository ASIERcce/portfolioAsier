import { useInView } from '../hooks/useInView'

function ToolCard({ icon, name, description, index, highlight }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-dark-700 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 ${
        highlight
          ? 'border-accent-blue/30 hover:border-accent-blue/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
          : 'border-dark-600 hover:border-accent-purple/40'
      } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: isInView ? `${index * 100}ms` : '0ms',
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default ToolCard
