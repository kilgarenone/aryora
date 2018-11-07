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
            Simplest winning investment strategy in a complex world
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
                  Own the whole market
                </Heading>
                <p>
                  Nothing beats diversification like a portfolio owning the
                  whole world markets. We build your portfolio with low-cost
                  investment funds so you can earn the closest possible to the
                  total market returns.
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
                  Keep more of your money
                </Heading>
                <p>
                  We are against paying for hidden or unnecessary costs and
                  fees. Other than the low intrinsic fund fees themselves, we
                  charge only a 0.15% annual advisory fee on what you invest.
                  That&apos;s all.
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
                  Blah blah blah
                </Heading>
                <p>
                  hole shit check it out my man this is crazy!!!!hole shit check
                  it out my man this is crazy!!!!{" "}
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
                  Blah blah blah
                </Heading>
                <p>
                  hole shit check it out my man this is crazy!!!!hole shit check
                  it out my man this is crazy!!!!{" "}
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
