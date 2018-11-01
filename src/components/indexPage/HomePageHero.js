import React from "react";
import { css } from "react-emotion";

const styles = css`
  .hero {
    text-align: center;
    max-width: 60%;
    margin: 0 auto;
  }

  .hero-copy {
    max-width: 80%;
  }
`;

function HomePageHero() {
  return (
    <section className={styles}>
      <div className="container">
        <div className="hero">
          <h1 className="g-font-serif g-mb-0">
            A simple, low-cost place that builds your long-term wealth
          </h1>
          <p className="hero-copy g-margin-auto">
            Get the most out of market returns by investing in broad-based index
            funds and rebalance automatically.
          </p>
          <
        </div>
      </div>
    </section>
  );
}

export default HomePageHero;
