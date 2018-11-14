import React, { Component } from "react";
import { css, cx } from "react-emotion";
import Confetti from "react-dom-confetti";
import Button from "./Button";
import Input from "./Input";
import media from "../css/mediaQueries";
import spacing from "../css/spacing";

const confettiConfig = {
  angle: 92,
  spread: 133,
  startVelocity: 49,
  elementCount: 46,
  decay: 0.73
};

const inputStyle = css`
  flex-basis: 100%;
  margin-right: 0;
  margin-bottom: ${spacing.space0};

  ${media.md2(css`
    flex-basis: 60%;
    margin-right: 0.5rem;
  `)};
`;

const formStyle = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 29.375rem;

  ${media.md2(css`
    flex-wrap: nowrap;
  `)};
`;

const btnStyle = css`
  color: #fff;
  flex-basis: 100%;

  ${media.md2(css`
    flex-basis: 40%;
  `)};
`;

class InputButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleButtonClicked = event => {
    this.buttonRef.current.setAttribute("disabled", "disabled");
    this.props.handleSubmit(event, this.buttonRef.current);
  };

  render() {
    const {
      isSubmitting,
      inputValue,
      handleInputChange,
      formClassName,
      submissionSuccess
    } = this.props;

    return (
      <form onSubmit={this.handleButtonClicked} autoComplete="off">
        <div className={cx(formStyle, formClassName)}>
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
            <Confetti active={submissionSuccess} config={confettiConfig} />
          </Button>
        </div>
      </form>
    );
  }
}

export default InputButtonGroup;
