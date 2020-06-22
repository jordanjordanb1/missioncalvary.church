import React from 'react';
import SocialSideBar from './SocialSideBar/SocialSideBar';
import ContactForm from './Form/Form';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';

const ContactContainer = styled(Grid)`
  background: white;
`;

const Contact: React.SFC = (): JSX.Element => (
  <ContactContainer container className="contact p-2 pt-5 pb-3">
    <Grid container item xs={12}>
      <Grid item xs={12} md={11}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} md={1}>
        <SocialSideBar />
      </Grid>
    </Grid>
  </ContactContainer>
);

export default React.memo(Contact);
