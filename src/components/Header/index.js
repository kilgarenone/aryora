import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'

const Header = () => (
  <header
    className={css`
      background-color: #e0f2f1;
    `}
  >
    <div
      className={css`
        margin: 0 auto;
        max-width: 1280px;
        display: flex;
        padding: 1rem 1.0875rem;
      `}
    >
      <h2>Aryora</h2>
    </div>
  </header>
)

export default Header
