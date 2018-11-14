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
      <script>
        {`"use strict";

          !function() {
            var t = window.driftt = window.drift = window.driftt || [];
            if (!t.init) {
              if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
              t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
              t.factory = function(e) {
                return function() {
                  var n = Array.prototype.slice.call(arguments);
                  return n.unshift(e), t.push(n), t;
                };
              }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
              }), t.load = function(t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
              };
            }
          }();
          drift.SNIPPET_VERSION = '0.3.1';
          drift.load('p764htn8sd7a');`}
      </script>
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
