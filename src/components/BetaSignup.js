import React, { Component } from "react";
import { checkStatus, parseJSON } from "../utils/functions";

class BetaSignup extends Component {
  state = {
    isSubmitting: false,
    prelaunchEmail: "",
    prelaunchEmailSuccess: false,
    prelaunchEmailFail: false,
    letUsHelpYou: false
  };

  handlePrelaunchEmailChange = event => {
    this.setState({
      prelaunchEmail: event.target.value,
      prelaunchEmailSuccess: false,
      prelaunchEmailFail: false
    });
  };

  handlePrelaunchEmailSubmit = async (event, submitBtnRef) => {
    event.preventDefault();
    const { isSubmitting, prelaunchEmail } = this.state;

    this.setState({ isSubmitting: !isSubmitting });
    try {
      const res = await fetch(
        "https://exrosqik52.execute-api.ap-southeast-1.amazonaws.com/dev/addToBetaUserList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ emailAddress: prelaunchEmail })
        }
      );

      checkStatus(res);
      parseJSON(res);

      this.setState({
        isSubmitting: !isSubmitting,
        prelaunchEmailSuccess: true,
        prelaunchEmail: ""
      });
      // re-enable the submit btn in the <InputButtonGroup />
      submitBtnRef.removeAttribute("disabled");
    } catch (e) {
      const errStatusCode = e.response.status;
      if (errStatusCode === 400) {
        this.setState({
          isSubmitting: !isSubmitting,
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: true
        });
      } else {
        this.setState({
          isSubmitting: !isSubmitting,
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: false,
          letUsHelpYou: true
        });
      }
      // re-enable the submit btn in the <InputButtonGroup />
      submitBtnRef.removeAttribute("disabled");
    }
  };

  render() {
    const {
      prelaunchEmail,
      isSubmitting,
      prelaunchEmailSuccess,
      prelaunchEmailFail,
      letUsHelpYou
    } = this.state;

    return (
      <>
        {this.props.children({
          handleSubmit: this.handlePrelaunchEmailSubmit,
          inputValue: prelaunchEmail,
          handleInputChange: this.handlePrelaunchEmailChange,
          isSubmitting
        })}
        {prelaunchEmailSuccess && (
          <p>
            Neato! We&apos;ll be in touch soon.&nbsp;
            <span role="img" aria-label="rejoice emoji">
              🎉
            </span>
          </p>
        )}
        {prelaunchEmailFail && <p>Please try a different email address.</p>}
        {letUsHelpYou && (
          <p>
            Let us help you.{" "}
            <a href="mailto:kwei88@gmail.com?subject=Trouble with signing up to the Aryora beta release">
              Contact us.
            </a>
          </p>
        )}
      </>
    );
  }
}

export default BetaSignup;
