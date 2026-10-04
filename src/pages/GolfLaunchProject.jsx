import '../App.css'

function GolfLaunchMonitorProject() {
  return (
    <main className="project-page">

      {/* Header */}
      <section className="project-hero">
        <p className="section-label">
          04 — Golf Launch Monitor
        </p>

        <h1>
          A computer vision-based golf launch monitor
          designed to analyze ball and club motion
          using high-speed imaging and embedded computing.
        </h1>

        <span className="project-status">
          Currently in development
        </span>
      </section>

      {/* Overview */}
      <section className="project-detail-section">
        <p className="section-label">01 — Overview</p>

        <h2>Project Concept</h2>

        <p className="section-text">
          This project explores the development of a
          computer vision-based golf launch monitor
          inspired by the open-source PiTrac system.
        </p>

        <p className="section-text">
          The objective is to capture and analyze a golf
          shot using high-speed imaging and embedded
          computing hardware, translating visual data
          into meaningful performance measurements.
        </p>

        <h2>Project Objectives</h2>

        <p className="section-text">
          The system is being designed to estimate key
          golf shot characteristics, including:
          <br />
          • Ball speed
          <br />
          • Clubhead speed
          <br />
          • Launch angle
          <br />
          • Spin rate
          <br />
          • Carry distance
          <br />
          • Airtime
          <br />
          • Apex height
        </p>
      </section>

      {/* Architecture */}
      <section className="project-detail-section">
        <p className="section-label">02 — System Architecture</p>

        <h2>Embedded Vision and Processing</h2>

        <p className="section-text">
          The planned architecture centers on a Raspberry
          Pi 5 paired with an AI accelerator and camera
          hardware capable of capturing the golf ball
          during impact and flight.
        </p>

        <p className="section-text">
          The system is intended to combine image capture,
          computer vision, and physics-based calculations
          to derive shot measurements and present the
          results through a user interface.
        </p>
      </section>

      {/* Hardware */}
      <section className="project-detail-section">
        <p className="section-label">03 — Hardware</p>

        <h2>Proposed Hardware Platform</h2>

        <p className="section-text">
          • Raspberry Pi 5
          <br />
          • AI accelerator
          <br />
          • Global-shutter camera
          <br />
          • Infrared LED illumination
          <br />
          • Camera interface and supporting electronics
          <br />
          • 7" Display for shot measurements
        </p>

        <p className="section-text">
          The camera and illumination system are being
          evaluated to support reliable image capture
          during the short time interval surrounding
          ball impact.
        </p>
      </section>

      {/* Software */}
      <section className="project-detail-section">
        <p className="section-label">04 — Software</p>

        <h2>Software and Processing</h2>

        <p className="section-text">
          • Python
          <br />
          • OpenCV
          <br />
          • Embedded Linux
          <br />
          • Computer vision
          <br />
          • Image processing
          <br />
          • Physics-based shot calculations
        </p>

        <p className="section-text">
          The software architecture is being designed
          around image acquisition, visual analysis,
          measurement calculations, and the presentation
          of shot data.
        </p>
      </section>

      {/* Challenges */}
      <section className="project-detail-section">
        <p className="section-label">05 — Engineering Considerations</p>

        <h2>Key Technical Challenges</h2>

        <p className="section-text">
          A major design consideration is coordinating
          camera triggering, infrared illumination, and
          image processing within the extremely short
          time window surrounding impact.
        </p>

        <p className="section-text">
          Trigger latency, image capture timing, and
          processing requirements must be evaluated
          to ensure that the system collects useful
          data without missing critical portions of
          the ball's motion.
        </p>
      </section>

      {/* Development */}
      <section className="project-detail-section">
        <p className="section-label">06 — Development Status</p>

        <h2>Current Progress</h2>

        <p className="section-text">
          The project is currently in the design and
          development phase. Work is focused on
          evaluating the hardware architecture,
          camera configuration, and processing
          requirements needed to build a functional
          launch monitor.
        </p>

        <p className="section-text">
          As development progresses, this page will
          be updated with system diagrams, hardware
          implementation, software development, and
          experimental results.
        </p>
      </section>

    </main>
  )
}

export default GolfLaunchMonitorProject