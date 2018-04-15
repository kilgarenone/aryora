import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'

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
      <Fragment>
        <section className="hero-section">
          <div className="container">
            <div className="flex-row">
              <div className="g-c6 g-c6--md">
                <h1 className="hero-headline">Keep more of your money</h1>
                <p className="mb-3 hero-subheadline">
                  A place that guarantees your fair share of stock market
                  returns by purposely keeping your costs and taxes low.
                </p>
                <div>
                  <p>Subscribe below to get early access to the beta.</p>
                  <form
                    onSubmit={this.handlePrelaunchEmailSubmit}
                    autoComplete="off"
                  >
                    <div className="flex-row prelaunch-form">
                      <Input
                        type="email"
                        className="prelaunch-form__email-input"
                        name="email"
                        required
                        placeholder="Enter your email"
                        value={this.state.prelaunchEmail}
                        onChange={this.handlePrelaunchEmailChange}
                      />
                      <Button
                        className="prelaunch-form__submit-btn"
                        type="submit"
                      >
                        Get Notified
                      </Button>
                    </div>
                  </form>
                  {this.state.prelaunchEmailSuccess && (
                    <p>Neato! We'll be in touch soon. 🎉</p>
                  )}
                  {this.state.prelaunchEmailFail && (
                    <p>Please try a different email address.</p>
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
              <div className="g-c6 g-c6--md" style={{ position: 'relative' }}>
                <Img
                  fadeIn={false}
                  title="wholesome hug"
                  alt="Hugging with your significant other"
                  sizes={data.heroImg1.sizes}
                  imgStyle={{ zIndex: 10 }}
                  outerWrapperClassName="hero-img-1"
                />
                <Img
                  fadeIn={false}
                  // imgStyle={{ transform: 'translate3d(-40px, -100%, 0px)' }}
                  title="travelling the world"
                  alt="Life is about leisure"
                  sizes={data.heroImg2.sizes}
                  outerWrapperClassName="hero-img-2"
                />
                <Img
                  fadeIn={false}
                  // imgStyle={{ transform: 'translate3d(-40px, -100%, 0px)' }}
                  title="travelling the world"
                  alt="Life is about leisure"
                  sizes={data.heroImg3.sizes}
                  outerWrapperClassName="hero-img-3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="one-of-us-section">
          <div className="container container-narrower one-of-us-container">
            <div className="">
              <h1 className="f-size-3">Not a stock picker wizard,</h1>
              <h1 className="mb-0 f-size-3">
                but need to achieve financial security?
              </h1>
              <h2 className="mb-3 f-size-2">Now you are one of us.</h2>
            </div>
            <div>
              <h4 className="f-w-600">You are not missing out</h4>
              <p className="p-quote">
                90% of actively managed funds underperformed their benchmark
                indexes from 2001 to 2016.
              </p>
            </div>
          </div>
        </section>
        <section className="cost-matters-section">
          <div className="container cost-matters-container">
            <h1 className="f-size-3 cost-matters-title mb-0">Cost Matters.</h1>
            <p className="p-quote">
              low-cost Index Funds vs high-cost Unit Trust Funds
            </p>
            <LineChart width={500} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default IndexPage

export const heroImgQuery = graphql`
  query HeroImgQuery {
    heroImg1: imageSharp(id: { regex: "/futureprimitive/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    heroImg2: imageSharp(id: { regex: "/beautifulday/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    heroImg3: imageSharp(id: { regex: "/itsgonnabeokay/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`
