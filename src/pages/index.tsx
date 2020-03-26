import React from "react"

import Layout from '../layouts/Layout'
import SEO from "../components/shared/seo"
import Location from "../components/Index/Location/Location"
import About from "../components/shared/About/About"
import Contact from "../components/Index/Contact/Contact"

const IndexPage = () => (
  <Layout homePage={true}>
    <SEO title="Home" />
    <About header="Who are we?" imgSrc="https://dummyimage.com/600x400/000/fff" />
    <Location />
    <Contact />
  </Layout>
)

export default IndexPage
