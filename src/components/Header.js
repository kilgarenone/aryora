import React from "react";
import { css } from "react-emotion";
import Heading from "./Heading";

const Header = () => (
  <header>
    <div
      className={css`
        padding: 2rem 2.0875rem 0;
        background-color: #fce7dd;
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
