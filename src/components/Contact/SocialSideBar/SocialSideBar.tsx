import React from 'react';
import styled from 'styled-components/macro';

const SocialLinks = styled.ul`
  a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #1b1919;
    color: #ffffff;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out 0s;

    &:hover,
    &:focus {
      background: rgb(0, 0, 0);
    }
  }
`;

const SocialSideBar: React.SFC = (): JSX.Element => (
  <SocialLinks className="text-center social-links">
    <li className="list-inline-item m-2">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex justify-content-center align-items-center"
      >
        <i className="fab fa-instagram"></i>
        <span aria-hidden="true">Instagram</span>
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
        <span aria-hidden="true">Facebook</span>
      </a>
    </li>
    <li className="list-inline-item m-2">
      <a
        href="mailto:missioncalvary@hotmail.com"
        className="d-flex justify-content-center align-items-center"
      >
        <i className="fas fa-envelope"></i>
        <span aria-hidden="true">Email</span>
      </a>
    </li>
  </SocialLinks>
);

export default React.memo(SocialSideBar);
