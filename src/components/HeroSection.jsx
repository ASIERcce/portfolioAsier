function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-pink/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent opacity-0 animate-fade-in"
        >
          Hola, soy Asier
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-400 mb-6 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Desarrollador Frontend
        </p>

        <p
          className="text-lg text-gray-500 mb-10 max-w-xl mx-auto opacity-0 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          Creo experiencias web modernas, interactivas y con estilo usando React y Tailwind CSS.
        </p>

        <a
          href="#demos"
          className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.7s' }}
        >
          Ver mis demos
        </a>
      </div>
    </section>
  )
}

export default HeroSection
