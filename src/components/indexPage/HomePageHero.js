import React from "react";
import { css } from "react-emotion";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";
import Container from "../Container";
import spacing from "../../css/spacing";
import { marginBottom3 } from "../../css/utilities";
import Heading from "../Heading";
import Section from "../Section";

const sectionCss = css`
  & {
    margin-top: ${spacing.space6};
    padding-bottom: ${spacing.space5};
  }

  &::before {
    content: "";
    position: absolute;
    left: -47px;
    top: 0;
    height: 90%;
    width: 25%;
    border-radius: 19% 71% 38% 36% / 38% 44% 56% 27%;
    border: 1px solid lightgrey;
    /* background: rgb(250, 250, 250);
    background: linear-gradient(
      346deg,
      rgba(250, 250, 250, 1) 45%,
      rgba(232, 243, 236, 1) 68%
    ); */
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -10%;
    height: 100%;
    width: 50%;
    border-radius: 73% 28% 14% 44% / 40% 34% 43% 72%;
    border: 1px solid lightgrey;
    /* background: rgb(252, 231, 221);
    background: linear-gradient(
      236deg,
      rgba(252, 231, 221, 1) 0%,
      rgba(250, 250, 250, 1) 61%
    ); */
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
    <Section className={sectionCss}>
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
            Get the most out of stock market return by investing in broad-based
            index funds and rebalance automatically.
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
    </Section>
  );
}

export default HomePageHero;
