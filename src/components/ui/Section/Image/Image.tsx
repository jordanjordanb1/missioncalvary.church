import React from 'react';
import styled from 'styled-components/macro';

type ImageProps = {
  readonly imgSrc: string;
};

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Image: React.SFC<ImageProps> = ({ imgSrc }): JSX.Element => (
  <ImageContainer className="about-image d-flex justify-content-center align-items-center">
    <img src={imgSrc} alt="Fake img" />
  </ImageContainer>
);

export default React.memo(Image);
