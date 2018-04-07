import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import axios from 'axios'

class IndexPage extends Component {
  state = {
    prelaunchEmail: '',
    prelaunchEmailSuccess: false,
    prelaunchEmailFail: false,
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
      this.setState({ prelaunchEmailSuccess: true })
    } catch (e) {
      this.setState({ prelaunchEmailSuccess: false, prelaunchEmailFail: true })
    }
  }
  render() {
    const { data } = this.props
    return (
      <section>
        <div className="container">
          <div className="flex-row align-items-center">
            <div className="g-c6 g-c6--md">
              <h1 className="hero-headline">
                Where your money grows in your best interest
              </h1>
              <p className="hero-subheadline">
                A place that effectively keeps your costs and taxes to an
                absolute minimum to guarantee your fair share of stock market
                returns.
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
                    className="prelaunch-form__email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={this.state.prelaunchEmail}
                    onChange={this.handlePrelaunchEmailChange}
                  />
                  <button className="prelaunch-form__submit-btn" type="submit">
                    Get Notified
                  </button>
                </form>
                {this.state.prelaunchEmailSuccess && (
                  <p>Neato! We'll be in touch soon. 🎉</p>
                )}
                {this.state.prelaunchEmailFail && (
                  <p>Please try with another email address. 😖</p>
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
    heroImg: imageSharp(id: { regex: "/heroImage/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`
