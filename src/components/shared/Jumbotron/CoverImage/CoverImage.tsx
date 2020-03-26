import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import './CoverImage.scss'

interface CoverImageProps {
  imgName: string
}

export default function CoverImage({ imgName }: CoverImageProps) {
  const data = useStaticQuery(graphql`
    {
      files: allFile(filter: { relativeDirectory: { eq: "jumbotron" } }) {
        nodes {
          child: childImageSharp {
            fluid(maxHeight: 1080, maxWidth: 1920) {
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
  `)

  return data.files.nodes.map((node: any) => {
    if (node.child.fluid.originalName === imgName) {
      return (
        <div key={node.child.fluid.originalName} className="cover-image">
          <Img fluid={node.child.fluid} />
        </div>
      )
    }
  })
}