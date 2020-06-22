import React from 'react';
import CoverImage from '../../CoverImage/CoverImage';
import Grid from '@material-ui/core/Grid';

type FullProps = {
  readonly imgName?: string;
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
};

const Full: React.SFC<FullProps> = ({
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}): JSX.Element => (
  <>
    {imgName !== 'none' ? <CoverImage imgName={imgName || 'jumbtron.jpg'} /> : ''}
    <Grid container className="d-flex justify-content-center align-items-center m-0">
      <Grid container item className="text-center">
        <h1 className="message">{message}</h1>

        {bibleVerse ? (
          <Grid item xs={12} lg={8}>
            <blockquote className="blockquote">
              <p className="mb-0 text-center">{bibleVerse}</p>
              {bibleLocation ? (
                <footer className="blockquote-footer text-right">
                  <cite className="mr-3" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {bibleLocation}
                  </cite>
                </footer>
              ) : (
                ''
              )}
            </blockquote>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </Grid>
  </>
);

export default React.memo(Full);
