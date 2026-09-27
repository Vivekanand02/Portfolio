import resumeFile from "../assets/Vivekanand_Resume.pdf"

function Navbar() {
  return (
    <header className="site-header">
      <nav className="wrap nav-row">
        <a className="brand" href="#top">vivekanand<span className="dot">.</span>dev</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-cta" href={resumeFile} download="Vivekanand_Sharma_Resume.pdf">↓ resume.pdf</a>
      </nav>
    </header>
  )
}
export default Navbar
