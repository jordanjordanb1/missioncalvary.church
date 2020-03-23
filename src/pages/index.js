import React from "react"

import HomeLayout from '../layouts/HomeLayout'
import SEO from "../components/shared/seo"
import Location from "../components/Index/Location/Location"
import About from "../components/Index/About/About"
import Contact from "../components/Index/Contact/Contact"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <About />
    <Location />
    <Contact />
  </HomeLayout>
)

export default IndexPage
