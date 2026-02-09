import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ToolsSection from './components/ToolsSection'
import ProjectsSection from './components/ProjectsSection'
import DemosSection from './components/DemosSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <ProjectsSection />
      <DemosSection />
      <Footer />
    </div>
  )
}

export default App
