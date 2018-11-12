import React from "react";
import { css } from "react-emotion";
import Heading from "./Heading";

const Header = () => (
  <header>
    <div
      className={css`
        padding: 0.5rem 1.0875rem 0;
      `}
    >
      <Heading
        tag="h3"
        isSerifFont
        className={css`
          color: rgba(0, 0, 0, 0.6);
          letter-spacing: 0.01rem;
        `}
      >
        towernest
      </Heading>
    </div>
  </header>
);

export default Header;
