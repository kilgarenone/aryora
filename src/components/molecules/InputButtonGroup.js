import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Input';
import { css, cx } from 'react-emotion';
import media from '../../css/breakpoints';

const inputStyle = css`
  flex: 1 1 auto;
`;
const formContStyle = css`
  max-width: 420px;
  margin: 0 auto;

  ${media.md2(css`
    margin: 0 0;
  `)};
`;
const formStyle = css`
  align-items: center;
  justify-content: space-between;
  max-width: 420px;
`;
const btnStyle = css`
  color: #fff;
  flex: 1 1 auto;
`;

class InputButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleButtonClicked = event => {
    this.buttonRef.current.setAttribute('disabled', 'disabled');
    this.props.handleSubmit(event, this.buttonRef.current);
  };
  render() {
    const { isSubmitting, inputValue, handleInputChange, customFormStyleClass } = this.props;

    return (
      <form onSubmit={this.handleButtonClicked} autoComplete="off" className={formContStyle}>
        <div className={cx('flex-row', formStyle, customFormStyleClass)}>
          <Input
            type="email"
            className={inputStyle}
            name="email"
            required
            placeholder="Enter your email"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            isSubmitting={isSubmitting}
            innerRef={this.buttonRef}
            className={btnStyle}
            type="submit"
          >
            Get Notified
          </Button>
        </div>
      </form>
    );
  }
}

export default InputButtonGroup;
