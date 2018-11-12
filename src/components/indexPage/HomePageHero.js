import React from "react";
import { css } from "react-emotion";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";
import Container from "../Container";
import spacing from "../../css/spacing";
import { marginBottom3 } from "../../css/utilities";
import Heading from "../Heading";
import Section from "../Section";
import media from "../../css/mediaQueries";

const sectionCss = css`
  & {
    margin-top: ${spacing.space3};

    ${media.lg(
      css`
        margin-top: ${spacing.space4};
      `
    )}
  }

  &::before {
    content: "";
    position: absolute;
    left: -47px;
    top: 0;
    height: 90%;
    width: 25%;
    border-radius: 19% 71% 38% 36% / 38% 44% 56% 27%;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -10%;
    height: 100%;
    width: 50%;
    border-radius: 73% 28% 14% 44% / 40% 34% 43% 72%;
  }
`;

const heroCss = css`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;

  ${media.md(css`
    max-width: 60%;
  `)}
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
          <Heading tag="h1" isSerifFont className={marginBottom3}>
            A simple and low-cost way for passive investing
          </Heading>
          <p className={heroCopy}>
            Build more wealth by investing in broad-based index funds, rebalance
            automatically, and stop paying extra fees.
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
                formClassName={css`
                  margin: 0 auto;
                `}
              />
            )}
          </BetaSignup>
        </div>
      </Container>
    </Section>
  );
}

export default HomePageHero;
