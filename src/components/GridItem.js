import React from "react";
import { css, cx } from "react-emotion";

function defaultCssClass(width) {
  return css`
    flex-basis: ${width};
    padding: 0 30px;
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
