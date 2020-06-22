import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import NavItem from './Navitem/NavItem';
import Branding from './Branding/Branding';
import { StyledToolbar, StyledTabs, Nav } from './Navbar.style';

type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

type NavbarProps = {
  readonly position?: Position;
  readonly elevation: number;
  readonly pathname: string;
};

const Navbar: React.FC<NavbarProps> = ({ position, elevation, pathname }): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);
  const [background, setBackground] = useState('none');
  const [navHeight, setNavHeight] = useState('100px');
  const [textColor, setTextColor] = useState('rgb(255, 255, 255)');
  const [navShadow, setNavShadow] = useState('5px 5px -2px 0 rgba(0,0,0,.3)');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    ['scroll', 'touchstart'].forEach(e =>
      window.addEventListener(
        e,
        () => {
          const y = window.scrollY;

          if (y <= 30) {
            setBackground('none');
            setNavHeight('100px');
            setTextColor('rgb(255, 255, 255)');
            setNavShadow('0 0 0 0 rgba(0,0,0,0)');
            setScrolled(false);
          } else if (y >= 31 && y <= 50) {
            setBackground('rgba(255, 255, 255, 0.2)');
            setNavHeight('100px');
            setTextColor('rgb(205, 205, 205)');
            setNavShadow('rgba(0, 0, 0, .1) 0px 1px 1px -2px');
            setScrolled(true);
          } else if (y >= 51 && y <= 70) {
            setBackground('rgba(255, 255, 255, 0.4)');
            setNavHeight('80px');
            setTextColor('rgb(145, 145, 145)');
            setNavShadow('rgba(0, 0, 0, .15) 0px 2px 2px -2px');
            setScrolled(true);
          } else if (y >= 71 && y <= 90) {
            setBackground('rgba(255, 255, 255, 0.6)');
            setNavHeight('70px');
            setTextColor('rgb(85, 85, 85)');
            setNavShadow('rgba(0, 0, 0, .2) 0px 3px 3px -2px');
            setScrolled(true);
          } else if (y >= 91 && y <= 110) {
            setBackground('rgba(255, 255, 255, 0.8)');
            setNavHeight('60px');
            setTextColor('rgb(25, 25, 25)');
            setNavShadow('rgba(0, 0, 0, .25) 0px 4px 4px -2px');
            setScrolled(true);
          } else if (y >= 111) {
            setBackground('rgba(255, 255, 255, 1)');
            setNavHeight('50px');
            setTextColor('rgb(0, 0, 0)');
            setNavShadow('rgba(0, 0, 0, .3) 0px 5px 5px -2px');
            setScrolled(true);
          }
        },
        { passive: true },
      ),
    );
  });

  return (
    <Nav component="nav" color="inherit" elevation={elevation}>
      <StyledToolbar>
        <Branding to="/">
          <Img fixed={data.file.sharp.fixed} alt="Mission Calvary Church's Logo" />
        </Branding>

        <StyledTabs value={false}>
          <NavItem pathname={pathname} to="/" text="home" />

          <NavItem pathname={pathname} to="/about" text="about" />

          <NavItem pathname={pathname} to="/contact" text="contact" />
        </StyledTabs>
      </StyledToolbar>
    </Nav>
  );
};

export default React.memo(Navbar);
