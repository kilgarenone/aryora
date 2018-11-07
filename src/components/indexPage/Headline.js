import React from "react";
import { css } from "react-emotion";
import Img from "gatsby-image";
import Container from "../Container";
import Heading from "../Heading";
import spacing from "../../css/spacing";

function Headline({ headlineImg }) {
  return (
    <section>
      <Container
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            flex: 1 0 30%;
            padding: 0 30px;
          `}
        >
          <Img
            title="Ornament image for headline section"
            alt="Reconcile the time-tested philosophy with modern technology"
            fluid={headlineImg}
          />
        </div>
        <div
          className={css`
            flex: 1 0 60%;
            padding: 0 30px;
          `}
        >
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
                  We build your portfolio with low-cost index funds that simply
                  holds every stock in several indexes. That takes emotions and
                  theories out of the equation. We charge only a 0.15% annual
                  advisory fee on what you invest. That&apos;s all.
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
                  Chasing the market is a loser&apos;s game over the long term.
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
        </div>
      </Container>
    </section>
  );
}

export default Headline;
