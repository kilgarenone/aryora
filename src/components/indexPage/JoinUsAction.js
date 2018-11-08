import React from "react";
import Img from "gatsby-image";
import Section from "../Section";
import Container from "../Container";
import GridParent from "../GridParent";
import GridItem from "../GridItem";
import Heading from "../Heading";
import BetaSignup from "../BetaSignup";
import InputButtonGroup from "../InputButtonGroup";

function JoinUsAction({ joinUsActionImg }) {
  return (
    <Section>
      <Container>
        <GridParent>
          <GridItem width="60%">
            <div>
              <Heading isLineHeightReduced isSerifFont tag="h2">
                We are cooking something awesome.
              </Heading>
              <Heading isLineHeightReduced isSerifFont tag="h2">
                Surprise yourself when it&apos;s ready.
              </Heading>
            </div>
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
          <GridItem width="40%">
            <Img
              style={{ width: "20%" }}
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
