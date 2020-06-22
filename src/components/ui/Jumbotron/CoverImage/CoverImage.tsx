import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components/macro';

type CoverImageProps = {
  readonly imgName: string;
};

const CoverImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -999999;
  perspective: 8px;
  perspective-origin: 0%;

  .gatsby-image-wrapper {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const CoverImage: React.FC<CoverImageProps> = ({ imgName }): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      files: allFile(filter: { relativeDirectory: { eq: "jumbotron" } }) {
        nodes {
          child: childImageSharp {
            fluid(maxHeight: 1440, maxWidth: 2560) {
              aspectRatio
              sizes
              src
              srcSet
              tracedSVG
              originalName
            }
          }
        }
      }
    }
  `);

  return data.files.nodes.map((node: any) => {
    if (node.child.fluid.originalName === imgName) {
      return (
        <CoverImageContainer key={node.child.fluid.originalName}>
          <Img fluid={node.child.fluid} />
        </CoverImageContainer>
      );
    }
  });
};

export default React.memo(CoverImage);
