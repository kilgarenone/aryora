import React from "react";
import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, location }) => (
  <div>
    <Helmet defaultTitle="Towernest - Simple and Low-cost Investing for Everyone">
      <html lang="en" />
      <meta
        name="description"
        content="Low-cost and tax-smart passive investing with broad-based index funds"
      />
      <meta
        name="keywords"
        content="investing, index funds malaysia, index funds, passive investing, investing DIY, passive wealth, passive wealth management"
      />
      <meta
        property="og:title"
        content="Aryora - Passive Investing for Everyone"
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
    {children}
    <Footer>© 2018 Aryora.</Footer>
  </div>
);

export default Layout;
