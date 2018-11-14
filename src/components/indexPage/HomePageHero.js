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
    padding-top: ${spacing.space3};
    padding-bottom: ${spacing.space3};
    background-color: #fce7dd;

    ${media.lg(
      css`
        padding-top: ${spacing.space4};
        padding-bottom: ${spacing.space5};
      `
    )}
  }
`;

const heroCss = css`
  position: relative;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  background-color: #fce7dd;
  z-index: 1;

  ${media.md(css`
    max-width: 60%;
  `)}

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -20%;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border-bottom: 5px solid brown;
    opacity: 0.15;
  }
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
          <div
            className={css`
              background-color: #fce7dd;
            `}
          >
            <Heading tag="h1" isSerifFont className={marginBottom3}>
              A simple and low-cost way for passive investing
            </Heading>
            <p className={heroCopy}>
              Build more wealth by investing in broad-based index funds,
              rebalance automatically, and stop paying extra fees.
            </p>
            <BetaSignup>
              {({
                handleSubmit,
                inputValue,
                handleInputChange,
                isSubmitting,
                submissionSuccess
              }) => (
                <InputButtonGroup
                  handleSubmit={handleSubmit}
                  inputValue={inputValue}
                  handleInputChange={handleInputChange}
                  isSubmitting={isSubmitting}
                  submissionSuccess={submissionSuccess}
                  formClassName={css`
                    margin: 0 auto;
                  `}
                />
              )}
            </BetaSignup>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomePageHero;
