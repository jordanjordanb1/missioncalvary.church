import React from 'react'
import './SocialSideBar.scss'

export default function SocialSideBar() {
  return (
    <ul className="text-center social-links">
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
  )
}
