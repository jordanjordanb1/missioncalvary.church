import Contact from 'components/Index/Contact/Contact';
import Layout from 'layouts/Layout';
import React from 'react';
import Section from 'ui/Section/Section';
import SEO from 'ui/SEO';
import Location from '../components/Index/Location/Location';

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
  sequi quo? Recusandae temporibus consequuntur dolorum.
`;

const IndexPage: React.SFC = ({ location }: any): JSX.Element => (
  <Layout location={location} type="homepage">
    <SEO title="Home" />
    <Section
      header="Who are we?"
      imgSrc="https://dummyimage.com/600x400/000/fff"
      imgSide="left"
      message={message}
    />
    <Location />
    <Contact />
  </Layout>
);

export default React.memo(IndexPage);
