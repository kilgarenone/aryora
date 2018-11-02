import React from "react";
import { css } from "react-emotion";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";
import Container from "../Container";
import spacing from "../../styles/spacing";
import { marginBottom4, marginBottom3 } from "../../styles/utilities";
import Heading from "../Heading";
// import { marginBottom3 } from "../../css/utilities";

const sectionCss = css`
  & {
    position: relative;
    padding: ${spacing.space4} 0;
    background-color: #fff1e5;
    height: 95vh;
  }

  &::before {
    content: "";
    position: absolute;
    left: -47px;
    bottom: -250px;
    height: 600px;
    width: 500px;
    border-radius: 19% 71% 38% 36% / 38% 44% 56% 27%;
    background: rgb(250, 250, 250);
    background: linear-gradient(
      346deg,
      rgba(250, 250, 250, 1) 45%,
      rgba(232, 243, 236, 1) 68%
    );
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -76px;
    height: 700px;
    width: 600px;
    border-radius: 73% 28% 14% 44% / 40% 34% 43% 72%;
    background: rgb(252, 231, 221);
    background: linear-gradient(
      236deg,
      rgba(252, 231, 221, 1) 0%,
      rgba(250, 250, 250, 1) 61%
    );
  }
`;

const heroCss = css`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
`;

const heroCopy = css`
  max-width: 85%;
  margin: 0 auto;
  ${marginBottom3};
`;

function HomePageHero() {
  return (
    <section className={sectionCss}>
      <Container>
        <div className={heroCss}>
          <Heading
            tag="h1"
            isSerifFont
            isLineHeightReduced
            className={marginBottom3}
          >
            A simple, low-cost place that builds your long-term wealth
          </Heading>
          <p className={heroCopy}>
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
      </Container>
    </section>
  );
}

export default HomePageHero;
