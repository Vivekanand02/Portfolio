
function Projects() {
  const bookingEndpoints = [
    { method: "POST", cls: "m-post", path: "/auth/register, /auth/login", status: "200" },
    { method: "GET", cls: "m-get", path: "/events, /events/{id}/seats", status: "200" },
    { method: "POST", cls: "m-post", path: "/bookings", status: "409" },
    { method: "DELETE", cls: "m-delete", path: "/bookings/{id}", status: "403" },
  ];

  const bookingStack = [
    "Spring Data JPA",
    "Hibernate",
    "PostgreSQL",
    "Spring Security",
    "Postman",
  ];

  const urlEndpoints = [
    { method: "POST", cls: "m-post", path: "/api/url", status: "200" },
  ];

  const urlStack = [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
  ];

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">04</span>
          <h2>Projects</h2>
        </div>

        {/* Event Booking System */}
        <div className="console">
          <div className="console-top">
            <div>
              <div className="console-title">Event Booking System</div>
              <div className="console-sub">
                Spring Boot REST API · Controller–Service–Repository
              </div>
            </div>

            <a
              className="console-link"
              href="https://github.com/Vivekanand02/Event-Booking-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub ↗
            </a>
          </div>

          <div className="endpoints">
            {bookingEndpoints.map((e, i) => (
              <div className="endpoint" key={i}>
                <span className={`method ${e.cls}`}>{e.method}</span>
                <span className="endpoint-path">{e.path}</span>
                <span className="endpoint-status">{e.status}</span>
              </div>
            ))}
          </div>

          <div className="console-notes">
            <p>
              A layered event and seat booking API with stateless JWT
              authentication securing booking and cancellation.
            </p>
            <ul>
              <li>
                Prevents double-booking by validating seat availability.
              </li>
              <li>
                Enforces booking ownership using Spring Security.
              </li>
              <li>
                Uses validation and centralized exception handling.
              </li>
            </ul>
          </div>

          <div className="stack-strip">
            {bookingStack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        {/* URL Shortener */}
        <div className="console">
          <div className="console-top">
            <div>
              <div className="console-title">URL Shortener</div>
              <div className="console-sub">
                Spring Boot REST API · React
              </div>
            </div>

            <a
              className="console-link"
              href="https://github.com/Vivekanand02/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub ↗
            </a>
          </div>

          <div className="endpoints">
            {urlEndpoints.map((e, i) => (
              <div className="endpoint" key={i}>
                <span className={`method ${e.cls}`}>{e.method}</span>
                <span className="endpoint-path">{e.path}</span>
                <span className="endpoint-status">{e.status}</span>
              </div>
            ))}
          </div>

          <div className="console-notes">
            <p>
              A full-stack URL shortener that converts long URLs into
              compact links through a Spring Boot REST API and React UI.
            </p>
            <ul>
              <li>Accepts a long URL and generates a shortened link.</li>
              <li>
                Provides a React interface for submitting and copying
                shortened URLs.
              </li>
            </ul>
          </div>

          <div className="stack-strip">
            {urlStack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
