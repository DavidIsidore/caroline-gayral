import React from 'react'
import logo from '../../assets/logo.jpg'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header_logo" />
        </div>
    )
}
