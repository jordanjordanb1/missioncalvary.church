import React from 'react';
import Layout from 'layouts/Layout';
import SEO from 'ui/SEO';
import Contact from 'components/Contact/Contact';

const AboutPage: React.SFC = (): JSX.Element => (
  <Layout
    type="small"
    message="Contact us"
    bibleVerse="Tell us about any prayer request, a question, or etc..."
  >
    <SEO title="Contact us" />

    <Contact />
  </Layout>
);

export default React.memo(AboutPage);
