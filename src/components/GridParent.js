import React from "react";
import { css, cx } from "react-emotion";

const defaultCssClass = css`
  display: flex;
  margin-right: -30px;
  margin-left: -30px;
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
