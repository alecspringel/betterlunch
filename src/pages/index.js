import React, { Component } from "react"
import Head from "../components/home/Head"
import Blurb from "../components/home/Blurb"
import Details from "../components/home/Details"
import Contact from "../components/home/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OurStory from "../components/home/OurStory"

class Home extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="content">
          <Head />
          <Blurb />
          <OurStory />
          <Details />
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default Home
