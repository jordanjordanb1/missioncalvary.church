import React from 'react';
import Layout from 'layouts/Layout';
import SEO from 'ui/SEO';

const NotFoundPage: React.SFC = (): JSX.Element => (
  <Layout type="small" imgName="none" message="404 ERROR" bibleVerse="The page was not found!">
    <SEO title="404: Not found" />
  </Layout>
);

export default React.memo(NotFoundPage);
