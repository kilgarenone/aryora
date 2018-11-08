import React from "react";
import Img from "gatsby-image";
import { css } from "react-emotion";
import Section from "../Section";
import Container from "../Container";
import GridParent from "../GridParent";
import GridItem from "../GridItem";
import Heading from "../Heading";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";
import spacing from "../../css/spacing";

function JoinUsAction({ joinUsActionImg }) {
  return (
    <Section>
      <Container>
        <GridParent>
          <GridItem width="60%">
            <Heading
              className={css`
                margin-bottom: ${spacing.space3};
              `}
              isLineHeightReduced
              isSerifFont
              tag="h2"
            >
              We are cooking something awesome.
              <br />
              Surprise yourself when it&apos;s ready.
            </Heading>
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
          </GridItem>
          <GridItem
            className={css`
              position: relative;
            `}
            width="25%"
          >
            <Img
              title="Ornament image for headline section"
              alt="Reconcile the time-tested philosophy with modern technology"
              fluid={joinUsActionImg}
            />
          </GridItem>
        </GridParent>
      </Container>
    </Section>
  );
}

export default JoinUsAction;
