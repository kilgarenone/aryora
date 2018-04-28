import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'react-emotion';

function Footer(props) {
  const { children } = props;

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
  );
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.element,
};
Footer.defaultProps = {
  children: PropTypes.element,
};
