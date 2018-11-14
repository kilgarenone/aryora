import React from "react";
import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, location }) => (
  <>
    <Helmet defaultTitle="Towernest - Simple and Low-cost Investing for Everyone">
      <html lang="en" />
      <meta
        name="description"
        content="Low-cost and tax-smart passive investing with broad-based index funds"
      />
      <meta
        name="keywords"
        content="malaysia, investing, index funds malaysia, index funds, passive investing, investing DIY, passive wealth, digital investment management"
      />
      <meta
        property="og:title"
        content="Towernest - Simple Passive Investing for Everyone"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://towernest.com" />
      <meta
        property="og:image"
        content="https://source.unsplash.com/DWGAlCVnDm0/1200x1200"
      />
      <link
        rel="canonical"
        href={`https://towernest.com${location.pathname}`}
      />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer>
      Made with{" "}
      <span role="img" aria-label="made by love">
        ❤️
      </span>{" "}
      by{" "}
      <a
        style={{ textDecoration: "underline" }}
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/kheohyeewei/"
      >
        Kheoh Yee Wei
      </a>
      <br />© 2018 Towernest. All rights reserved.
    </Footer>
  </>
);

export default Layout;
