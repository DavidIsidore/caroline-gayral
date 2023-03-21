import React from 'react'
import logo from '../../assets/logo.jpg'
import Navbar from '../Navbar/Navbar'
import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <Navbar />
        </div>
    )
}
