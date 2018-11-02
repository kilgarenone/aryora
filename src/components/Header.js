import React from "react";
import { css } from "react-emotion";

const Header = () => (
  <header>
    <div
      className={css`
        padding: 0.5rem 1.0875rem 0;
        background-color: #fff1e5;
      `}
    >
      <h4
        className={css`
          font-family: "Times New Roman", Times, serif;
          font-size: 1.8rem;
          color: rgba(0, 0, 0, 0.67);
          letter-spacing: 0.01rem;
        `}
      >
        towernest
      </h4>
    </div>
  </header>
);

export default Header;
