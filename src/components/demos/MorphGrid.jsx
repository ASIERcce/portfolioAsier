import { useState } from 'react'

const initialTiles = [
  { id: 1, name: 'Aurora', gradient: 'from-accent-blue to-accent-cyan' },
  { id: 2, name: 'Nebula', gradient: 'from-accent-purple to-accent-pink' },
  { id: 3, name: 'Solar', gradient: 'from-yellow-500 to-orange-500' },
  { id: 4, name: 'Ocean', gradient: 'from-accent-cyan to-green-500' },
  { id: 5, name: 'Cosmos', gradient: 'from-accent-pink to-accent-purple' },
  { id: 6, name: 'Forest', gradient: 'from-green-500 to-accent-cyan' },
]

const layouts = [
  { name: 'Cuadricula', value: 'grid' },
  { name: 'Lista', value: 'list' },
  { name: 'Mosaico', value: 'mosaic' },
]

function MorphGrid() {
  const [tiles, setTiles] = useState(initialTiles)
  const [layout, setLayout] = useState('grid')
  const [selected, setSelected] = useState(null)

  const shuffle = () => {
    setTiles((prev) => {
      const shuffled = [...prev]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    })
  }

  const gridClass = {
    grid: 'grid-cols-2 md:grid-cols-3',
    list: 'grid-cols-1 max-w-md mx-auto',
    mosaic: 'grid-cols-2 md:grid-cols-3',
  }

  const tileClass = (_tile, index) => {
    if (layout === 'mosaic') {
      if (index === 0) return 'md:col-span-2 md:row-span-2 h-full'
    }
    return ''
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        {layouts.map((l) => (
          <button
            key={l.value}
            onClick={() => setLayout(l.value)}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              layout === l.value
                ? 'bg-accent-blue text-white'
                : 'bg-dark-600 text-gray-400 hover:text-white border border-dark-600 hover:border-accent-blue/30'
            }`}
          >
            {l.name}
          </button>
        ))}
        <button
          onClick={shuffle}
          className="px-4 py-2 bg-dark-600 border border-dark-600 rounded-lg text-sm text-gray-400 hover:text-white hover:border-accent-purple/50 transition-all duration-200"
        >
          Mezclar
        </button>
      </div>

      {/* Grid */}
      <div className={`grid ${gridClass[layout]} gap-4 transition-all duration-500`}>
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            onClick={() => setSelected(selected === tile.id ? null : tile.id)}
            className={`bg-gradient-to-br ${tile.gradient} rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 ${
              layout === 'list' ? 'h-20' : 'h-32'
            } ${tileClass(tile, index)} ${
              selected === tile.id
                ? 'ring-2 ring-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : ''
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className={`font-semibold text-white/90 ${
                layout === 'list' ? 'text-lg' : 'text-base'
              }`}>
                {tile.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected info */}
      {selected && (
        <div className="mt-6 p-4 bg-dark-800 rounded-xl border border-dark-600 text-center animate-fade-in">
          <p className="text-gray-400 text-sm">
            Elemento seleccionado:{' '}
            <span className="text-white font-semibold">
              {tiles.find((t) => t.id === selected)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default MorphGrid
