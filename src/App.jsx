import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Esp32Project from './pages/Esp32Project'
import ThroneFinderProject from './pages/ThroneFinderProject'
import AutomatedGameProject from './pages/AutomatedGameProject'
import GolfLaunchProject from './pages/GolfLaunchProject'

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/projects/esp32-audio"
          element={<Esp32Project />}
        />
        <Route
          path="/projects/throne-finder"
          element={<ThroneFinderProject />}
        />
        <Route
          path="/projects/automated-game"
          element={<AutomatedGameProject />}
        />
        <Route
          path="/projects/golf-launch-monitor"
          element={<GolfLaunchProject />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App