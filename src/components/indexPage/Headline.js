import React from "react";
import { css } from "react-emotion";
import Container from "../Container";
import Heading from "../Heading";

function Headline() {
  return (
    <section>
      <Container
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            flex: 1 0 60%;
          `}
        >
          <Heading weight="500" tag="h3">
            Become simpler investment strategy in a complex world
          </Heading>
          <div
            className={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <div
              className={css`
                flex: 1 0 50%;
                padding-right: 20px;
              `}
            >
              <Heading tag="h5">Blah blah blah</Heading>
              <p>
                hole shit check it out my man this is crazy!!!!hole shit check
                it out my man this is crazy!!!!{" "}
              </p>
            </div>
            <div
              className={css`
                flex: 1 0 50%;
              `}
            >
              <Heading tag="h5">Blah blah blah</Heading>
              <p>
                hole shit check it out my man this is crazy!!!!hole shit check
                it out my man this is crazy!!!!{" "}
              </p>
            </div>
            <div
              className={css`
                flex: 1 0 50%;
              `}
            >
              <Heading tag="h5">Blah blah blah</Heading>
              <p>
                hole shit check it out my man this is crazy!!!!hole shit check
                it out my man this is crazy!!!!{" "}
              </p>
            </div>
            <div
              className={css`
                flex: 1 0 50%;
              `}
            >
              <Heading tag="h5">Blah blah blah</Heading>
              <p>
                hole shit check it out my man this is crazy!!!!hole shit check
                it out my man this is crazy!!!!{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1 0 30%;
          `}
        >
          Dope image here
        </div>
      </Container>
    </section>
  );
}

export default Headline;
