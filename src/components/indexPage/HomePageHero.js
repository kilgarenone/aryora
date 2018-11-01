import React from "react";
import { css } from "react-emotion";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";

const styles = css`
  & {
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -200px;
    height: 600px;
    width: 500px;
    border-radius: 19% 71% 38% 36% / 38% 44% 56% 27%;
    background: rgb(232, 243, 236);
    background: radial-gradient(
      circle,
      rgba(232, 243, 236, 1) 0%,
      rgba(250, 250, 250, 1) 61%
    );
  }
  .hero {
    text-align: center;
    max-width: 60%;
    margin: 0 auto;
  }

  .hero-copy {
    max-width: 85%;
  }
`;

function HomePageHero() {
  return (
    <section className={styles}>
      <div className="container">
        <div className="hero">
          <h1 className="g-font-serif g-mb-3">
            A simple, low-cost place that builds your long-term wealth
          </h1>
          <p className="g-h4 hero-copy g-mb-2 g-m-auto">
            Get the most out of market returns by investing in broad-based index
            funds and rebalance automatically.
          </p>
          <BetaSignup>
            {({
              handleSubmit,
              inputValue,
              handleInputChange,
              isSubmitting
            }) => (
              <InputButtonGroup
                handleSubmit={handleSubmit}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                isSubmitting={isSubmitting}
              />
            )}
          </BetaSignup>
        </div>
      </div>
    </section>
  );
}

export default HomePageHero;
