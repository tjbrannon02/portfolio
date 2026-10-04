import { Link } from 'react-router-dom'
import '../App.css'
function Home() {
  return (
    <div className="portfolio">

      <main>
        {/* Hero */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER ENGINEER</p>

            <h1>
              Building at the intersection of
              <span> hardware & software.</span>
            </h1>

            <p className="hero-description">
              I'm T.J. Brannon, a Computer Engineering student at Clemson
              University interested in embedded systems, firmware, and
              software development.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="button primary">
                View My Work
              </Link>

              <Link to="/contact" className="button secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>

          <h2>Engineer. Builder. Problem Solver.</h2>

          <p className="section-text">
            I am focused on understanding how hardware and software work together. 
            I enjoy building projects that combine embedded systems, electronics, 
            programming, and practical problem solving. I am interested in every 
            part of the field and enjoy creating intuitive solutions to fix problems.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <p className="section-label">02 — SKILLS</p>

          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming</h3>
              <p>C/C++, Python, JavaScript, MATLAB, SQL,
                Beginner Prolog
              </p>
            </div>

            <div className="skill-card">
              <h3>Embedded Systems</h3>
              <p>ESP32, microcontrollers, sensors, I2S, firmware</p>
            </div>

            <div className="skill-card">
              <h3>Web Development</h3>
              <p>React, Vite, Django, REST APIs</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Linux, Arduino IDE, MATLAB</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <p className="section-label">03 — PROJECTS</p>

          <h2>Selected Projects</h2>

          <div className="projects-grid">
            
            <Link to="/projects/esp32-audio" className="project-card">
              <p className="project-number">01</p>
              <h3>ESP32 Audio System</h3>
              

              <div className="project-tags">
                <span>ESP32</span>
                <span>C++</span>
                <span>I2S</span>
              </div>
            </Link>

            <Link to="/projects/throne-finder" className="project-card">
              <p className="project-number">02</p>
              <h3>Throne Finder</h3>
              

              <div className="project-tags">
                <span>React Native</span>
                <span>Expo</span>
                <span>Supabase</span>
              </div>
            </Link>

            <Link to="/projects/automated-game" className="project-card">
              <p className="project-number">03</p>
              <h3>Automated Game Board</h3>
              

              <div className="project-tags">
                <span>MATLAB</span>
                <span>Arduino</span>
                <span>Computer Vision</span>
                <span>Embedded</span>
              </div>
            </Link>

            <Link to="/projects/golf-launch-monitor" className="project-card">
              <p className="project-number">04</p>
              <h3>Golf Ball Launch Monitor</h3>
              

              <div className="project-tags">
                <span>Raspberry Pi</span>
                <span>AI Integration</span>
                <span>Computer Vision</span>
                <span>Software Integration</span>
                <span>Embedded</span>
                <span>Web Development</span>
              </div>
            </Link>

            <article className="project-card">
              <p className="project-number">05</p>
              <h3>More Projects Coming</h3>
              

              <div className="project-tags">
                <span>Embedded</span>
                <span>Software</span>
                <span>Engineering</span>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section className="section">
          <p className="section-label">04 — Contact</p>

          <h2>Let's Get in Touch</h2>

          <p className="section-text">
             Interested in working together or learning more about my projects?
              Visit my contact page for ways to reach me.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Home