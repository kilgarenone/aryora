import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <section>
    <div className="container">
      <div className="flex-row align-items-center">
        <div className="g-c6 g-c6--md">
          <h1 className="hero-headline">
            Where your money grows in your best interest.
          </h1>
          <p className="hero-subheadline">
            A place that effectively keeps your costs and taxes to an absolute
            minimum to guarantee your fair share of stock market returns.
          </p>
          <div>
            <p>Subscribe below to get early access to the beta.</p>
            <form className="flex-row prelaunch-form" autoComplete="off">
              <input
                type="email"
                className="prelaunch-form__email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <button className="prelaunch-form__submit-btn" type="submit">
                Get Notified
              </button>
            </form>
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
