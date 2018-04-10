import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import axios from 'axios'
import Button from '../components/Button'

class IndexPage extends Component {
  state = {
    prelaunchEmail: '',
    prelaunchEmailSuccess: false,
    prelaunchEmailFail: false,
    letUsHelpYou: false,
  }

  handlePrelaunchEmailChange = event => {
    this.setState({
      prelaunchEmail: event.target.value,
      prelaunchEmailSuccess: false,
      prelaunchEmailFail: false,
    })
  }

  handlePrelaunchEmailSubmit = async event => {
    event.preventDefault()

    try {
      const res = await axios.post(
        'https://exrosqik52.execute-api.ap-southeast-1.amazonaws.com/dev/addToBetaUserList',
        { emailAddress: this.state.prelaunchEmail }
      )
      this.setState({ prelaunchEmailSuccess: true, prelaunchEmail: '' })
    } catch (e) {
      const errStatusCode = e.response.status
      if (errStatusCode === 400) {
        this.setState({
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: true,
        })
      } else {
        this.setState({
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: false,
          letUsHelpYou: true,
        })
      }
    }
  }
  render() {
    const { data } = this.props
    return (
      <section>
        <div className="container">
          <div className="flex-row align-items-center">
            <div className="g-c6 g-c6--md">
              <h1 className="hero-headline">Grow your Wealth here.</h1>
              <p className="hero-subheadline">
                A place that strives to keep your costs and taxes low to
                guarantee your fair share of stock market returns.
              </p>
              <div>
                <p>Subscribe below to get early access to the beta.</p>
                <form
                  onSubmit={this.handlePrelaunchEmailSubmit}
                  className="flex-row prelaunch-form"
                  autoComplete="off"
                >
                  <input
                    type="email"
                    className="prelaunch-form__email-input"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={this.state.prelaunchEmail}
                    onChange={this.handlePrelaunchEmailChange}
                  />
                  <Button
                    style={{
                      borderRadius: '30px',
                    }}
                    className="prelaunch-form__submit-btn"
                    type="submit"
                  >
                    Get Notified
                  </Button>
                </form>
                {this.state.prelaunchEmailSuccess && (
                  <p>Neato! We'll be in touch soon. 🎉</p>
                )}
                {this.state.prelaunchEmailFail && (
                  <p>Please try a different email address. 😖</p>
                )}
                {this.state.letUsHelpYou && (
                  <p>
                    Let us help you.{' '}
                    <a href="mailto:kwei88@gmail.com?subject=Trouble with signing up to the Aryora beta release">
                      Contact us.
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className="g-c6 g-c6--md">
              <Img
                fadeIn={false}
                title="hero image"
                alt="An atomic family in a wonderful future"
                sizes={data.heroImg.sizes}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default IndexPage

export const heroImgQuery = graphql`
  query HeroImgQuery {
    heroImg: imageSharp(id: { regex: "/itsgonnabeokay/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`
