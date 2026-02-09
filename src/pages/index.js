import * as React from "react"
import "./home/home.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "./home/components/hero"
import Tours from "./home/components/tours"
import Welcome from "./home/components/welcome"
import About from "./home/components/about"
import Location from "./home/components/location"
import Picks from "./home/components/picks"
import Reviews from "./home/components/reviews"
const IndexPage = () => (
  <Layout>
      <Seo title="St Herman's Cave Belize" />
     <Hero /> 
     <Tours />
     <Welcome />
     <About />
     <Location />
     <Picks />
     <Reviews />
  </Layout>
)

export default IndexPage
               