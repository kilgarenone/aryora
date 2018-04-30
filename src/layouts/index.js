import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title="Aryora - Passive Investing for Everyone"
      meta={[
        {
          name: 'description',
          content: 'Low-cost and tax-smart passive investing with broad-based index funds',
        },
        {
          name: 'keywords',
          content: 'investing, index funds malaysia, index funds, passive investing, investing DIY, passive wealth, passive wealth management',
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
    <Footer>© 2018 Aryora.</Footer>
  </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};
TemplateWrapper.defaultProps = {
  children: PropTypes.func,
};
