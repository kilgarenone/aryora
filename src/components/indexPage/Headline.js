import React from "react";
import { css } from "react-emotion";
import Img from "gatsby-image";
import Container from "../Container";
import Heading from "../Heading";
import spacing from "../../css/spacing";
import Section from "../Section";
import media from "../../css/mediaQueries";
import GridItem from "../GridItem";
import GridParent from "../GridParent";

function Headline({ headlineImg }) {
  return (
    <Section>
      <Container>
        <GridParent
          className={css`
            flex-direction: column;
            align-items: center;

            ${media.lg(
              css`
                flex-direction: row;
              `
            )}
          `}
        >
          <GridItem width="40%">
            <Img
              title="Ornament image for headline section"
              alt="Reconcile the time-tested philosophy with modern technology"
              fluid={headlineImg}
            />
          </GridItem>
          <GridItem width="60%">
            <Heading
              className={css`
                max-width: 40rem;
              `}
              weight="500"
              tag="h3"
            >
              Simple, time-proven investment strategies in a complex world
            </Heading>
            <div
              className={css`
                display: flex;
                flex-wrap: wrap;
                margin-left: -30px;
                margin-right: -30px;
              `}
            >
              <div
                className={css`
                  flex: 1 0 50%;
                  padding: 0 30px;
                `}
              >
                <div
                  className={css`
                    padding-top: 25px;
                  `}
                >
                  <Heading marginBottom={spacing.space0} tag="h4">
                    Buy the haystack
                  </Heading>
                  <p>
                    We build your portfolio with low-cost index funds that
                    simply holds every stock in several indexes. That takes
                    emotions and theories out of the equation. We charge only a
                    0.15% annual advisory fee on what you invest. Period.
                  </p>
                </div>
              </div>
              <div
                className={css`
                  flex: 1 0 50%;
                  padding: 0 30px;
                `}
              >
                <div
                  className={css`
                    padding-top: 25px;
                  `}
                >
                  <Heading marginBottom={spacing.space0} tag="h4">
                    Passive investing on autopilot
                  </Heading>
                  <p>
                    Chasing the market is a loser&apos;s game over the long
                    term.
                    <sup>
                      <cite>
                        <a
                          className="citation"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://us.spindices.com/documents/spiva/spiva-us-mid-year-2017.pdf"
                        >
                          1
                        </a>
                      </cite>
                    </sup>{" "}
                    Instead, what works is long-term investing. And we make it
                    easy and delightful to take the first step to building your
                    wealth within your risk comfort zone, and staying the course
                    for you.
                  </p>
                </div>
              </div>
            </div>
          </GridItem>
        </GridParent>
      </Container>
    </Section>
  );
}

export default Headline;
