import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Aryora - Passive Investing for Everyone"
      meta={[
        {
          name: 'description',
          content: 'Low-cost and tax-smart passive investing ',
        },
        {
          name: 'keywords',
          content: 'investing, index funds, passive investing',
        },
        {
          property: 'og:title',
          content: 'Aryora - Passive Investing for Everyone',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://aryora.com' },
        {
          property: 'og:image',
          content: 'https://source.unsplash.com/DWGAlCVnDm0/1200x1200',
        },
      ]}
    />
    <Header>Aryora</Header>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
