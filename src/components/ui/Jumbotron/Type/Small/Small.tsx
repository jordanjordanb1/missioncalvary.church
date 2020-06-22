import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';

type SmallProps = {
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
};

const SmallGrid = styled(Grid)`
  height: 500px !important;
  background: #1d1c1c !important;
  box-shadow: inset 0px -2px 5px -1px rgba(0, 0, 0, 0.4);
`;

const Small: React.SFC<SmallProps> = ({ message, bibleVerse, bibleLocation }) => (
  <SmallGrid
    container
    className="jumbotron-small d-flex justify-content-center align-items-center m-0"
  >
    <Grid container item>
      <h1 className="message">{message}</h1>

      {bibleVerse ? (
        <Grid item xs={12} lg={8}>
          <blockquote className="blockquote">
            <p className="mb-0 text-center">{bibleVerse}</p>
            {bibleLocation ? (
              <footer className="blockquote-footer text-right">
                <cite
                  className="mr-3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
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
  </SmallGrid>
);

export default React.memo(Small);
