import React from 'react'
import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'
import Section from '../components/shared/Section/Section'

export default function AboutPage() {
  return (
    <Layout
      homePage={false}
      imgName={'aboutus.jpg'}
      message={'About us'}
      bibleVerse={'This is just about us'}
    >
      <SEO title="About" />
      <Section
        header="About us"
        imgSrc="https://dummyimage.com/600x400/000/fff"
        imgSide={'right'}
      />
    </Layout>
  )
}
