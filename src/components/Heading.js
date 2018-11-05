// @flow
import * as React from "react";
import { css, cx } from "react-emotion";
import {
  tagMapping,
  fontSize,
  fontWeight,
  lineHeight
} from "../styles/typography";
import { colors } from "../styles/colors";

const serifFont = css`
  font-family: "Times New Roman", Times, serif;
`;

const lowLineHeight = css`
  line-height: 1.2;
`;

function fontWeightClass(weight) {
  return css`
    font-weight: ${weight};
  `;
}

const styles = {
  headingXL: css`
    font-size: ${fontSize.headingXL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingXL};
    color: ${colors.headerColor};
  `,
  headingL: css`
    font-size: ${fontSize.headingL};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.headingL};
    color: ${colors.headerColor};
  `,
  heading: css`
    font-size: ${fontSize.heading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.heading};
    color: ${colors.headerColor};
  `,
  subheading: css`
    font-size: ${fontSize.subheading};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.subheading};
    color: ${colors.headerColor};
  `
};

function Heading({
  children,
  tag: Tag,
  className,
  isSerifFont = false,
  isLineHeightReduced = false,
  weight = null,
  ...props
}) {
  return (
    <Tag
      className={cx(
        styles[tagMapping[Tag]],
        className,
        fontWeightClass(weight),
        {
          [serifFont]: isSerifFont,
          [lowLineHeight]: isLineHeightReduced
        }
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
