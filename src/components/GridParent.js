import React from "react";
import { css, cx } from "react-emotion";

const defaultCssClass = css`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1.5rem;
  margin-left: -1.5rem;
`;

function GridParent({
  children,
  tag: Tag = "div",
  width,
  className,
  ...props
}) {
  return (
    <Tag className={cx(defaultCssClass, className)} {...props}>
      {children}
    </Tag>
  );
}

export default GridParent;
