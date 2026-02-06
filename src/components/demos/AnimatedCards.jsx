import { useState } from 'react'

const cards = [
  {
    title: 'Rendimiento',
    icon: '⚡',
    back: 'React optimiza el renderizado con su Virtual DOM, actualizando solo los componentes que cambian.',
    gradient: 'from-accent-blue to-accent-cyan',
  },
  {
    title: 'Diseno',
    icon: '🎨',
    back: 'Tailwind CSS permite crear interfaces consistentes y responsivas con clases de utilidad.',
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    title: 'Escalabilidad',
    icon: '📦',
    back: 'La arquitectura basada en componentes de React facilita escalar aplicaciones complejas.',
    gradient: 'from-accent-cyan to-accent-blue',
  },
]

function AnimatedCards() {
  const [flipped, setFlipped] = useState([false, false, false])

  const toggleCard = (index) => {
    setFlipped((prev) => prev.map((f, i) => (i === index ? !f : f)))
  }

  const toggleAll = () => {
    const allFlipped = flipped.every(Boolean)
    setFlipped(flipped.map(() => !allFlipped))
  }

  return (
    <div>
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleAll}
          className="px-6 py-2 bg-dark-600 border border-dark-600 rounded-lg text-sm text-gray-300 hover:border-accent-blue/50 hover:text-white transition-all duration-200"
        >
          {flipped.every(Boolean) ? 'Mostrar frente' : 'Voltear todas'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="h-56 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => toggleCard(index)}
          >
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-dark-800 rounded-xl border border-dark-600 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-200"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-5xl">{card.icon}</span>
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="text-xs text-gray-500">Click para voltear</p>
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center p-6`}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <p className="text-white text-center text-sm leading-relaxed">
                  {card.back}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCards
