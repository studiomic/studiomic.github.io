import React from 'react'
import ModeButton from './mode'
import '../styles/layout/head.module.scss'
import logoav from '../assets/Logo.avif'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <div>
      <a href="/">
        <img src={logoav} width={128} height={75} className="logo" alt="logo" />
      </a>
    </div>
    <div><ModeButton /></div>
  </nav>
)
export default Navigation


