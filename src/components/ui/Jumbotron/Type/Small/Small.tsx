import React from 'react';
import './Small.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { default as JumbotronBootstrap } from 'react-bootstrap/Jumbotron';

type SmallProps = {
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
};

const Small: React.SFC<SmallProps> = ({ message, bibleVerse, bibleLocation }) => (
  <JumbotronBootstrap
    fluid
    className="jumbotron-small d-flex justify-content-center align-items-center m-0"
  >
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="message">{message}</h1>

          {bibleVerse ? (
            <Row>
              <Col xs="12" lg={{ span: 8, offset: 2 }}>
                <blockquote className="blockquote">
                  <p className="mb-0 text-center">{bibleVerse}</p>
                  {bibleLocation ? (
                    <footer className="blockquote-footer text-right">
                      <cite
                        className="mr-3"
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {bibleLocation}
                      </cite>
                    </footer>
                  ) : (
                    ''
                  )}
                </blockquote>
              </Col>
            </Row>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Container>
  </JumbotronBootstrap>
);

export default React.memo(Small);
