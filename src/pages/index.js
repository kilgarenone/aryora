import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <section>
    <div className="container">
      <div className="flex-row align-items-center homepage-hero">
        <div className="g-c6 g-c6--md">
          <h1>Where your money grows in your best interest.</h1>
          <h2>
            The only place that effectively guarantees your fair share of stock
            market returns.
          </h2>
        </div>
        <div className="g-c6 g-c6--md">
          <Img
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
        ...GatsbyImageSharpSizes
      }
    }
  }
`
