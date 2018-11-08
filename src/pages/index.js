import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HomePageHero from "../components/indexPage/HomePageHero";
import Headline from "../components/indexPage/Headline";
import HowItWorks from "../components/indexPage/HowItWorks";
import JoinUsAction from "../components/indexPage/JoinUsAction";

class IndexPage extends Component {
  state = {};

  render() {
    const { data, location } = this.props;

    return (
      <Layout location={location}>
        <HomePageHero />
        <Headline headlineImg={data.headlineImg.childImageSharp.fluid} />
        <HowItWorks />
        <JoinUsAction
          joinUsActionImg={data.joinUsActionImg.childImageSharp.fluid}
        />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query {
    headlineImg: file(relativePath: { eq: "headline.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    joinUsActionImg: file(relativePath: { eq: "peekBackground.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
