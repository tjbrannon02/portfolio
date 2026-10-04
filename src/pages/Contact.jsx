import "../App.css"

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <p className="section-label">GET IN TOUCH</p>

        <h1>Let's Connect.</h1>

        <p className="section-text">
          I'm interested in opportunities involving computer
          engineering, embedded systems, and software development.
          If you'd like to discuss a role, project, or collaboration,
          feel free to reach out.
        </p>
      </section>

      <section className="contact-links">

        <a
          href="mailto:t.j.brannon06@gmail.com"
          className="contact-item"
        >
          <div>
            <p className="contact-label">EMAIL</p>
            <h2>t.j.brannon06@gmail.com</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/t-j-brannon-91246a348/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div>
            <p className="contact-label">LINKEDIN</p>
            <h2>Connect professionally</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://github.com/tjbrannon02"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div>
            <p className="contact-label">GITHUB</p>
            <h2>Explore my projects</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>

      </section>

      <section className="contact-footer">
        <p className="section-label">CURRENTLY</p>
        <p className="section-text">
          Preparing for full-time engineering opportunities
          following graduation.
        </p>
      </section>

    </main>
  );
}


export default Contact