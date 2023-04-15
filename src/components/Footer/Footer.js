import React from 'react'
import julie from '../../assets/logo-julie-herve.png'
import eveil from '../../assets/logo-eveil.webp'
import fb from '../../assets/square-facebook.svg'
import Li from '../../assets/linkedin.svg'
import chambre from '../../assets/chambre.jpg'
import './footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_bloc1">
                <div className="footer_bloc1_social">
                    <Link to="https://www.facebook.com/carolinegayralmindset">
                        <img
                            className="footer_bloc1_social_logo"
                            src={fb}
                            alt="logo Facebook"
                        />
                    </Link>
                    <Link to="https://www.linkedin.com/in/caroline-gayral-39813238/?fbclid=IwAR21_b5J3q5mkJPaM3Qu96nuV7N-IkYD2bwKIfv-hH_ZO6hwDV_2bd1cdz0">
                        <img
                            className="footer_bloc1_social_logo"
                            src={Li}
                            alt="logo LinkedIn"
                        />
                    </Link>
                </div>
                <div className="footer_bloc1_eveil">
                    <Link to="https://www.eveilauxmondesinterieurs.com/">
                        <img
                            className="footer_bloc1_eveil_logo"
                            src={eveil}
                            alt="logo éveil"
                        />
                    </Link>
                    <Link to="https://www.chambre-syndicale-sophrologie.fr/">
                        <img
                            className="footer_bloc1_eveil_logo_chambre"
                            src={chambre}
                            alt="chambre de la sophrologie"
                        />
                    </Link>
                </div>
            </div>
            <div className="footer_bloc2">
                <h2 className="footer_bloc2_title">Les sites amis</h2>
                <div className="footer_bloc2_links">
                    <Link to="https://julieherve.com">
                        <img src={julie} alt="logo julie herve" />
                    </Link>
                    <Link to="https://www.accompagnement-et-strategie.com/qui-suis-je">
                        <p>Accompagnement et stratégie</p>
                    </Link>
                    <Link to="https://www.clubdiscussion.fr/">
                        <p>Club Discussion</p>
                    </Link>
                    <Link to="https://www.eveilauxmondesinterieurs.com/">
                        <img src={eveil} alt="logo eveil" />
                    </Link>
                </div>
            </div>
            <div className="footer_bloc3">
                <p>© David ISIDORE - 2023</p>
                <p>Lien vers CGU</p>
                <p>Lien vers mentions légales</p>
            </div>
        </div>
    )
}
