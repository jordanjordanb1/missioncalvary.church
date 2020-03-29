import React from 'react'
import './Jumbotron.scss'
import Homepage from './Type/Homepage/Homepage'
import Full from './Type/Full/Full'
import Small from './Type/Small/Small'

type JumbotronType = 'full' | 'small' | 'homepage'

interface JumbotronProps {
  type: JumbotronType
  imgName?: string
  message?: string
  bibleVerse?: string
  bibleLocation?: string
}

export default function Jumbotron({
  type,
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}: JumbotronProps) {
  switch (type) {
    case 'full':
      return (
        <Full
          imgName={imgName}
          message={message}
          bibleVerse={bibleVerse}
          bibleLocation={bibleLocation}
        />
      )
    case 'small':
      return (
        <Small
          message={message}
          bibleVerse={bibleVerse}
          bibleLocation={bibleLocation}
        />
      )
    case 'homepage':
      return <Homepage />
    default:
      return 'err...'
  }
}
