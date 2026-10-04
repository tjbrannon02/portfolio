import '../App.css'

function Resume() {
  return (
    <main className="resume-page">

      <section className="resume-hero">
        <p className="section-label">CAREER</p>

        <h1>Resume</h1>

        <p className="section-text">
          Computer Engineering student at Clemson University
          with an interest in embedded systems, software
          development, and hardware integration.
        </p>

        <div className="resume-actions">
          <a
            href="/Brannon_TJ_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            View Resume ↗
          </a>

          <a
            href="/Brannon_TJ_Resume.pdf"
            download="TJ-Brannon-Resume.pdf"
            className="button secondary"
          >
            Download PDF ↓
          </a>
        </div>
      </section>

      <section className="resume-document">
        <iframe
          src="/Brannon_TJ_Resume.pdf"
          title="T.J. Brannon Resume"
          className="resume-iframe"
        />
      </section>

      <p className="resume-note">
        Prefer a separate copy? Download the PDF above.
      </p>

    </main>
  );
}

export default Resume