import React from "react";

function Footer() {
  return (
    <footer
      className="footer-0"
      role="contentinfo"
      aria-label="Site footer with company information and quick links"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="footer-about">
          <div className="row">
            {/* COMPANY INFO */}
            <div className="col-md-4">
              <section aria-labelledby="company-info-heading">
                <h2 id="company-info-heading" className="hero--f" style={{ fontSize: "24px", marginBottom: "15px" }}>
                  BrightWays
                </h2>
                <p>
                  Brightways financial research house carrying out operations
                  in the intraday as well as delivery calls in Indian Equities
                  and Derivatives market
                </p>
              </section>
            </div>

            {/* NAVIGATION */}
            <div className="col-md-4">
              <nav aria-label="Footer Navigation">
                <h2 style={{ fontSize: "18px", marginBottom: "15px" }}>Quick Links</h2>
                <ul className="jghf" style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>
                    <a href="/">
                      <span aria-hidden="true">➤</span> Home
                    </a>
                  </li>
                  <li>
                    <a href="/service">
                      <span aria-hidden="true">➤</span> Service
                    </a>
                  </li>
                  <li>
                    <a href="/about-us">
                      <span aria-hidden="true">➤</span> About us
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <span aria-hidden="true">➤</span> Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/policy">
                      <span aria-hidden="true">➤</span> Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="/accessibility-statement">
                      <span aria-hidden="true">➤</span> Accessibility Statement
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-services">
                      <span aria-hidden="true">➤</span> Terms of Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTA */}
            <div className="col-md-4">
              <section aria-label="Call to action">
                <h2 style={{ fontSize: "18px", marginBottom: "15px" }}>Get Started</h2>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li className="jghf kk" style={{ fontSize: "24px", fontWeight: "600" }}>
                    GET EXPERT ADVICE
                  </li>
                  <li style={{ marginTop: "15px" }}>
                    <a href="/contact" className="btn btn-light" style={{ color: "#0f6d41", fontWeight: "600", padding: "10px 20px", textDecoration: "none" }}>
                      Contact Us Today
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className="row border-top pt-3 mt-3">
          <div className="col-12 text-center">
            <p style={{ fontSize: "12px", marginBottom: "10px" }}>
              © {new Date().getFullYear()} Brightways Financial Services. SEBI Reg No: INH000010566
            </p>
            <p style={{ fontSize: "11px" }}>
              <a href="/disclosure-disclaimer" style={{ color: "white", textDecoration: "underline" }}>Disclosure & Disclaimer</a> | 
              <a href="/policy" style={{ color: "white", textDecoration: "underline", marginLeft: "10px" }}> Refund Policy</a> |
              <a href="/accessibility-statement" style={{ color: "white", textDecoration: "underline", marginLeft: "10px" }}> Accessibility Statement</a> |
              <a href="/terms-of-services" style={{ color: "white", textDecoration: "underline", marginLeft: "10px" }}> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;