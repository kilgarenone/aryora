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
              <div className="g-c6 align-self-center ">
                <h2 className="hero-headline">Keep more of your money</h2>
                <p className="mb-2 hero-subheadline">
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
              <div className="g-c6">
                <Img
                  title="Future self thank you"
                  alt="Better future self"
                  sizes={data.heroImg1.sizes}
                  // outerWrapperClassName="hero-img-1"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="one-of-us-section">
          <div className="container one-of-us-container">
            <div className="are-you-wizard">
              <h3>Not a stock picker wizard,</h3>
              <h3 className="mb">but need to achieve financial security?</h3>
              <h4 className="mb-3">Good, now you are one of us.</h4>
            </div>
            <div className="not-miss-out-fact">
              <h5 className="f-w-600">You are not missing out</h5>
              <p className="p-quote m-none">
                <b>90%</b> of actively managed funds underperformed their
                benchmark indexes from 2001 to 2016.
              </p>
            </div>
          </div>
        </section>
        <section className="cost-matters-section">
          <div className="container">
            <div className="">
              <h3 className="cost-matters-title">Cost Matters.</h3>
            </div>
            <div className="cost-matters-materials">
              <div className="cost-chart-container">
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart
                    data={fundPerf()}
                    margin={{ top: 40, right: 60, left: 60, bottom: 40 }}
                  >
                    <XAxis
                      tickLine={false}
                      label={{
                        value: 'Years',
                        position: 'bottom',
                        offset: -5,
                      }}
                      axisLine={false}
                      interval={1}
                    />
                    <YAxis hide />
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
              <h3 className="f-w-100 cost-matters-materials-blurb">
                Up to <b>50%</b> more of your money would have stayed in your
                pocket if you were to invest in <b>Index Funds</b>
              </h3>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <h3 className="mission-statement">
              Our mission is to help you start investing early and make the most
              of your money.
            </h3>
            <div className="flex-row">
              <div className="feature">
                <img src="data:image/png;base64,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" />{' '}
                <h4 className="feature-title">Painless Onboarding</h4>
                <p>
                  From opening an account to your first deposit and investment,
                  it will be so delightful that you would want to do it again.
                </p>
              </div>
              <div className="feature">
                <h4 className="feature-title">Asset Allocation</h4>
                <p>
                  Based on your risk tolerance and goals, you can easily invest
                  in your target portfolio that's made up of low cost stock and
                  bond funds.
                </p>
              </div>
              <div className="feature">
                <h4 className="feature-title">Benevolent Advisor</h4>
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
    heroImg1: imageSharp(id: { regex: "/futureself/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`
