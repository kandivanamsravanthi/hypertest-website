
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { BrainCircuit, ShoppingCart, BriefcaseBusiness, Users, Brain} from "lucide-react";

import Careers from "./pages/Careers";
import Chatbot from "./chatbot";
import "./App.css";
import About from "./pages/About";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage(
      "Thank you! This is a demo form. Please connect a backend to receive inquiries."
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#home">
            <img src="/logo.png" alt="Hyper Test Inc Logo" />
          </a>
          <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <a href="#services" onClick={closeMenu}>Services</a>
            <Link to="/careers" onClick={closeMenu}>Careers</Link>
            <a href="#contact" onClick={closeMenu}>Contact Us</a>
          </nav>

          <a className="btn btn-primary nav-cta" href="#contact">
            GET STARTED ↗
          </a>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/video.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>

          <div className="wrap hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                INNOVATION · TECHNOLOGY · BUSINESS GROWTH
              </span>

              <h1 className="hero-title">
                <span>Transforming Businesses</span>
                <span>Through AI &amp;</span>
                <span><em>Digital Innovation.</em></span>
              </h1>

              <p className="hero-copy">
                From AI-powered solutions to eCommerce, business consulting
                and resource management, HypertestInc helps businesses move
                forward with smarter digital solutions.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#services">
                  Explore Our Services ↗
                </a>
                <a className="btn btn-outline" href="#contact">
                  Let's Talk
                </a>
              </div>

              <div className="hero-service-highlights">
                <div className="hero-service-item">
                  <BrainCircuit size={22} />
                  <span>AI Solutions</span>
                </div>
                <br />
                <div className="hero-service-item">
                  <ShoppingCart size={22} />
                  <span>eCommerce</span>
                </div>
                <br />
                <div className="hero-service-item">
                  <BriefcaseBusiness size={22} />
                  <span>Business Consulting</span>
                </div>
                <br />
                <div className="hero-service-item">
                  <Users size={22} />
                  <span>Resource Management</span>
                </div>

              </div>
            </div>

          </div>

          <div className="hero-bottom wrap">
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="trustbar">
          <div className="wrap trust">
            <strong>Solutions designed around your business goals</strong>
            <span>AI & Digital Innovation</span>
            <span>eCommerce Solutions</span>
            <span>Business Consulting</span>
            <span>Resource Management</span>
          </div>
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="wrap about-grid">
            <div className="about-photo">
              <img
                src="https://hypertestinc.in/wp-content/uploads/2026/05/cheerful-work-colleagues-working-on-a-laptop-while-having-a-meeting-in-a-cafe.jpg"
                alt="Team working together"
              />
              <div className="photo-tag">
                <b>Think smarter.</b>
                Build for what comes next.
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Transforming Businesses in the Digital Age.</h2>

              <p>
                HypertestInc brings together technology, digital innovation
                and business thinking to help organizations address
                challenges and pursue new opportunities.
              </p>

              <p>
                Our work spans AI solutions, eCommerce platforms, business
                consulting and resource management solutions—helping teams
                work smarter and build for sustainable growth.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <span className="check">✓</span>Innovation-led thinking
                </div>
                <div className="about-point">
                  <span className="check">✓</span>Business-focused solutions
                </div>
                <div className="about-point">
                  <span className="check">✓</span>Scalable technology
                </div>
                <div className="about-point">
                  <span className="check">✓</span>Practical collaboration
                </div>
              </div>

              <a className="btn btn-primary" href="#services">
                Discover What We Do ↗
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">WHAT WE DO</span>
              <h2>Smart Solutions for Modern Businesses</h2>
              <p>
                Explore our four service areas designed to help organizations
                innovate, optimize operations and grow.
              </p>
            </div>

            <div className="service-grid">
              <article className="service-card">
                <div className="service-icon">
                  <BrainCircuit size={28} />
                </div>
                <h3>AI Solutions & Digital Innovation</h3>
                <p>
                  AI-powered technologies that help automate processes,
                  improve decisions and support business growth.
                </p>
                <a href="#contact">Explore service ↗</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <ShoppingCart size={28} />
                </div>
                <h3>eCommerce Solutions</h3>
                <p>
                  Scalable, user-friendly online commerce experiences
                  that strengthen digital presence and customer journeys.
                </p>
                <a href="#contact">Explore service ↗</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <BriefcaseBusiness size={28} />
                </div>
                <h3>Business Consulting</h3>
                <p>
                  Strategic guidance to identify opportunities, solve
                  challenges and improve business processes.
                </p>
                <a href="#contact">Explore service ↗</a>
              </article>

              <article className="service-card">
                <div className="service-icon">
                  <Users size={28} />
                </div>
                <h3>Resource Management Solutions</h3>
                <p>
                  Smarter resource planning and streamlined processes
                  to support workforce and operational efficiency.
                </p>
                <a href="#contact">Explore service ↗</a>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">HOW IT WORKS</span>
              <h2>From Business Challenge to Better Outcomes</h2>
              <p>
                A simple four-step approach to understanding needs
                and delivering solutions.
              </p>
            </div>

            <div className="steps">
              {[
                ["01", "Discover", "Understand business needs, goals, challenges and opportunities."],
                ["02", "Design", "Shape a practical solution around requirements and priorities."],
                ["03", "Implement", "Put the solution into action, integrate and optimize workflows."],
                ["04", "Scale", "Refine and evolve the approach as business needs grow."]
              ].map(([number, title, description]) => (
                <article className="step" key={number}>
                  <div className="step-num">{number}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section" id="why">
          <div className="wrap why-grid">
            <div>
              <span className="eyebrow">WHY CHOOSE US</span>
              <h2>Technology With Your Business Goals in Mind.</h2>
              <p>
                We bring together digital innovation and business-focused
                thinking to help organizations move forward with clarity.
              </p>

              <div className="why-list">
                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <b>Cross-functional capabilities</b>
                    <small>
                      AI, eCommerce, consulting and resource management
                      under one service portfolio.
                    </small>
                  </div>
                </div>

                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <b>Solutions shaped around needs</b>
                    <small>
                      Recommendations and delivery aligned with your
                      business requirements.
                    </small>
                  </div>
                </div>

                <div className="why-item">
                  <span className="check">✓</span>
                  <div>
                    <b>Focus on practical outcomes</b>
                    <small>
                      Emphasis on useful improvements, efficiency and
                      long-term growth.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-visual">
              <div>
                <span className="eyebrow">THE HYPERTESTINC APPROACH</span>
                <h3>We support your local or international growth.</h3>
                <p>
                  Let's explore what the right digital solution can make
                  possible for your business.
                </p>
              </div>
              <span className="proof-note">
                Technology and business solutions for progress.
              </span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section testimonials" id="testimonials">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">CLIENT EXPERIENCES</span>
              <h2>Trust Built Through Real Work</h2>
              <p>
                Showcase authentic customer feedback and project outcomes
                to help visitors understand the value of working with HypertestInc.
              </p>
            </div>

            <div className="quote-grid">
              <article className="quote">
                <div className="stars">★★★★★</div>
                <p>
                  Add an approved customer quote describing the challenge,
                  the solution delivered and the business impact.
                </p>
                <b>Verified client name</b>
                <small>Client designation · Organization</small>
              </article>

              <article className="quote">
                <div className="stars">★★★★★</div>
                <p>
                  Add a second approved customer quote supported by a real
                  project or measurable outcome.
                </p>
                <b>Verified client name</b>
                <small>Client designation · Organization</small>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>Ready to Move Your Business Forward?</h2>

              <p className="contact-copy">
                Tell us what you are working on. Our team can discuss
                your goals and explore the right solution for your needs.
              </p>

              <div className="contact-detail">
                ✉ <span>Contact HypertestInc for business inquiries</span>
              </div>

              <div className="contact-detail">
                ⌖ <span>Connect with our team</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                />
              </div>

              <div className="field">
                <label htmlFor="service">Interested service</label>
                <select id="service" name="service">
                  <option>AI Solutions & Digital Innovation</option>
                  <option>eCommerce Solutions</option>
                  <option>Business Consulting</option>
                  <option>Resource Management Solutions</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="field full">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <div className="field full">
                <button className="btn btn-primary" type="submit">
                  Send Inquiry ↗
                </button>
                <div className="notice">
                  {formMessage ||
                    "Demo form only. Connect a backend to receive inquiries."}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footer-row">
          <b>HYPERTESTINC</b>
          <span>AI · Digital Innovation · Business Solutions</span>
          <span>© {new Date().getFullYear()} HypertestInc.</span>
        </div>
      </footer>

      {/* CHATBOT */}
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
