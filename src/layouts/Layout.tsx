import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset-advanced';
import Container from 'react-bootstrap/Container';
import Footer from 'ui/footer/Footer';
import Header from 'ui/header/Header';
import Jumbotron from 'ui/Jumbotron/Jumbotron';

type JumbotronType = 'full' | 'small' | 'homepage';

interface LayoutProps {
  readonly type: JumbotronType;
  readonly imgName?: string;
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
  readonly children: string | HTMLElement | JSX.Element | Array<HTMLElement | JSX.Element>;
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    position: relative;
    margin: 0;
    font-family: 'Open Sans', Arial, sans-serif;
    background: #1b1919;

    &, html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
  }

  @keyframes show {
    0% {
      padding: 0;
      max-height: 0px;
      opacity: 0;
    }
    100% {
      padding: 10px;
      max-height: 50px;
      opacity: 1;
    }
  }
`;

const Layout: React.SFC<LayoutProps> = ({
  children,
  type,
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}): JSX.Element => (
  <>
    <GlobalStyle />
    <Header />
    <Container fluid as="main" className="p-0">
      <Jumbotron
        type={type}
        imgName={imgName}
        message={message}
        bibleVerse={bibleVerse}
        bibleLocation={bibleLocation}
      />
      {children}
    </Container>
    <Footer />
  </>
);

export default React.memo(Layout);
