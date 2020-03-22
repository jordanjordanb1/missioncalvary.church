import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import './CoverImage.scss'

export default function CoverImage() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "jumbotron.jpg" }) {
        child: childImageSharp {
          fluid(maxHeight: 1080, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className="cover-image">
      <Img
        fluid={data.file.child.fluid}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: 0,
        }}
      />
    </div>
  )
}
