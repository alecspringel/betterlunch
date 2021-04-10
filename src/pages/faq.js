import React from "react"
import Head from "../components/faq/Head"
import Layout from "../components/layout"
import SEO from "../components/seo"

const faq = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <div className="content">
        <Head />
      </div>
    </Layout>
  )
}

export default faq
