import React, { Component } from "react";
import { css, cx } from "react-emotion";
import Button from "./Button";
import Input from "./Input";
import media from "../css/mediaQueries";
import spacing from "../css/spacing";

const inputStyle = css`
  flex-basis: 100%;
  margin-right: 0;
  margin-bottom: ${spacing.space0};

  ${media.md2(css`
    flex-basis: 60%;
    margin-right: 8px;
  `)};
`;

const formStyle = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 470px;

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
      formClassName
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
          </Button>
        </div>
      </form>
    );
  }
}

export default InputButtonGroup;
