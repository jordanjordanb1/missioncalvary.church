import React from 'react'

import Layout from '../layouts/Layout'
import SEO from '../components/shared/seo'
import Location from '../components/Index/Location/Location'
import Section from '../components/shared/Section/Section'
import Contact from '../components/Index/Contact/Contact'

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

const IndexPage = () => (
  <Layout type={'homepage'}>
    <SEO title="Home" />
    <Section
      header="Who are we?"
      imgSrc="https://dummyimage.com/600x400/000/fff"
      imgSide={'left'}
      message={message}
    />
    <Location />
    <Contact />
  </Layout>
)

export default IndexPage
