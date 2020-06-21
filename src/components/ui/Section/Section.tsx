import React from 'react';
import './Section.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Image/Image';

type SectionProps = {
  readonly header: string;
  readonly imgSrc: string;
  readonly imgSide: 'left' | 'right';
  readonly message: string;
};

const Section: React.SFC<SectionProps> = ({ header, imgSrc, imgSide, message }): JSX.Element => (
  <Row as="section" className="about" style={{ background: 'white' }}>
    <Col
      xs={{ span: '12', order: imgSide === 'left' ? 0 : 1 }}
      lg={{ span: '4', order: imgSide === 'left' ? 0 : 1 }}
    >
      <Image imgSrc={imgSrc} />
    </Col>
    <Col
      xs={{ span: '12', order: imgSide === 'left' ? 1 : 0 }}
      lg={{ span: '8', order: imgSide === 'left' ? 1 : 0 }}
      className="p-2 d-flex align-items-center text-center"
    >
      <div className="about-wrapper">
        <Row noGutters>
          <Col xs="12" lg={{ span: 6, offset: 3 }}>
            <h1>{header}</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="pr-5 pl-5">
            <p>{message}</p>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export default React.memo(Section);
