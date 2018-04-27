import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'

function Footer(props) {
  const { children } = props

  return (
    <footer>
      <div
        className={css`
          text-align: right;
          padding-right: 30px;
          padding-bottom: 10px;
        `}
      >
        {children}
      </div>
    </footer>
  )
}

export default Footer
