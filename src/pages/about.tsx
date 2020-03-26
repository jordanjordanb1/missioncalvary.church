import React from 'react'
import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'
import Section from '../components/shared/Section/Section'

const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum.`

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
        message={message}
      />
    </Layout>
  )
}
