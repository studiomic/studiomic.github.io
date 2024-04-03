import React from 'react'
import '../styles/layout/footer.module.scss'

const Footer = () => (
  <footer>
      <div>
        © {new Date().getFullYear()} <a href="https://studiomic.net/">Studio Mic.</a>
      </div>
  </footer>
)
export default Footer
