import React from 'react'
import cyberpunkImage from '../Assets/cyberpunk.webp'
import './Header.css'


function HeaderLogo() {
  return (
    <div className='head'>
   <img src={cyberpunkImage} alt="Cyberpunk" />
   <h1 className='logohead'> <a target="_blank" href="https://github.com/ShiftingParadigm">Malboro</a>🐉/Password-Generator </h1>
    </div>
  )
}

export default HeaderLogo
