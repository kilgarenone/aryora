import React from "react";
import { css } from "react-emotion";

function Footer(props) {
  const { children } = props;

  return (
    <footer>
      <div
        className={css`
          text-align: left;
          padding-left: 30px;
          padding-bottom: 10px;
        `}
      >
        {children}
      </div>
    </footer>
  );
}

export default Footer;
