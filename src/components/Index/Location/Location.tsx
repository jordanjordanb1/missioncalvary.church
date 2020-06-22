import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';

const StyledGrid = styled(Grid)`
  width: auto;
  height: 600px;
  background: white;
`;

const Location: React.SFC = (): JSX.Element => (
  <Grid container id="location" className="location">
    <StyledGrid item xs={12} className="location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1888849989145!2d-70.52740378457474!3d41.369980779265795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52dd7ec62f759%3A0xe16f15b42f50fc08!2s231%20Meetinghouse%20Way%2C%20Edgartown%2C%20MA%2002539!5e0!3m2!1sen!2sus!4v1584896490046!5m2!1sen!2sus"
        frameBorder="0"
        style={{ border: '0', width: '100%', height: '100%' }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
        title="Location of the church on Google Maps"
      ></iframe>
    </StyledGrid>
  </Grid>
);

export default React.memo(Location);
