import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">SOFTWARE ENGINEER</p>

        <h1>
          Hi, I'm <span>Umar.</span>
          <br />
          I build things with code.
        </h1>

        <p className="hero__description">
          I'm a Computer Science & Mathematics student at Queen Mary
          University of London, currently working as a Software Engineering
          Intern at Skyhigh.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__primary">
            View my work
            <span>↓</span>
          </a>

          <a
            href="https://github.com/Umarkhan42"
            target="_blank"
            rel="noreferrer"
            className="hero__secondary"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__orb" />
        <div className="hero__grid" />
      </div>
    </section>
  );
}

export default Hero;
