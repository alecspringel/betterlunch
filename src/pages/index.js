import React, { Component } from "react"
import Head from "../components/home/Head"
import Blurb from "../components/home/Blurb"
import Details from "../components/home/Details"
import Contact from "../components/home/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OurStory from "../components/home/OurStory"
import OurMenu from "../components/home/OurMenu"
import SignUp from "../components/home/SignUp"

class Home extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="content">
          <Head />
          <Blurb />
          <OurStory />
          <OurMenu />
          <SignUp />
        </div>
      </Layout>
    )
  }
}

export default Home
