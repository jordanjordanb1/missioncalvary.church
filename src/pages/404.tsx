import React from "react"

import Layout from '../layouts/Layout'
import SEO from "../components/shared/seo"

const NotFoundPage = () => (
  <Layout
    homePage={false}
    imgName={'none'}
    message={'404 ERROR'}
    bibleVerse={'The page was not found!'}>
    <SEO title="404: Not found" />
  </Layout>
)

export default NotFoundPage
