import React from "react"
import Head from "../components/aboutUs/Head"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <div className="content">
        <Head />
      </div>
    </Layout>
  )
}

export default AboutUs
