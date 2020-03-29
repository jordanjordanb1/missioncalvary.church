import React from 'react'
import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'

export default function AboutPage() {
  return (
    <Layout
      type={'small'}
      imgName={'none'}
      message={'Events'}
      bibleVerse={'Currently being built!'}
    >
      <SEO title="Events" />
    </Layout>
  )
}
