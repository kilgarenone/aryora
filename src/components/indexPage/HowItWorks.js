import React from "react";
import { css } from "react-emotion";
import Container from "../Container";
import Heading from "../Heading";
import GridItem from "../GridItem";
import GridParent from "../GridParent";
import spacing from "../../css/spacing";
import Section from "../Section";

const gridItemCss = css`
  &::before {
    border-radius: 40px;
    border: 1px solid #bdbdbd;
    content: counter(item) "";
    counter-increment: item;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
    margin-bottom: ${spacing.space1};
    font-weight: 500;
    font-size: 2.2rem;
  }
`;

const gridParentCss = css`
  counter-reset: item;
`;

function HowItWorks() {
  return (
    <Section
      className={css`
        padding: ${spacing.space3};
        background-color: #f3f3f3;
      `}
    >
      <Container>
        <Heading marginBottom={spacing.space3} weight="500" tag="h3">
          How it works
        </Heading>
        <GridParent tag="ol" className={gridParentCss}>
          <GridItem tag="li" width="33%" className={gridItemCss}>
            <Heading marginBottom={spacing.space0} tag="h4">
              Get to know you
            </Heading>
            <p>
              Everyone&apos;s temperament and position in life is different. So,
              first step is you will fill up a short questionnaire that allows
              us to understand your risk tolerance and affordance level.
            </p>
          </GridItem>
          <GridItem tag="li" width="33%" className={gridItemCss}>
            <Heading marginBottom={spacing.space0} tag="h4">
              Get your plan
            </Heading>
            <p>
              After having a clearer picture of you, we&apos;ll suggest a
              portfolio with a particular composition of different asset
              classes. At this point, if you like, you can chat with one of our
              certified advisers for support.
            </p>
          </GridItem>
          <GridItem tag="li" width="33%" className={gridItemCss}>
            <Heading marginBottom={spacing.space0} tag="h4">
              Stay on track
            </Heading>
            <p>
              Having funded your portfolio, it&apos;s recommended that you chose
              to automate regular contribution to your portfolio. Towernest will
              monitor and rebalance to your target portfolio quarterly for you.
              Now, you&apos;re all set!
            </p>
          </GridItem>
        </GridParent>
      </Container>
    </Section>
  );
}

export default HowItWorks;
