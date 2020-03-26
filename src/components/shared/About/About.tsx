import React from 'react'
import './About.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './Image/Image'

interface AboutProps {
  header: string
  imgSrc: string
}

export default function About({ header, imgSrc }: AboutProps) {
  return (
    <Row as="section" className="about" style={{ background: 'white' }}>
      <Col xs="12" lg="4">
        <Image imgSrc={imgSrc} />
      </Col>
      <Col xs="12" lg="8" className="p-2 d-flex align-items-center text-center">
        <div className="about-wrapper">
          <Row noGutters>
            <Col xs="12" lg={{ span: 6, offset: 3 }}>
              <h1>{header}</h1>
            </Col>
          </Row>

          <Row>
            <Col xs="12" className="pr-5 pl-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis temporibus commodi quidem magnam ullam corrupti
                voluptas rerum, accusantium nihil expedita sit, velit eveniet
                sequi quo? Recusandae temporibus consequuntur dolorum.
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}
