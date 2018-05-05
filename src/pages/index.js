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
import { css } from 'react-emotion'
import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'
import { numberWithCommas } from '../utils/functions'
import assetAllocationIcon from '../img/assetAllocation.png'
import advisorIcon from '../img/inGoodHand.png'
import onboardingIcon from '../img/onboarding.png'
import InputButtonGroup from './../components/molecules/InputButtonGroup'

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
    isSubmitting: false,
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

  handlePrelaunchEmailSubmit = async (event, submitBtnRef) => {
    event.preventDefault()
    this.setState({ isSubmitting: !this.state.isSubmitting })
    try {
      const res = await axios.post(
        'https://exrosqik52.execute-api.ap-southeast-1.amazonaws.com/dev/addToBetaUserList',
        { emailAddress: this.state.prelaunchEmail },
      )
      this.setState({
        isSubmitting: !this.state.isSubmitting,
        prelaunchEmailSuccess: true,
        prelaunchEmail: '',
      })
      // re-enable the submit btn in the <InputButtonGroup />
      submitBtnRef.removeAttribute('disabled')
    } catch (e) {
      const errStatusCode = e.response.status
      if (errStatusCode === 400) {
        this.setState({
          isSubmitting: !this.state.isSubmitting,
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: true,
        })
      } else {
        this.setState({
          isSubmitting: !this.state.isSubmitting,
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: false,
          letUsHelpYou: true,
        })
      }
      // re-enable the submit btn in the <InputButtonGroup />
      submitBtnRef.removeAttribute('disabled')
    }
  }
  render() {
    const { data } = this.props
    return (
      <Fragment>
        <section role="main" aria-labelledby="aria-hero-section" className="hero-section">
          <div className="container">
            <div className="flex-row">
              <div className="g-c6-md2 hero-pitch">
                <h2 className="hero-headline m-none">Keep more of</h2>
                <h2 className="hero-headline">your money</h2>
                <p id="aria-hero-section" className="mb-3 hero-subheadline">
                  A place that guarantees your fair share of stock market returns by purposely
                  keeping your costs and taxes low.
                </p>
                <p>Subscribe below to get early access to the beta.</p>
                <InputButtonGroup
                  handleSubmit={this.handlePrelaunchEmailSubmit}
                  inputValue={this.state.prelaunchEmail}
                  handleInputChange={this.handlePrelaunchEmailChange}
                  isSubmitting={this.state.isSubmitting}
                />
                {this.state.prelaunchEmailSuccess && <p>Neato! We'll be in touch soon. 🎉</p>}
                {this.state.prelaunchEmailFail && <p>Please try a different email address.</p>}
                {this.state.letUsHelpYou && (
                  <p>
                    Let us help you.{' '}
                    <a href="mailto:kwei88@gmail.com?subject=Trouble with signing up to the Aryora beta release">
                      Contact us.
                    </a>
                  </p>
                )}
              </div>
              <div className="g-c6-md2">
                <Img
                  title="Photo by Clique Images on Unsplash"
                  alt="Better future self"
                  sizes={data.heroImg1.sizes}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="one-of-us-section">
          <div className="container one-of-us-container">
            <div className="mb-4 text-center">
              <h4>Stock picking and unit trust funds are</h4>
              <h4>hard-work and expensive.</h4>
            </div>
            <div className="not-miss-out-fact mb-4">
              <span className="f-w-600">You are not missing out</span>
              <p className="p-quote m-none">
                <b>90%</b> of actively managed funds <b>underperformed</b> their benchmark indexes
                from 2001 to 2016.<cite>
                  <a
                    className="citation"
                    target="_blank"
                    href="https://us.spindices.com/documents/spiva/spiva-us-mid-year-2017.pdf"
                  >
                    Source
                  </a>
                </cite>
              </p>
            </div>
            <div className="text-center">
              <h3>Achieving your financial security can actually be</h3>
              <h3>effortless and low cost.</h3>
            </div>
          </div>
        </section>
        <section className="cost-matters-section">
          <div className="container">
            <div className="mb-4">
              <h3 className="cost-matters-title">Cost Matters.</h3>
            </div>
            <div className="flex-row cost-matters-materials">
              <p className="g-c6-md2 p-2 p-quote f-w-100 align-self-center ">
                Investing in low-cost <b>Index Funds</b> could snowball to <b>50%</b> more money in
                your pocket.
              </p>
              <div className="g-c6-md2">
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart
                    data={fundPerf()}
                    margin={{ top: 40, right: 65, left: 65, bottom: 40 }}
                  >
                    <XAxis
                      tickLine={false}
                      label={{
                        value: 'Years',
                        position: 'bottom',
                        offset: -10,
                      }}
                      axisLine={false}
                      interval={1}
                    />
                    <YAxis
                      tickLine={false}
                      label={{
                        value: 'Value',
                        position: 'left',
                        offset: -30,
                      }}
                      axisLine={false}
                    />
                    <Tooltip
                      formatter={a => numberWithCommas(a)}
                      labelFormatter={year => `Year: ${year}`}
                      offset={25}
                    />
                    <CartesianGrid strokeDasharray="6 10" />
                    <Legend
                      iconType="square"
                      iconSize={27}
                      verticalAlign="top"
                      wrapperStyle={{ top: '-10px' }}
                      layout="vertical"
                    />
                    <Line
                      dot={false}
                      name="Low-cost Index Funds"
                      type="monotone"
                      dataKey="lowCost"
                      stroke="#448AFF"
                      activeDot={{ r: 8 }}
                      strokeWidth={8}
                    >
                      <LabelList
                        className="low-cost-label"
                        dataKey="lowCost"
                        position="right"
                        formatter={v => (v === 9518 || v === 1000 ? numberWithCommas(v) : '')}
                      />
                    </Line>
                    <Line
                      strokeWidth={8}
                      dot={false}
                      name="High-cost Unit Trust Funds"
                      type="monotone"
                      dataKey="highCost"
                      stroke="#ee4758 "
                      activeDot={{ r: 8 }}
                    >
                      <LabelList
                        className="high-cost-label"
                        dataKey="highCost"
                        position="right"
                        formatter={v => (v === 943 || v === 5043 ? numberWithCommas(v) : '')}
                      />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <h3 className="mission-statement">
              Our mission is to help you start investing early and make the most of your money.
            </h3>
            <div className="features">
              <div className="feature">
                <img
                  className="feature-icon"
                  src={onboardingIcon}
                  alt="Logo for painless onboarding feature"
                />
                <h4 className="feature-title">Painless Onboarding</h4>
                <p>
                  From opening an account to your first deposit and investment, it will be so
                  delightful that you would want to do it again.
                </p>
              </div>
              <div className="feature">
                <img
                  className="feature-icon"
                  src={assetAllocationIcon}
                  alt="Logo for asset allocation feature"
                />
                <h4 className="feature-title">Asset Allocation</h4>
                <p>
                  Based on your risk tolerance and goals, you can easily invest in your target
                  portfolio that's made up of low cost stock and bond funds.
                </p>
              </div>
              <div className="feature">
                <img
                  className="feature-icon"
                  src={advisorIcon}
                  alt="Logo for benevolent advisor feature"
                />
                <h4 className="feature-title">Compassionate Advisor</h4>
                <p>
                  We are tax-smart and cost-conscious. From tax-loss harvesting to rebalancing your
                  portfolio, we want to maximize your returns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container call-to-action">
            <h4 className="call-to-action-statement mb-1">
              Join us for a simple, efficient, and high-probability way to build your wealth.
            </h4>
            <InputButtonGroup
              handleSubmit={this.handlePrelaunchEmailSubmit}
              inputValue={this.state.prelaunchEmail}
              handleInputChange={this.handlePrelaunchEmailChange}
              isSubmitting={this.state.isSubmitting}
            />
            {this.state.prelaunchEmailSuccess && <p>Neato! We'll be in touch soon. 🎉</p>}
            {this.state.prelaunchEmailFail && <p>Please try a different email address.</p>}
            {this.state.letUsHelpYou && (
              <p>
                Let us help you.{' '}
                <a href="mailto:kwei88@gmail.com?subject=Trouble with signing up to the Aryora beta release">
                  Contact us.
                </a>
              </p>
            )}
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
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
