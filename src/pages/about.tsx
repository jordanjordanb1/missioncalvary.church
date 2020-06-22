import React from 'react';
import Layout from 'layouts/Layout';
import SEO from 'ui/SEO';
import Section from 'ui/Section/Section';

const message = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
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
sequi quo? Recusandae temporibus consequuntur dolorum.`;

const AboutPage: React.SFC = ({ location }: any): JSX.Element => (
  <Layout
    location={location}
    type="full"
    imgName="aboutus.jpg"
    message="About us"
    bibleVerse="This is just about us"
  >
    <SEO title="About" />
    <Section
      header="About us"
      imgSrc="https://dummyimage.com/600x400/000/fff"
      imgSide="right"
      message={message}
    />
  </Layout>
);

export default React.memo(AboutPage);
