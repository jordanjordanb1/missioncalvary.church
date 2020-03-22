import React from 'react'
import './Location.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Location() {
  return (
    <Row id="location" as="section" className="location" noGutters>
      <Col xs="12" className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1888849989145!2d-70.52740378457474!3d41.369980779265795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52dd7ec62f759%3A0xe16f15b42f50fc08!2s231%20Meetinghouse%20Way%2C%20Edgartown%2C%20MA%2002539!5e0!3m2!1sen!2sus!4v1584896490046!5m2!1sen!2sus"
          frameborder="0"
          style={{ border: '0', width: '100%', height: '100%' }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="Location of the church on Google Maps"
        ></iframe>
      </Col>
    </Row>
  )
}
