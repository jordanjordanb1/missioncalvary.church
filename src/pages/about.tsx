import React from 'react'
import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'
import About from '../components/shared/About/About'

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <About
        header="About us"
        imgSrc="https://dummyimage.com/600x400/000/fff"
      />
    </Layout>
  )
}
