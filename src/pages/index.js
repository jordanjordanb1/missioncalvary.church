import React from "react"

import HomeLayout from '../layouts/HomeLayout'
import SEO from "../components/shared/seo"
import Location from "../components/Location/Location"
import About from "../components/About/About"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <About />
    <Location />
  </HomeLayout>
)

export default IndexPage
