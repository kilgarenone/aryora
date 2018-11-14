import React, { Component } from "react";
import { checkStatus } from "../utils/functions";

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
    const { prelaunchEmail } = this.state;

    this.setState({ isSubmitting: true });
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

      this.setState({
        isSubmitting: false,
        prelaunchEmailSuccess: true,
        prelaunchEmail: ""
      });

      // re-enable the submit btn in the <InputButtonGroup />
      submitBtnRef.removeAttribute("disabled");
    } catch (e) {
      const errStatusCode = e.response.status;
      if (errStatusCode === 400) {
        this.setState({
          isSubmitting: false,
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: true
        });
      } else {
        this.setState({
          isSubmitting: false,
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
          isSubmitting,
          submissionSuccess: prelaunchEmailSuccess
        })}
        {prelaunchEmailSuccess && <p>Neato! We&apos;ll be in touch soon.</p>}
        {prelaunchEmailFail && <p>Please try a different email address.</p>}
        {letUsHelpYou && (
          <p>
            Let us help you.{" "}
            <a href="mailto:yeewei@towernest.com?subject=Trouble with signing up to the Towernest beta release">
              Contact us.
            </a>
          </p>
        )}
      </>
    );
  }
}

export default BetaSignup;
