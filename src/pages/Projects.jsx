import { Link } from 'react-router-dom'
import '../App.css'
function Projects() {
  return (

    <main>
      

      {/* ESP32 Project */}
        <Link to="/projects/esp32-audio" className="section project-section">
          <p className="section-label">01 — ESP32 Audio Reminder System</p>

          <h2>IoT system designed to monitor room lighting and provide an 
            audible reminder when the lights are left on.
          </h2>

          <p className="section-text">
            <strong>Hardware:</strong> Adafruit ESP32 Feather V2, ESP32-Devkit C-1, 
            LDR light sensor, reed switch, MAX98357A I2S amplifier, 4Ω speaker

          </p>
          <p className="section-text">
            <strong>Software:</strong> C/C++, Arduino IDE, ESP-NOW, I2S audio, 
            LittleFS, ESP32 deep/light-sleep power management
          </p>
        </Link>

        {/* Throne Finder */}
        <Link to="/projects/throne-finder" className="section project-section">
          <p className="section-label">02 — Throne Finder</p>

          <h2>Cross-platform mobile application for locating, evaluating, and discovering 
            public restrooms.
          </h2>

          <p className="section-text">
            <strong>Hardware:</strong> iOS and Android mobile devices
          </p>
          <p className="section-text">
            <strong>Software:</strong> React Native, Expo, TypeScript, Supabase, PostgreSQL, 
            PostGIS, Row Level Security, geospatial queries
          </p>
        </Link>

        {/* Automated Game Board */}
         <Link to="/projects/automated-game" className="section project-section">
          <p className="section-label">03 — Automated Game Board</p>

          <h2>Automated tabletop game system combining motor control, computer vision, 
            feedback control, and game-state logic.
          </h2>

          <p className="section-text">
            <strong>Hardware:</strong> DC motor, motor driver, solenoid, 
            Arduino MEGA 2560, camera system, power supply
          </p>
          <p className="section-text">
            <strong>Software:</strong> MATLAB, MATLAB Simulink, MATLAB App Designer, 
            computer vision, feedback control, motor control, game-state logic 
          </p>
        </Link>

        {/* Golf Launch Monitor */}
         <Link to="/projects/golf-launch-monitor" className="section project-section">
          <p className="section-label">04 — Golf Launch Monitor</p>

          <h2> Currently In Development! A golf shot monitor built to simulate the flight of the ball according to 
            your swing taking inspiration from industry leaders such as Trackman, and from open source 
            developers PiTrac
          </h2>

          <p className="section-text">
            Hardware: 2 Raspberry Pi 5's, Pi AI HAT+ 26 TOPS, Raspberry Pi Pico, Telemetry Sensors, 
            Innomaker GS Camera Module with IMX296 Mono Sensor, 7-inch Display
          </p>
          <p className="section-text">
            Software: Python, OpenCV, Raspberry Pi OS, camera image prossesing, computer vision, 
            GPIO communication
          </p>
        </Link>

    </main>

  )
}

export default Projects