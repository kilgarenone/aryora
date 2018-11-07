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
                  Own global markets at low cost
                </Heading>
                <p>
                  We build your portfolio with low-cost index funds that span
                  the entire world&apos;s market so you can earn the closest
                  possible to the total market returns. No hidden costs or
                  unnecessary fees. We charge only a 0.15% annual advisory fee
                  on what you invest. That&apos;s all.
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
                  Delightful passive investing
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
                  easy and delightful for you. Every decision and design we have
                  made aims to help you take the first step to building your
                  wealth within your risk comfort zone, and staying the course.
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
