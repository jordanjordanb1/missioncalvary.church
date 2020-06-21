import React from 'react';
import './Image.scss';

type ImageProps = {
  readonly imgSrc: string;
};

const Image: React.SFC<ImageProps> = ({ imgSrc }): JSX.Element => (
  <div className="about-image d-flex justify-content-center align-items-center">
    <img src={imgSrc} alt="Fake img" />
  </div>
);

export default React.memo(Image);
