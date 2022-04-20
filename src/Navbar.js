import React from 'react'
import "./Navbar.css"
import Logo from "./assets/logo.jpg"
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'

function Navbar() {
  return (
    <div className='navbar'>
        <ScrollLink to='home' smooth={true}><img src={Logo} alt='logo' style={{cursor: "pointer"}}/></ScrollLink>
        <ul className='options'>
          <li>
            <ScrollLink to='home' smooth={true} style={{cursor: "pointer"}}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to='characters' smooth={true} style={{cursor: "pointer"}}>Characters</ScrollLink>
          </li>
          <li>
            <Link to='/quotes'>Quotes</Link>
          </li>
          <li>
            <Link to='/deaths'>Deaths</Link>
          </li>
        </ul>
        
    </div>
  )
}

export default Navbar