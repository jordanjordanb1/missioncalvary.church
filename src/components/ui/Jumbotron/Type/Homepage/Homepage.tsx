import React from 'react';
import CoverImage from '../../CoverImage/CoverImage';
import Grid from '@material-ui/core/Grid';

const Homepage: React.SFC = (): JSX.Element => (
  <>
    <CoverImage imgName={'jumbotron.jpg'} />
    <Grid container className="d-flex justify-content-center align-items-center m-0">
      <Grid item className="org-name">
        <h2 className="text-white">Mission Calvary Church</h2>
      </Grid>

      <h1 className="message">
        <span style={{ color: 'orange' }}>GOD</span> IS GOOD{' '}
        <span style={{ color: 'orange' }}>ALL</span> THE TIME
      </h1>

      <Grid xs={12} lg={8}>
        <blockquote className="blockquote">
          <p className="mb-0 text-center">
            Every good and perfect gift is from above, coming down from the Father of the heavenly
            lights, who does not change like shifting shadows.
          </p>
          <footer className="blockquote-footer text-right">
            <cite className="mr-3" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              James 1:17
            </cite>
          </footer>
        </blockquote>
      </Grid>
    </Grid>
  </>
);

export default React.memo(Homepage);
