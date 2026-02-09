import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'

const colorMap = {
  'accent-blue': { text: 'text-accent-blue', bg: 'bg-accent-blue' },
  'accent-purple': { text: 'text-accent-purple', bg: 'bg-accent-purple' },
  'accent-cyan': { text: 'text-accent-cyan', bg: 'bg-accent-cyan' },
}

const stats = [
  { label: 'Proyectos Completados', target: 2, color: 'accent-blue' },
  { label: 'Tecnologias Dominadas', target: 10, color: 'accent-purple' },
  { label: 'Tazas de Cafe', target: 1420, color: 'accent-cyan' },
]

function StatCounter({ label, target, color, shouldStart }) {
  const count = useCounter(target, 2000, shouldStart)
  const progress = target > 0 ? count / target : 0
  const circumference = 2 * Math.PI * 40
  const colors = colorMap[color]

  return (
    <div className="flex flex-col items-center gap-4">
      {/* SVG ring */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="currentColor"
            className="text-dark-600"
            strokeWidth="6"
          />
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            className={colors.text}
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{count.toLocaleString()}</span>
        </div>
      </div>

      {/* Label */}
      <p className="text-gray-400 text-sm text-center">{label}</p>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors.bg} rounded-full transition-all duration-300`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}

function CounterDemo() {
  const [ref, isInView] = useInView()
  const [key, setKey] = useState(0)

  const handleReset = () => {
    setKey((k) => k + 1)
    // Small delay to allow reset to take effect before restarting
    setTimeout(() => setKey((k) => k + 1), 50)
  }

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" key={key}>
        {stats.map((stat) => (
          <StatCounter
            key={`${stat.label}-${key}`}
            {...stat}
            shouldStart={isInView}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-dark-600 border border-dark-600 rounded-lg text-sm text-gray-300 hover:border-accent-cyan/50 hover:text-white transition-all duration-200"
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}

export default CounterDemo
