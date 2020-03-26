import React from 'react'
import './Image.scss'

interface ImageProps {
  imgSrc: string
}

export default function Image({ imgSrc }: ImageProps) {
  return (
    <div className="about-image d-flex justify-content-center align-items-center">
      <img src={imgSrc} alt="Fake img" />
    </div>
  )
}
