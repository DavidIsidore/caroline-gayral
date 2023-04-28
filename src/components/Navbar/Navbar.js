import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './navbar.scss'

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
                <li className="nav_list_item">Mes programmes</li>
                <li className="nav_list_item">Témoignages</li>
                <li
                    className={
                        location.pathname === '/about'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/about">Qui suis-je ?</Link>
                </li>
                <li className="nav_list_item">Articles/Podcasts</li>
                <li
                    className={
                        location.pathname === '/'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="nav_list_item">Tarifs</li>
            </ul>
        </nav>
    )
}
