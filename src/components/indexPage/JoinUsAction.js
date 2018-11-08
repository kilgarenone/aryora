import React from "react";
import Img from "gatsby-image";
import Section from "../Section";
import Container from "../Container";

function JoinUsAction({ joinUsActionImg }) {
  return (
    <Section>
      <Container>
        <Img
          style={{ width: "20%" }}
          title="Ornament image for headline section"
          alt="Reconcile the time-tested philosophy with modern technology"
          fluid={joinUsActionImg}
        />
      </Container>
    </Section>
  );
}

export default JoinUsAction;
