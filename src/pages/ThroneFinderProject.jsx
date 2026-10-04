import '../App.css'

function ThroneFinderProject() {
  return (
    <main className="project-page">

      {/* Header */}
      <section className="project-hero">
        <p className="section-label">
          03 — Throne Finder
        </p>

        <h1>
          A community-driven mobile application designed
          to make finding public restrooms easier,
          faster, and more reliable.
        </h1>

        <span className="project-status">
          Currently in development
        </span>
      </section>

      {/* Overview */}
      <section className="project-detail-section">
        <p className="section-label">01 — Overview</p>

        <h2>The Problem</h2>

        <p className="section-text">
          Finding a clean, accessible, and available public
          restroom can be difficult, particularly when
          traveling or navigating unfamiliar areas.
          Existing map applications do not always provide
          the detailed information people need to make
          an informed decision.
        </p>

        <h2>The Solution</h2>

        <p className="section-text">
          Throne Finder is a mobile application designed
          to help users discover public restrooms through
          an interactive map and community-submitted
          information.
        </p>

        <p className="section-text">
          The application is initially focused on Greenville,
          South Carolina, with the goal of expanding its
          coverage as more locations and user contributions
          are added.
        </p>
      </section>

      {/* Features */}
      <section className="project-detail-section">
        <p className="section-label">02 — Planned Features</p>

        <h2>Application Functionality</h2>

        <p className="section-text">
          • Interactive map displaying nearby public restrooms.
          <br />
          • Location details and directions.
          <br />
          • Community ratings and reviews.
          <br />
          • Cleanliness, accessibility, privacy, and availability
          assessments.
          <br />
          • User-submitted restroom locations.
          <br />
          • Comments and community contributions.
          <br />
          • Contributor levels to encourage participation.
        </p>

        <p className="section-text">
          The goal is to create a reliable resource that
          improves as users contribute information about
          the locations they visit.
        </p>
      </section>

      {/* Technology */}
      <section className="project-detail-section">
        <p className="section-label">03 — Technology</p>

        <h2>Development Stack</h2>

        <p className="section-text">
          • React Native
          <br />
          • Expo
          <br />
          • TypeScript
          <br />
          • Supabase
          <br />
          • PostgreSQL
          <br />
          • PostGIS
        </p>

        <p className="section-text">
          React Native and Expo provide the cross-platform
          mobile foundation. Supabase and PostgreSQL support
          user accounts and application data, while PostGIS
          enables location-based queries for discovering
          nearby restroom facilities.
        </p>
      </section>

      {/* Development */}
      <section className="project-detail-section">
        <p className="section-label">04 — Development</p>

        <h2>Current Focus</h2>

        <p className="section-text">
          Development is focused on establishing the
          application's core structure, database architecture,
          and map-based discovery experience.
        </p>

        <p className="section-text">
          Future development will expand user contributions,
          rating functionality, and the overall experience
          of discovering and evaluating restroom locations.
        </p>
      </section>

      {/* Future */}
      <section className="project-detail-section">
        <p className="section-label">05 — Future Direction</p>

        <h2>Building a Community Resource</h2>

        <p className="section-text">
          The long-term objective is to develop Throne Finder
          into a dependable community resource that provides
          useful, location-specific information while remaining
          accessible to users on both iOS and Android.
        </p>
      </section>

    </main>
  )
}

export default ThroneFinderProject