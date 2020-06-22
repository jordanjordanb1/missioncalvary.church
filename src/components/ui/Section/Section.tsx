import React from 'react';
import Image from './Image/Image';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';

type SectionProps = {
  readonly header: string;
  readonly imgSrc: string;
  readonly imgSide: 'left' | 'right';
  readonly message: string;
};

const SectionContainer = styled(Grid)`
  h1 {
    font-family: 'Lora', Georgia, serif;
    line-height: 1.5;
    font-weight: 600;
    position: relative;
    color: rgb(70, 70, 70);

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
  }
`;

const Section: React.SFC<SectionProps> = ({ header, imgSrc, imgSide, message }): JSX.Element => (
  <SectionContainer container className="about" style={{ background: 'white' }}>
    <Grid item xs={12} lg={4}>
      <Image imgSrc={imgSrc} />
    </Grid>
    <Grid container item xs={12} lg={8} className="p-2 d-flex align-items-center text-center">
      <div className="about-wrapper">
        <Grid xs={12} lg={6}>
          <h1>{header}</h1>
        </Grid>

        <Grid xs={12} className="pr-5 pl-5">
          <p>{message}</p>
        </Grid>
      </div>
    </Grid>
  </SectionContainer>
);

export default React.memo(Section);
