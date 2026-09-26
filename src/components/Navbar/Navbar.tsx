import './Navbar.scss'

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        UK
      </a>

      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href="https://github.com/Umarkhan42"
        target="_blank"
        rel="noreferrer"
        className="navbar__github"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export default Navbar;
