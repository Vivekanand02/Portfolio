function Projects() {
  const endpoints = [
    { method: "POST", cls: "m-post", path: "/auth/register, /auth/login", status: "200" },
    { method: "GET", cls: "m-get", path: "/events, /events/{id}/seats", status: "200" },
    { method: "POST", cls: "m-post", path: "/bookings", status: "409" },
    { method: "DELETE", cls: "m-delete", path: "/bookings/{id}", status: "403" },
  ]
  const stack = ["Spring Data JPA", "Hibernate", "PostgreSQL", "Spring Security", "Postman"]

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head"><span className="idx">04</span><h2>Projects</h2></div>

        <div className="console">
          <div className="console-top">
            <div>
              <div className="console-title">Event Booking System</div>
              <div className="console-sub">Spring Boot REST API · Controller–Service–Repository</div>
            </div>
            <a className="console-link" href="https://github.com/Vivekanand02" target="_blank" rel="noopener noreferrer">
              github.com/Vivekanand02 ↗
            </a>
          </div>

          <div className="endpoints">
            {endpoints.map((e, i) => (
              <div className="endpoint" key={i}>
                <span className={`method ${e.cls}`}>{e.method}</span>
                <span className="endpoint-path">{e.path}</span>
                <span className="endpoint-status">{e.status}</span>
              </div>
            ))}
          </div>

          <div className="console-notes">
            <p>A layered event and seat booking API with stateless JWT authentication securing booking and cancellation.</p>
            <ul>
              <li>Prevents double-booking by validating seat availability and updating status in the service layer before persistence.</li>
              <li>Ownership checks via the authenticated user in Spring Security's SecurityContext.</li>
              <li>Bean Validation and centralized exception handling return structured errors (400, 401, 403, 404, 409).</li>
            </ul>
          </div>

          <div className="stack-strip">
            {stack.map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
