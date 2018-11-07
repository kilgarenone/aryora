import React, { Component } from "react";
import { css } from "react-emotion";
import Container from "../Container";
import Heading from "../Heading";
import GridItem from "../GridItem";
import GridParent from "../GridParent";

const gridItemCss = css`
  &::before {
    box-shadow: 0 0 0 2px #818fee inset;
    border-radius: 40px;
    content: counter(item) "";
    counter-increment: item;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: block;
    margin-bottom: 20px;
    color: #818fee;
    font-weight: 500;
    font-size: 2.2rem;
  }
`;

const gridParentCss = css`
  counter-reset: item;
  list-style-type: none;
  list-style: decimal inside;
`;
function HowItWorks() {
  return (
    <section>
      <Container>
        <Heading tag="h3">How it works</Heading>
        <GridParent tag="ol" className={gridParentCss}>
          <GridItem tag="li" width="33" className={gridItemCss}>
            <Heading tag="h4">Get to know you</Heading>
            <p>
              After filling out your online profile and syncing your accounts,
              you'll speak with a CFP® who will get to know you, discuss your
              current situation, and create your personalized financial plan.
            </p>
          </GridItem>
          <GridItem tag="li" width="33" className={gridItemCss}>
            <Heading tag="h4">Get to know you</Heading>
            <p>
              After filling out your online profile and syncing your accounts,
              you'll speak with a CFP® who will get to know you, discuss your
              current situation, and create your personalized financial plan.
            </p>
          </GridItem>
          <GridItem tag="li" width="33" className={gridItemCss}>
            <Heading tag="h4">Get to know you</Heading>
            <p>
              After filling out your online profile and syncing your accounts,
              you'll speak with a CFP® who will get to know you, discuss your
              current situation, and create your personalized financial plan.
            </p>
          </GridItem>
        </GridParent>
      </Container>
    </section>
  );
}

export default HowItWorks;
