import { css } from "react-emotion";

const breakPoints = {
  // Numerical values will result in a min-width query
  md: 36,
  md2: 49,
  lg: 65,
  // String values will be used as is
  tallPhone: "(max-width: 360px) and (min-height: 740px)"
};

const mq = Object.keys(breakPoints).reduce((accumulator, label) => {
  const prefix = typeof breakPoints[label] === "string" ? "" : "min-width:";
  const suffix = typeof breakPoints[label] === "string" ? "" : "em";
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakPoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export default mq;
