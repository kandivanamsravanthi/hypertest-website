
import React from "react";
import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="/">
            <img src="/logo.png" alt="Hyper Test Inc Logo" />
          </a>

          <nav className="navlinks">
            <Link to="/about">About Us</Link>
            <a href="/#services">Services</a>
            <Link to="/careers">Careers</Link>
            <a href="/#contact">Contact Us</a>
          </nav>

          <a className="btn btn-primary nav-cta" href="/#contact">
            GET STARTED ↗
          </a>
        </div>
      </header>

      <main>
        {/* WHO WE ARE */}
        <section className="section" id="who-we-are">
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
            </div>
          </div>
        </section>

        {/* OUR DIRECTION */}
        <section className="section" id="our-direction">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">OUR DIRECTION</span>
              <h2>Driven by Purpose. Focused on Progress.</h2>
              <p>
                A clear direction for the way we think, build and work
                with businesses.
              </p>
            </div>

            <div className="vm-grid">
              <article className="vm-card">
                <div className="vm-icon">◎</div>
                <h3>Our Vision</h3>
                <p>
                  To contribute to a future where businesses use technology
                  and innovation to unlock meaningful opportunities and
                  sustainable growth.
                </p>
              </article>

              <article className="vm-card">
                <div className="vm-icon">↗</div>
                <h3>Our Mission</h3>
                <p>
                  To help organizations address business challenges through
                  thoughtful digital solutions, practical expertise and
                  collaborative execution.
                </p>
              </article>
            </div>
          </div>
        </section>


        
        
        {/* WHY CHOOSE US */}
        <section className="about-why" id="why">
        <div className="about-why-container">

            {/* LEFT CONTENT */}
            <div className="about-why-heading">
            <span className="about-why-label">WHY CHOOSE US</span>

            <div className="about-why-line"></div>

            <h2>
                We support your local or
                international growth.
            </h2>

            <a className="about-why-button" href="/#contact">
                LET'S TALK
            </a>
            </div>

            {/* RIGHT FEATURE CARDS */}
            <div className="about-why-grid">

            {/* CARD 1 */}
            <article className="about-why-card purple-card">
                <div className="about-why-icon">
                <svg viewBox="0 0 48 48">
                    <path d="M13 24L21 32L39 13" />
                    <path d="M36 24C36 30.6 30.6 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.7 13.1 31.8 15" />
                </svg>
                </div>

                <h3>Empowering Businesses with Intelligent Innovation</h3>

                <p>
                We deliver AI-powered technologies and digital strategies
                designed to help businesses grow, automate, and stay ahead
                in a competitive market.
                </p>
            </article>

            {/* CARD 2 */}
            <article className="about-why-card light-card">
                <div className="about-why-icon">
                <svg viewBox="0 0 48 48">
                    <path d="M13 24L21 32L39 13" />
                    <path d="M36 24C36 30.6 30.6 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.7 13.1 31.8 15" />
                </svg>
                </div>

                <h3>Expertise That Delivers Results</h3>

                <p>
                Our experienced professionals combine technology,
                innovation, and business intelligence to create scalable
                and impactful solutions.
                </p>
            </article>

            {/* CARD 3 */}
            <article className="about-why-card light-card">
                <div className="about-why-icon">
                <svg viewBox="0 0 48 48">
                    <path d="M13 24L21 32L39 13" />
                    <path d="M36 24C36 30.6 30.6 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.7 13.1 31.8 15" />
                </svg>
                </div>

                <h3>Innovative & Future-Ready Solutions</h3>

                <p>
                We focus on modern technologies and smart digital
                transformation strategies that prepare businesses
                for the future.
                </p>
            </article>

            {/* CARD 4 */}
            <article className="about-why-card purple-card">
                <div className="about-why-icon">
                <svg viewBox="0 0 48 48">
                    <path d="M13 24L21 32L39 13" />
                    <path d="M36 24C36 30.6 30.6 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.7 13.1 31.8 15" />
                </svg>
                </div>

                <h3>Results-Driven Approach</h3>

                <p>
                Every solution we provide is focused on improving
                efficiency, productivity, customer experience, and
                measurable business growth.
                </p>
            </article>

            </div>
        </div>
        </section>

      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <b>HYPERTESTINC</b>
          <span>AI · Digital Innovation · Business Solutions</span>
          <span>© {new Date().getFullYear()} HypertestInc.</span>
        </div>
      </footer>
    </>
  );
}

export default About;
