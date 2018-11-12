import React from "react";
import { css, cx } from "react-emotion";
import media from "../css/mediaQueries";
import spacing from "../css/spacing";

function defaultCssClass(width) {
  return css`
    min-width: 100%;
    flex-basis: 100%;
    padding: 0 1.8rem;
    margin-bottom: ${spacing.space3};

    &:last-child {
      margin-bottom: 0;
    }

    ${media.md2(css`
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
