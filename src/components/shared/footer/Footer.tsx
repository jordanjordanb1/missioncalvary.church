import React from "react"
import styles from "./Footer.scss"

export default function Footer() {
  return (
    <footer className={`${styles.footer} text-center`}>
      © {new Date().getFullYear()}
    </footer>
  )
}
