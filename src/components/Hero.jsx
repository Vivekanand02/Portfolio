import photo from "../assets/photo.jpg"

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">GET <span className="path">/developers/vivekanand-sharma</span> · 200 OK</p>
          <h1 className="name">Vivekanand Sharma</h1>
          <p className="role">Java Backend Developer, entry-level — building REST APIs with Spring Boot, Hibernate/JPA and PostgreSQL.</p>
          <p className="lede">MCA graduate based in Delhi NCR, focused on clean layered architecture — controllers, services and repositories — with proper authentication, validation and error handling underneath.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="hero-photo-frame">
          <img src={photo} alt="Vivekanand Sharma" />
          <div className="status-chip"><span className="pulse"></span>open to work</div>
        </div>
      </div>
    </section>
  )
}
export default Hero
