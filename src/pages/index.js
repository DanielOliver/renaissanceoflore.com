import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CampaignList from "../components/campaignlist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="readable-header1">Campaigns</h1>
    <CampaignList></CampaignList>
  </Layout>
)

export default IndexPage
