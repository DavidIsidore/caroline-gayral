import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li
                    className={
                        location.pathname === '/'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/">Accueil</Link>
                </li>
            </ul>
        </nav>
    )
}
