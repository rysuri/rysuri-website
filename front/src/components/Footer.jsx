import "../css/components/Footer.css";

import { Linkedin, Youtube, Github, FileText } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <p>All rights reserved. | rysuri.com</p>
      <a
        href="https://www.linkedin.com/in/rysuri/"
        target="_blank"
        className="link"
      >
        <Linkedin />
      </a>
      <a href="https://github.com/rysuri" target="_blank" className="link">
        <Github />
      </a>
      <a href="https://www.youtube.com/@ryvsu" target="_blank" className="link">
        <Youtube />
      </a>
      <a
        href="https://www.linkedin.com/in/rysuri/"
        target="_blank"
        className="link"
      >
        <FileText />
      </a>
    </footer>
  );
}

export default Footer;
