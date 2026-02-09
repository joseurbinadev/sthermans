import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "./all-tours.scss"


import DiscoverHero from "./components/DiscoverHero"
import ToursGrid from "./components/ToursGrid"

const discover = () => (
  <Layout>
    <Seo title="St. Herman's Cave Belize Tours" />
    <DiscoverHero />
    <ToursGrid />
  </Layout>
)

export default discover
