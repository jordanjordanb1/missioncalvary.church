import React from 'react'
import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'
import Contact from '../components/Contact/Contact'

export default function AboutPage() {
  return (
    <Layout
      type={'small'}
      message={'Contact us'}
      bibleVerse={'Tell us about any prayer request, a question, or etc...'}
    >
      <SEO title="Contact us" />

      <Contact />
    </Layout>
  )
}
