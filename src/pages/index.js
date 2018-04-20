import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
  ResponsiveContainer,
  LineChart,
  LabelList,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'
import { numberWithCommas } from '../utils/functions'

const HIGHCOST = 0.0575
const LOWCOST = 0.078
const initialFundVal = 1000
const years = 30

function fundPerf() {
  const results = []
  let futureValueLowCost = initialFundVal
  let futureValueHighCost = initialFundVal

  for (let i = 0; i <= years; i++) {
    const data = { name: i, lowCost: 0, highCost: 0, amt: 0 }
    if (i === 0) {
      futureValueHighCost = futureValueHighCost * (1 - HIGHCOST) // simulate saleload
    } else {
      futureValueHighCost = futureValueHighCost * (1 + HIGHCOST)
      futureValueLowCost = futureValueLowCost * (1 + LOWCOST)
    }
    data.highCost = Math.round(futureValueHighCost)
    data.lowCost = Math.round(futureValueLowCost)
    data.amt = data.highCost + data.lowCost
    results.push(data)
  }
  return results
}

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
                  title="wholesome hug"
                  alt="Hugging with your significant other"
                  sizes={data.heroImg1.sizes}
                  imgStyle={{ zIndex: 10 }}
                  outerWrapperClassName="hero-img-1"
                />
                <Img
                  // imgStyle={{ transform: 'translate3d(-40px, -100%, 0px)' }}
                  title="travelling the world"
                  alt="Life is about leisure"
                  sizes={data.heroImg2.sizes}
                  outerWrapperClassName="hero-img-2"
                />
                <Img
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
              <h1>Not a stock picker wizard,</h1>
              <h1 className="mb-1">but need to achieve financial security?</h1>
              <h2 className="mb-3">Good, now you are one of us.</h2>
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
          <div className="container">
            <div className="container-sd">
              <h1 className="cost-matters-title mb-0">Cost Matters.</h1>
            </div>
            <div className="cost-matters-materials">
              <div className="cost-chart-container">
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart
                    data={fundPerf()}
                    margin={{ top: 40, right: 60, left: 60, bottom: 40 }}
                  >
                    <XAxis
                      // hide
                      tickLine={false}
                      label={{
                        value: 'Years',
                        position: 'bottom',
                        offset: -5,
                      }}
                      axisLine={false}
                      interval={1}
                      // dataKey="name"
                    />
                    <YAxis
                      hide
                      // label={{
                      //   value: 'Value (RM)',
                      //   position: 'left',
                      //   offset: 20,
                      //   angle: -90,
                      // }}
                      // interval={0.2}
                      // tickLine={false}
                    />
                    <Tooltip
                      formatter={(a, b, c) => numberWithCommas(a)}
                      labelFormatter={year => `Year: ${year}`}
                      offset={25}
                    />
                    <CartesianGrid strokeDasharray="8 8" />
                    <Legend
                      iconType="square"
                      iconSize={25}
                      verticalAlign="top"
                      wrapperStyle={{ top: 0, left: 0 }}
                    />
                    <Line
                      dot={false}
                      name="Low-cost Index Funds"
                      type="monotone"
                      dataKey="lowCost"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                      strokeWidth={6}
                    >
                      <LabelList
                        className="low-cost-label"
                        dataKey="lowCost"
                        position="right"
                        formatter={v =>
                          v === 9518 || v === 1000 ? numberWithCommas(v) : ''
                        }
                      />
                    </Line>
                    <Line
                      strokeWidth={6}
                      dot={false}
                      name="High-cost Unit Trust Funds"
                      type="monotone"
                      dataKey="highCost"
                      stroke="#82ca9d"
                      activeDot={{ r: 8 }}
                    >
                      <LabelList
                        className="high-cost-label"
                        dataKey="highCost"
                        position="right"
                        formatter={v =>
                          v === 943 || v === 5043 ? numberWithCommas(v) : ''
                        }
                      />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <h1 className="f-w-100 cost-matters-materials-blurb">
                Up to <b>50%</b> more of your money would have stayed in your
                pocket if you were to invest in <b>Index Funds</b>
              </h1>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <h1 className="mission-statement">
              Our mission is to help you start investing early and make the most
              of your money.
            </h1>
            <div className="flex-row">
              <div className="feature">
                <h3 className="feature-title">Painless Onboarding</h3>
                <p>
                  From opening an account to your first deposit and investment,
                  it will be so delightful that you would want to do it again.
                </p>
              </div>
              <div className="feature">
                <h3 className="feature-title">Asset Allocation</h3>
                <p>
                  Based on your risk tolerance and goals, you can easily invest
                  in your target portfolio that's made up of low cost stock and
                  bond funds.
                </p>
              </div>
              <div className="feature">
                <h3 className="feature-title">Benevolent Advisor</h3>
                <p>
                  We are tax-smart and cost conscious. From tax-loss havesting
                  to rebalancing your portfolio, we want to maximize your
                  returns.
                </p>
              </div>
            </div>
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
