import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';

/* FIXME:
// 1. Navbar doesn't collapse on Link click
*/

const Header: React.FC = (): JSX.Element => {
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
    `),
    [background, setBackground] = useState('none'),
    [navHeight, setNavHeight] = useState('100px'),
    [textColor, setTextColor] = useState('rgb(255, 255, 255)'),
    [navShadow, setNavShadow] = useState('5px 5px -2px 0 rgba(0,0,0,.3)'),
    [scrolled, setScrolled] = useState(false);

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
    <Grid
      container
      style={{ background, boxShadow: navShadow }}
      className={!scrolled ? 'not-scrolled p-1' : 'p-1'}
    >
      <Link to="/" className="p-0" style={{ height: navHeight }}>
        <Img fixed={data.file.sharp.fixed} alt="Mission Calvary Church's Logo" />
      </Link>

      <Link activeClassName="active" className="m-lg-2" style={{ color: textColor }} to="/">
        Home
      </Link>

      <Link activeClassName="active" className="m-lg-2" style={{ color: textColor }} to="/about">
        About
      </Link>

      <Link activeClassName="active" className="m-lg-2" style={{ color: textColor }} to="/contact">
        Contact
      </Link>
    </Grid>
  );
};

export default React.memo(Header);
