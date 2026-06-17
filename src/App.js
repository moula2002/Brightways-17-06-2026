import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DisclosureDisclaimer from "./Components/DisclosureDisclaimer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Kyc from "./Components/Kyc";
import Policy from "./Components/Policy";
import Service from "./Components/Service";
import Complaint from "./Components/Complaint";
import Investor from "./Components/Investor";
import Complaint2 from "./Components/Complaint2";
import BasicStockCash from "./Components/BasicStockCash";
import BasicIndexOption from "./Components/BasicIndexOption";
import HniIndexOption from "./Components/HniIndexOption";
import HniStockOption from "./Components/HniStockOption";
import MomentumTrade from "./Components/MomentumTrade";
import ProCommodity from "./Components/ProCommodity";
import StockCashPro from "./Components/StockCashPro";
import HNIStockFuturePro from "./Components/HNIStockfuturepro";
import PaymentPage from "./Components/Payment";
import AccessibilityStatement from "./Components/AccessibilityStatement";
import ClientConsentDocument from "./Components/ClientConsentDocument";

const bannerImages = {
   "/service": "/Image/image1.jpg",
  "/investor": "/Image/image2.jpg",
  "/complaint-table": "/Image/image3.jpg",
  "/about-us": "/Image/about_us_banner.png",
  "/disclosure-disclaimer": "/Image/image5.jpg",
  "/contact": "/Image/image6.jpg",
  "/accessibility-statement": "/Image/image7.jpg",
};

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    let title = "Brightways";

    if (path.includes("/about-us")) title = "About Us";
    else if (path.includes("/service")) title = "Services";
    else if (path.includes("/investor")) title = "Investor Charter";
    else if (path.includes("/complaint-table")) title = "Complaint Table";
    else if (path.includes("/basic-stock-cash")) title = "Basic Stock Cash";
    else if (path.includes("/basic-index-option")) title = "Basic Index Option";
    else if (path.includes("/hni-index-option")) title = "HNI Index Option";
    else if (path.includes("/hni-stock-option")) title = "HNI Stock Option";
    else if (path.includes("/momentum-trade")) title = "Momentum Trade";
    else if (path.includes("/hni-stock-future-pro")) title = "HNI Stock Future Pro";
    else if (path.includes("/pro-commodity")) title = "Pro Commodity";
    else if (path.includes("/stock-cash-pro")) title = "Stock Cash Pro";
    else if (path.includes("/contact")) title = "Contact Us";
    else if (path.includes("/policy")) title = "Policy";
    else if (path.includes("/disclosure-disclaimer")) title = "Disclosure & Disclaimer";
    else if (path.includes("/terms-of-services")) title = "Terms of Service";
    else if (path.includes("/kyc")) title = "KYC";
    else if (path.includes("/payment")) title = "Payment";
    else if (path.includes("/accessibility-statement")) title = "Accessibility Statement";

    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    // Language attribute is set in index.html, but ensure it's there
    <div style={{ overflow: "clip" }}>
      <BrowserRouter>
        <DynamicTitle />
        {/* Skip link is now in Header component */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                 <Header />
                <main id="main-content" tabIndex="-1">
                  <Home />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/about-us"
            element={
              <>
                <Header bannerImage={bannerImages["/about-us"]} bannerHeading="About Us" />
                <main id="main-content" tabIndex="-1">
                  <About />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/service"
            element={
              <>
                <Header bannerImage={bannerImages["/service"]} bannerHeading="Services" />

                <main id="main-content" tabIndex="-1">
                  <Service />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/investor"
            element={
              <>
                <Header bannerImage={bannerImages["/investor"]} bannerHeading="Investor Charter" />
                <main id="main-content" tabIndex="-1">
                  <Investor />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/complaint-table"
            element={
              <>
                <Header bannerImage={bannerImages["/complaint-table"]} bannerHeading="Complaint Table" />
                <main id="main-content" tabIndex="-1">
                  <Complaint2 />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/basic-stock-cash"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <BasicStockCash />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/basic-index-option"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <BasicIndexOption />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/hni-index-option"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <HniIndexOption />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/hni-stock-option"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <HniStockOption />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/momentum-trade"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <MomentumTrade />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/hni-stock-future-pro"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <HNIStockFuturePro />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/pro-commodity"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <ProCommodity />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/stock-cash-pro"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <StockCashPro />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Header bannerImage={bannerImages["/contact"]} bannerHeading="Contact Us" />
                <main id="main-content" tabIndex="-1">
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/policy"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <Policy />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/disclosure-disclaimer"
            element={
              <>
                <Header bannerImage={bannerImages["/disclosure-disclaimer"]} bannerHeading="Disclosure & Disclaimer" />
                <main id="main-content" tabIndex="-1">
                  <DisclosureDisclaimer />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/terms-of-services"
            element={
              <>
                <Header bannerHeading="Terms of Service" />
                <main id="main-content" tabIndex="-1">
                  <ClientConsentDocument />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/kyc"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <Kyc />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <main id="main-content" tabIndex="-1">
                  <PaymentPage />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/accessibility-statement"
            element={
              <>
                <Header bannerImage={bannerImages["/accessibility-statement"]} bannerHeading="Accessibility Statement" />
                <main id="main-content" tabIndex="-1">
                  <AccessibilityStatement />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;