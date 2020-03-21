import React from 'react'
import './Jumbotron.scss'
import Container from 'react-bootstrap/Container'
import { default as JumbotronBootstrap } from 'react-bootstrap/Jumbotron'

export default function Jumbotron() {
  return (
    <JumbotronBootstrap fluid>
      <Container></Container>
    </JumbotronBootstrap>
  )
}
