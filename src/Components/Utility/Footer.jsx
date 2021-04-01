import React from "react";
import "../Style/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-row">
        <div className="f-box">
          <h2 className="f-brand">The Flixer</h2>
          <p className="f-cd">&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="f-box">
          <h3 className="h-credit">
            Made with <span className="f-hl">❤</span> of Ravi Bharti
          </h3>
        </div>
        <div className="f-box">
          <h3 className="f-connect">Connect with me</h3>

          <a
            href="https://github.com/ravics1721/"
            className="f-link"
            target="_blanck"
          >
            <i className="ri-github-fill ri-2x "></i>
          </a>
          <a href="https://www.linkedin.com/in/ravics1718/" className="f-link">
            <i className="ri-linkedin-box-fill ri-2x"></i>
          </a>
          <a href="https://twitter.com/Ravics1718" className="f-link">
            <i className="ri-twitter-line ri-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
