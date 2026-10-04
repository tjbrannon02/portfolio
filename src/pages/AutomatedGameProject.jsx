import '../App.css'
import { FaGithub } from 'react-icons/fa'
import group from '../assets/eceLand/IMG_1678.JPEG'
import board from '../assets/eceLand/board_image.png'
import finalPic from '../assets/eceLand/IMG_8598.png'
import hardware from '../assets/eceLand/IMG_8573.png'
import diagram from '../assets/eceLand/Arduino_motor_diagram.png'

function AutomatedGameProject() {
  return (
    <main className="project-page">

      {/* Header */}
      <section className="project-hero">
        <p className="section-label">
          03 — Eceland Automated Gameboard
        </p>

        <h1>
          An automated physical gameboard integrating
          computer vision, feedback control, and
          embedded hardware.
        </h1>

        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: '1px solid #f2f5f7',
            borderRadius: '6px',
            fontWeight: '500'
          }}
          onClick={() =>
            window.open(
              'https://github.com/tjbrannon02/eceland-automated-gameboard',
              '_blank'
            )
          }
        >
          <FaGithub size={20} />
          View on GitHub
        </button>
      </section>

      {/* Overview */}
      <section className="project-detail-section">
        <p className="section-label">01 — Overview</p>

          <div className="project-media">
                    <img
                      src={group}
                      alt="Group Photo"
                    />
                  </div>

        <h2>Project Background</h2>

        <p className="section-text">
          Eceland was developed as part of my Computer Engineering
          senior design curriculum at Clemson University. The
          project explores the integration of software-based
          decision-making with a physical gameboard capable of
          interpreting inputs and automatically moving game pieces.
        </p>

        <p className="section-text">
          The system combines computer vision, motor control,
          feedback systems, and a MATLAB-based user interface
          to automate gameplay and physical game-piece movement.
        </p>

        <h2>Project Objectives</h2>

        <p className="section-text">
          The primary objective was to create an integrated system
          capable of processing visual information, evaluating
          game scenarios, and executing physical actions through
          a motorized platform.
        </p>
      </section>

      {/* Architecture */}
      <section className="project-detail-section">
        <p className="section-label">02 — System Architecture</p>

        <h2>From Visual Input to Physical Movement</h2>

        <p className="section-text">
          The system is organized into interconnected functional
          components. MATLAB handles image processing, game logic,
          and application-level coordination, while Simulink and
          the supporting hardware enable controlled physical movement.
        </p>

        <p className="section-text">
          The primary subsystems include:
        </p>

        <p className="section-text">
          • Input Processing — Captures and processes visual
          information from the die.
          <br />
          • Game Logic — Evaluates the current game state and
          determines the next action.
          <br />
          • Motion Control — Converts game decisions into
          movement commands.
          <br />
          • Hardware Interface — Coordinates communication
          between MATLAB, Simulink, and the physical system.
          <br />
          • User Interface — Provides an interactive environment
          for operating and monitoring the game.
        </p>
      </section>

      {/* Hardware */}
      <section className="project-detail-section">
        <p className="section-label">03 — Hardware</p>

        <h2>Physical System</h2>

        <p className="section-text">
          The gameboard combines a motorized movement mechanism,
          an actuator, and a camera-based input system. An Arduino
          Mega 2560 interfaces with the motor driver and supporting
          hardware, while a USB camera provides visual input to MATLAB.
        </p>

        <div className="project-media">
                  <img
                    src={hardware}
                    alt="Image inside of mechanism"
                  />
                </div>

        <h3>Primary Components</h3>

        <p className="section-text">
          • Arduino Mega 2560
          <br />
          • DC motor with encoder feedback
          <br />
          • L298N motor driver
          <br />
          • Actuator and relay
          <br />
          • USB camera
          <br />
          • External power supply
          <br />
          • 3D-printed gameboard structure
        </p>

        <h2>Hardware Integration</h2>

        <div className="project-media">
                  <img
                    src={diagram}
                    alt="Motor Arduino Circuit Diagram"
                  />
                </div>

        <p className="section-text">
          The motor and encoder are connected through the motor
          driver to support controlled movement. The actuator
          is controlled through the Arduino and relay, while
          USB communication connects the hardware to MATLAB.
        </p>
      </section>

      {/* Software */}
      <section className="project-detail-section">
        <p className="section-label">04 — Software</p>

        <h2>Development Environment</h2>

        <p className="section-text">
          • MATLAB
          <br />
          • Simulink
          <br />
          • MATLAB App Designer
          <br />
          • MATLAB Image Processing
          <br />
          • Computer Vision
          <br />
          • Feedback Control Systems
          <br />
          • Arduino hardware communication
        </p>

        <div className="project-media">
                  <img
                    src={board}
                    alt="Image of gameboard captured by cam"
                  />
                </div>

        <p className="section-text">
          MATLAB serves as the primary development environment,
          coordinating image processing, game-state evaluation,
          motor commands, and the graphical user interface.
          Simulink supports the motor-control feedback loop.
        </p>
      </section>

      {/* Implementation */}
      <section className="project-detail-section">
        <p className="section-label">05 — Implementation</p>

        <h2>How It Works</h2>

        <div className="project-media">
                  <img
                    src={finalPic}
                    alt="Image of final board"
                  />
                </div>

        <p className="section-text">
          1. System Initialization
          <br />
          When a new game begins, the application initializes
          the board position and color database before entering
          the main game loop.
        </p>

        <p className="section-text">
          2. Die Activation and Detection
          <br />
          The system activates the actuator and captures visual
          information from the die. Image-processing functionality
          identifies the number of pips and returns the resulting
          value to the main application.
        </p>

        <p className="section-text">
          3. Motorized Movement
          <br />
          The detected value is passed to the movement function,
          which commands the motorized system to advance the
          physical game piece.
        </p>

        <p className="section-text">
          4. Scenario Evaluation
          <br />
          After movement, the application determines the color
          of the square reached and evaluates the corresponding
          game scenario.
        </p>

        <p className="section-text">
          5. Automated Decision-Making
          <br />
          The game logic determines the additional movement
          required based on the square's color:
          <br />
          • Green — Move forward two additional squares.
          <br />
          • Blue — Move forward one additional square.
          <br />
          • Purple — Move backward one square.
          <br />
          • Red — Move backward two squares.
        </p>

        <p className="section-text">
          6. Game Completion
          <br />
          The process repeats until the game piece reaches
          or passes position 24. The system then resets the
          piece and displays a completion screen through
          the graphical interface.
        </p>
      </section>

      {/* Contributions */}
      <section className="project-detail-section">
        <p className="section-label">06 — My Contributions</p>

        <h2>Individual Engineering Contributions</h2>

        <p className="section-text">
          My work focused on integrating software and hardware
          subsystems into a cohesive automated system.
        </p>

        <p className="section-text">
          • Developed MATLAB functionality for game-state
          processing and automated decision-making.
          <br />
          • Implemented computer vision techniques for
          interpreting die rolls.
          <br />
          • Integrated motor movement commands with
          feedback-based control.
          <br />
          • Designed and implemented the MATLAB App Designer
          interface.
          <br />
          • Coordinated software components with supporting
          Simulink models and hardware.
          <br />
          • Debugged and integrated multiple subsystems
          into a functional automated gameboard.
        </p>
      </section>

      {/* Demonstration */}
      <section className="project-detail-section">
        <p className="section-label">07 — Demonstration</p>

        <h2>System Demonstration</h2>

        <p className="section-text">
          Watch Eceland integrate visual input, automated
          decision-making, and physical game-piece movement.
        </p>

        <div className="project-video">
          <iframe
            src="https://www.youtube.com/embed/7VxaBDV3nvI"
            title="Eceland Automated Gameboard Demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Future Improvements */}
      <section className="project-detail-section">
        <p className="section-label">08 — Future Improvements</p>

        <h2>Potential Improvements</h2>

        <p className="section-text">
          • Improve robustness of visual detection under
          varying lighting conditions.
          <br />
          • Refine movement accuracy and calibration.
          <br />
          • Expand hardware documentation and reproducibility.
        </p>
      </section>

    </main>
  )
}

export default AutomatedGameProject