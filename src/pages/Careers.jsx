
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import "../App.css";

function Careers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const careerSections = [
    {
      title: "Organization",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      description: "Discover Hypertest Inc, our organization, our team and our work culture.",
      button: "Explore Organization",
    },
    {
      title: "Internships",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      description: "Gain practical experience, work on projects and develop industry-ready skills.",
      button: "Explore Internships",
    },
    {
      title: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description: "Improve your technical knowledge through practical learning and guided training.",
      button: "Explore Training",
    },
    {
      title: "Placements",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      description: "Prepare for interviews, develop professional skills and explore career opportunities.",
      button: "Explore Placements",
    },
    {
      title: "Employment",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      description: "Explore employment opportunities with Hypertest Inc and other organizations.",
      button: "Explore Jobs",
    },
  ];

  return (
    <>
      {/* SAME NAVBAR AS APP.JSX */}
      <header className="topbar">
        <div className="wrap nav">
            <a className="brand" href="#home">
                <img src="/logo.png" alt="Hyper Test Inc Logo" />
            </a>

          <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
            <Link to="/#about" onClick={closeMenu}>About Us</Link>
            <Link to="/#services" onClick={closeMenu}>Services</Link>
            <Link to="/careers" onClick={closeMenu}>Careers</Link>
            <Link to="/#contact" onClick={closeMenu}>Contact Us</Link>
          </nav>

          <Link className="btn btn-primary nav-cta" to="/#contact">
            GET STARTED ↗
          </Link>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </header>

      <div className="careers-page">
        <section className="careers-hero">
          <span>CAREERS AT HYPERTEST INC.</span>
          <h1>Build Your Future With Us</h1>
          <p>
            Learn, grow, develop your skills and explore exciting career
            opportunities with us.
          </p>
        </section>

        <section className="career-content">
          <div className="career-heading">
            <span>YOUR CAREER JOURNEY</span>
            <h2>Explore Our Opportunities</h2>
            <p>
              From learning and training to employment, discover opportunities
              to move forward in your career.
            </p>
          </div>

          <div className="career-grid">
            {careerSections.map((item, index) => (
              <article className="career-card" key={item.title}>
                <img src={item.image} alt={item.title} />

                <div className="career-card-content">
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#career-contact">{item.button} ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="career-contact" id="career-contact">
          <h2>Ready to Take the Next Step?</h2>
          <p>Connect with our team to explore career opportunities.</p>
          <Link to="/#contact">Contact Us ↗</Link>
        </section>
      </div>
    </>
  );
}

export default Careers;
