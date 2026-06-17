import React, { useEffect } from "react";

const AccessibilityStatement = () => {


  return (
    <section
      role="region"
      aria-labelledby="as-heading"
      style={{
        fontFamily: "'Open Sans', Arial, sans-serif",
        fontSize: "16px",
        lineHeight: "1.8",
        color: "#1a1a1a",
        backgroundColor: "#ffffff",
        padding: "32px 24px",
        maxWidth: "860px",
        margin: "0 auto",
      }}
    >
      <h1
        id="as-heading"
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "#003366",
          marginBottom: "4px",
        }}
      >
        Accessibility Statement
      </h1>

      <p
        style={{
          fontSize: "14px",
          color: "#595959",
          marginTop: "4px",
          marginBottom: "32px",
        }}
      >
        <strong>Website:</strong> brightwaysfinancial.com
        <br />
        <strong>Last Updated:</strong>
        <time datetime="2026-04-01">01 April 2026</time>
      </p>

      {/* SECTION 1: CONFORMANCE STATUS */}
      <h2
        style={{
          fontSize: "19px",
          fontWeight: "700",
          color: "#003366",
          marginTop: "0",
          marginBottom: "8px",
          borderBottom: "2px solid #003366",
          paddingBottom: "5px",
        }}
      >
        Conformance Status
      </h2>
      <p style={{ marginTop: "10px" }}>
        This website has undergone a
        <strong> WCAG 2.1 Level A and AA accessibility audit</strong>
        completed in <strong>March 2026</strong>. The website is currently{" "}
        <strong>partially conformant</strong> with WCAG 2.1 Level AA as
        published by the World Wide Web Consortium (W3C). Remediation of
        identified issues is in progress.
      </p>

      {/* SECTION 2: ESCALATION */}
      <h2
        style={{
          fontSize: "19px",
          fontWeight: "700",
          color: "#003366",
          marginTop: "32px",
          marginBottom: "8px",
          borderBottom: "2px solid #003366",
          paddingBottom: "5px",
        }}
      >
        Escalation
      </h2>
      <p style={{ marginTop: "10px" }}>
        If our response hasn't resolved your concern, you may raise a grievance through the following channels:
        <br />
         <strong>Email Support:</strong> <a href="mailto:Support@brightwaysfinancial.com" style={{ color: "#0052cc" }}>Support@brightwaysfinancial.com</a>
        <br />
       <strong>SEBI SCORES:</strong> <a href="https://scores.sebi.gov.in/" style={{ color: "#0052cc" }}>https://scores.sebi.gov.in/</a>

      </p>

      {/* SECTION 3: FEEDBACK AND CONTACT */}
      <h2
        style={{
          fontSize: "19px",
          fontWeight: "700",
          color: "#003366",
          marginTop: "32px",
          marginBottom: "8px",
          borderBottom: "2px solid #003366",
          paddingBottom: "5px",
        }}
      >
        Feedback and Contact
      </h2>
      <p style={{ marginTop: "10px" }}>
        If you experience any difficulty accessing content on this website,
        please contact us. We aim to respond within
        <strong> 2 working days</strong>.
      </p>
      <ul style={{ paddingLeft: "24px", marginTop: "8px", lineHeight: "2.2" }}>
        <li>
          <strong>Name:</strong> ANITHA M, SEBI Registered Research Analyst
          (INH000010566)
        </li>
        <li>
          <strong>Email:</strong>
          <a
            href="mailto:support@brightwaysfinancial.com"
            style={{ color: "#0052cc" }}
          >
            support@brightwaysfinancial.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong>
          <a href="tel:+916363360542" style={{ color: "#0052cc" }}>
            +91 6363 360542
          </a>
        </li>
      </ul>

      {/* FOOTER */}
      <p
        style={{
          marginTop: "40px",
          fontSize: "13px",
          color: "#595959",
          borderTop: "1px solid #d0d0d0",
          paddingTop: "14px",
        }}
      >
        This statement was prepared on
        <time datetime="2026-04-01">
          <strong>01 April 2026</strong>
        </time>
        and will be reviewed annually or when significant changes are made to
        this website.
      </p>
    </section>
  );
};

export default AccessibilityStatement;