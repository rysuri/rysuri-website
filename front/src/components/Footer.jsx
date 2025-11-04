import "../css/components/Footer.css";

import { Linkedin, Youtube, Github, FileText } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <p>
        All rights reserved. | <strong>rysuri.com</strong>
      </p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/rysuri/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/rysuri"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Github />
        </a>
        <a
          href="https://www.youtube.com/@ryvsu"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <Youtube />
        </a>
        <a href="/resume.pdf" download className="link">
          <FileText />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
