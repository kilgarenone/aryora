import React from "react";
import { css, cx } from "react-emotion";
import media from "../css/mediaQueries";

function defaultCssClass(width) {
  return css`
    min-width: 100%;
    flex-basis: 100%;
    padding: 0 30px;

    ${media.md(css`
      min-width: ${width};
      flex-basis: ${width};
    `)}
  `;
}

function GridItem({ children, tag: Tag = "div", width, className, ...props }) {
  return (
    <Tag className={cx(defaultCssClass(width), className)} {...props}>
      {children}
    </Tag>
  );
}

export default GridItem;
