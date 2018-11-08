import React, { Component } from "react";
import { css, cx } from "react-emotion";
import Button from "./Button";
import Input from "./Input";
import media from "../css/breakpoints";

const inputStyle = css`
  flex: 1 1 60%;
  margin-right: 0;

  ${media.md2(css`
    margin-right: 8px;
  `)};
`;

const formStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 470px;
`;

const btnStyle = css`
  color: #fff;
  flex: 1 1 40%;
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
