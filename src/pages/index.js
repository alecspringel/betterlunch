import React, { Component } from "react"
import Head from "../components/home/Head"
import Blurb from "../components/home/Blurb"
import FeaturedMenu from "../components/home/FeaturedMenu"
import Details from "../components/home/Details"
import Contact from "../components/home/Contact"
import Layout from "../components/layout"

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <Head />
          <Blurb />
          <FeaturedMenu />
          <Details />
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default Home
