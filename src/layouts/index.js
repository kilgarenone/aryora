import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Aryora - Passive Investing"
      meta={[
        { name: 'description', content: 'Low-cost and tax-smart passive investing ' },
        { name: 'keywords', content: 'investing, index funds, passive investing' },
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
