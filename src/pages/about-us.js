import React from "react"
import Head from "../components/aboutUs/Head"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HowItWorks from "../components/aboutUs/HowItWorks"
import ByUs from "../components/aboutUs/ByUs"
import Fresh from "../components/aboutUs/Fresh"
import ForYou from "../components/aboutUs/ForYou"
import OurTeam from "../components/aboutUs/OurTeam"
import Features from "../components/aboutUs/Features"
import Menu from "../components/aboutUs/Menu"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <div className="content">
        <Head />
        <HowItWorks />
        <Features />
        <Menu />
        <ByUs />
        <OurTeam />
      </div>
    </Layout>
  )
}

export default AboutUs
