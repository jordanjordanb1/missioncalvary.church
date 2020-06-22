import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset-advanced';
import Footer from 'ui/footer/Footer';
import Navbar from './Navbar/Navbar';
import Jumbotron from 'ui/Jumbotron/Jumbotron';
import Container from '@material-ui/core/Container';

type JumbotronType = 'full' | 'small' | 'homepage';

interface LayoutProps {
  readonly type: JumbotronType;
  readonly imgName?: string;
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
  readonly children: string | HTMLElement | JSX.Element | Array<HTMLElement | JSX.Element>;
  readonly location: any;
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
  location,
}): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navbar pathname={location.pathname} elevation={0} />
      <Container maxWidth={false} disableGutters component="main">
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
};

export default React.memo(Layout);
