import AnimatedCards from './demos/AnimatedCards'
import CounterDemo from './demos/CounterDemo'
import MorphGrid from './demos/MorphGrid'

function DemosSection() {
  return (
    <section id="demos" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Demos Interactivos
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Explora lo que se puede construir con React y Tailwind CSS. Cada demo es completamente interactivo.
        </p>

        <div className="space-y-20">
          <DemoWrapper
            title="Tarjetas 3D Flip"
            description="Haz click en las tarjetas para voltearlas. Demuestra useState, renderizado condicional y transforms CSS 3D."
          >
            <AnimatedCards />
          </DemoWrapper>

          <DemoWrapper
            title="Contadores Animados"
            description="Los contadores se activan al hacer scroll. Demuestra custom hooks, requestAnimationFrame y useRef."
          >
            <CounterDemo />
          </DemoWrapper>

          <DemoWrapper
            title="Grid Morfable"
            description="Cambia entre layouts y mezcla los elementos. Demuestra gestion de estado con arrays y CSS Grid dinamico."
          >
            <MorphGrid />
          </DemoWrapper>
        </div>
      </div>
    </section>
  )
}

function DemoWrapper({ title, description, children }) {
  return (
    <div className="bg-dark-700 rounded-2xl border border-dark-600 overflow-hidden">
      <div className="p-6 border-b border-dark-600">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

export default DemosSection
