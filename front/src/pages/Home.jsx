import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../css/pages/Home.css";
import { Link } from "react-router-dom";

import CommentSection from "../components/CommentSection.jsx";
import { MapPin, GraduationCap, Laptop, Award } from "lucide-react";

function Home() {
  useGSAP(() => {
    gsap.from("#hero-section", {
      y: -50,
      opacity: 0,
      duration: 0.7,
    });
    gsap.from("#hero-links", {
      y: 20,
      opacity: 0,
      duration: 0.7,
    });
  }, []);
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-name" id="hero-section">
            <h5>Web Developer at UNLV</h5>
            <h3>RY SURIYATHEP</h3>
          </div>

          <div className="hero-links" id="hero-links">
            <a
              className="link"
              href="https://docs.google.com/document/d/1OsWHSLnUA-n_WKq6hNvaLf2t8kVH6hJx_6Pbf2tsuxE/edit?tab=t.0"
            >
              Resume
            </a>
            <p>|</p>
            <a className="link" href="https://www.youtube.com/@ryvsu">
              Youtube
            </a>
            <p>|</p>
            <a className="link" href="www.linkedin.com/in/rysuri">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="about-me-section">
          <div className="about-left">
            <h5>ABOUT ME</h5>
            <h1>
              Hi, I'm <span className="highlight">Ry Suriyathep</span>
            </h1>
            <ul className="about-info">
              <li>
                <MapPin className="info-icon" /> Based in Las Vegas, Nevada
              </li>
              <li>
                <GraduationCap className="info-icon" /> 2nd Year CS Student at
                UNLV
              </li>
              <li>
                <Laptop className="info-icon" /> Frontend Developer
              </li>
              <li>
                <Award className="info-icon" /> AWS + CompTIA Certified
              </li>
            </ul>

            <p>
              As a dedicated developer and student at the University of Nevada,
              Las Vegas, I’m passionate about blending creativity with
              technology. I focus on frontend and web application development,
              while aspiring toward game design and AI-driven systems.
            </p>
            {/* <div className="about-buttons">
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Projects
              </a>
            </div> */}
          </div>

          <div className="about-right">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              <span>React</span>
              <span>Python</span>
              <span>C++</span>
              <span>JavaScript</span>
              <span>Assembly</span>
              <span>Shopify</span>
              <span>WordPress</span>
              <span>AWS</span>
            </div>

            <h3>Certifications</h3>
            <div className="cert-list">
              <div className="cert-item">
                <img
                  src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                  alt="AWS Certified Cloud Practitioner Badge"
                  className="cert-badge"
                />
                <div>
                  <strong>AWS Certified Cloud Practitioner</strong>
                  <p>Issued Aug 2023</p>
                </div>
              </div>

              <div className="cert-item">
                <img
                  src="https://images.credly.com/size/340x340/images/a81e53e7-3649-4366-917d-9611bb74c10c/CompTIA_A_2B.png"
                  alt="CompTIA A+ Certification Badge"
                  className="cert-badge"
                />
                <div>
                  <strong>CompTIA A+ Certification</strong>
                  <p>Issued Aug 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CommentSection />

        <div className="end-directory">
          <h1>Oh wait there is more!</h1>
          <div className="end-links">
            <a className="end-link" href="/contact">
              Contact me
            </a>
            <p>|</p>
            <a className="end-link" href="/portfolio">
              View porfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
