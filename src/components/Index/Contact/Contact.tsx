import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContactForm from './Form/Form';
import styled from 'styled-components/macro';
import Typography from '@material-ui/core/Typography';

const ContactSection = styled(Grid)`
  background: orange;
  transition: all 0.3s ease-in;
`;

const Header = styled(Typography)`
  font-family: 'Lora', Georgia, serif;
  line-height: 1.5;
  font-weight: 600;
  position: relative;

  &::before {
    position: absolute;
    top: 49%;
    right: -170px;
    content: '';
    width: 50%;
    height: 1px;
    background: rgb(70, 70, 70);
  }

  &::after {
    position: absolute;
    top: 49%;
    left: -180px;
    content: '';
    width: 50%;
    height: 1px;
    background: rgb(70, 70, 70);
  }
`;

const Contact: React.SFC = (): JSX.Element => (
  <ContactSection justify="center" alignItems="center" container>
    <Grid item xs={12} md={8} lg={6}>
      <Header variant="h2" gutterBottom align="center">
        Contact us
      </Header>

      <ContactForm />
    </Grid>
  </ContactSection>
);

export default React.memo(Contact);
