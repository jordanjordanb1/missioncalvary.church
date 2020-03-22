import React from "react"

import HomeLayout from '../layouts/HomeLayout'
import SEO from "../components/shared/seo"
import Location from "../components/Location/Location"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Location />
  </HomeLayout>
)

export default IndexPage
