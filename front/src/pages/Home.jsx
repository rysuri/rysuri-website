import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../css/pages/Home.css";
import { Link } from "react-router-dom";

import CommentSection from "../components/CommentSection.jsx";

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
            <div className="about-me">
              <h3>About me</h3>
              <p>University of Nevada, Las Vegas</p>
              <p>19 years old</p>
              <p>Frontend Development</p>
            </div>
            <div className="bio">
              <p>
                Currently a 2nd year student at the University of Nevada Las
                Vegas, pursuing a degree in Computer Science. I have dreams of
                game design and web development. Every action I take is to
                achieve my goals. Projects and more, down below.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="skills">
              <h3>Languages</h3>
              <p>React.js, Python, C++, Assembly, Javascript</p>

              <h3>Tools</h3>
              <p>React, Wordpress, Shopify, AWS</p>
            </div>

            <div className="certifications">
              <h3>Certifications</h3>
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

            {/* <Link to="/contact" className="end-link">
              Contact me
            </Link>
            <p>|</p>
            <Link to="/portfolio" className="end-link">
              View porfolio
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
