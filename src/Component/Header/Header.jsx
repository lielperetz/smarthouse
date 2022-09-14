import React from 'react'
import Logo from '../images/Logo.png';
import './Header.css'

export default function Header() {
    return (
        <div className='body'>
            <br /><br />
            <img src={Logo} height='250px' alt="Logo" /><br /><br />
        </div>
    )
}
