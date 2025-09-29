import "../css/components/Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
