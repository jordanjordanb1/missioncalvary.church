import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';

const FooterContainer = styled.footer`
  background-color: #1b1919;
  height: auto;
  min-height: 60px;
  color: white;

  &-left {
    h2 {
      font-size: 2em;
      font-family: 'Great Vibes';
      font-weight: 600;

      span {
        color: #ffd615;
      }
    }

    a {
      color: white;
    }

    .social-links {
      a {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        color: #1b1919;
        font-size: 1.5em;
        transition: all 0.3s ease-in-out 0s;

        &:hover,
        &:focus {
          background: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  &-right {
    h2 {
      font-family: 'Lora', Georgia, serif;
      font-size: 1.5em;
    }

    p {
      font-family: 'Lora', Georgia, serif;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer className="footer text-center p-5">
      <Grid container>
        <Grid container item>
          <Grid item xs={12} lg={6} className="footer-left">
            <h2>
              <span>Mission Calvary</span> Church
            </h2>

            <br />

            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;{' '}
                <a
                  href="https://goo.gl/maps/VMYVd4qLAbYBoqqt7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  231 Meetinghouse Way, Edgartown, MA, USA 02539
                </a>
              </li>
            </ul>

            <ul className="list-inline social-links">
              <li className="list-inline-item m-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li className="list-inline-item m-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fab fa-facebook-f"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li className="list-inline-item m-2">
                <a
                  href="mailto:missioncalvary@hotmail.com"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-envelope"></i>
                  <span className="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} className="d-lg-none">
            <hr />
            <br />
          </Grid>

          <Grid item xs={12} lg={6} className="footer-right">
            <h2 className="mb-4">Service Hours</h2>

            <div>
              <p className="m-0">Sunday Service</p>
              <p style={{ color: '#ffd615' }}>6:30pm to 8:30pm</p>
            </div>
          </Grid>
        </Grid>

        <hr />
        <br />

        <Grid container item>
          <Grid item xs={12} lg={6} className="text-lg-right p-0">
            Copyright © {new Date().getFullYear()} All Rights Reserved
          </Grid>

          <Grid className="d-none d-lg-block p-0">|</Grid>

          <Grid xs={12} lg={5} className="text-lg-left p-0">
            Made with ❤️ by{' '}
            <a href="https://jordanbarbosa.com" target="_blank" rel="noopener noreferrer">
              Jordan Barbosa
            </a>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}
