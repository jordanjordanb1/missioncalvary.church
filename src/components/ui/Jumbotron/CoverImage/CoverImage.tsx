import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import './CoverImage.scss';

type CoverImageProps = {
  readonly imgName: string;
};

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
        <div key={node.child.fluid.originalName} className="cover-image">
          <Img fluid={node.child.fluid} />
        </div>
      );
    }
  });
};

export default React.memo(CoverImage);
