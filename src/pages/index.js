import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CampaignList from "../components/campaignlist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 className="readable-header3">
      Renaissance of Lore is a gaming group that plays
      Dungeons &amp; Dragons and other role-playing games.
    </h3>
    <br />
    <h1 className="readable-header1">Campaigns</h1>
    <CampaignList></CampaignList>
  </Layout>
)

export default IndexPage
