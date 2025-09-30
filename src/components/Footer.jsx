import "../css/components/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copy">
        <p>
          © {new Date().getFullYear()} SURIYATHEP
        </p>
      </div>
      <div className="copy">
        <p>
          All rights reserved. | rysuri.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
