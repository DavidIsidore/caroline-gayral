import React from 'react'
import ButtonContact from '../../components/ButtonContact/ButtonContact'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import sepia from '../../assets/Photo-sepia.jpg.jpg'
import './about.scss'

export default function About() {
    return (
        <div className="about">
            <Header />
            <div className="about_bloc1">
                <img
                    className="about_bloc1_photo"
                    src={sepia}
                    alt="portrait sepia"
                />
                <div className="about_bloc1_text">
                    <h2 className="about_bloc1_text_title">Mon parcours</h2>
                    <div className="about_bloc1_text_p">
                        <p className="about_bloc1_text_p_1">
                            Je démarre mon parcours par une carrière de chargée
                            d’affaire banque et assurance, puis suite à ce que
                            l’on appelle communément un burnout, je réalise une
                            reconversion vers le métier de consultant qualité
                            aéronautique.
                        </p>
                        <p className="about_bloc1_text_p_2">
                            Ces postes m’intéressent intellectuellement, mais je
                            m’ennuie vite, et je manque de sens et de liberté !
                        </p>
                        <p className="about_bloc1_text_p_3">
                            En parallèle, ma vie évolue et je vis, comme tous,
                            des moments heureux, mais aussi douloureux (deuil,
                            accompagnement de proches dépendants à
                            l’alcoolisme,…).
                        </p>
                        <p className="about_bloc1_text_p_4">
                            Dès mon burnout, j’ai commencé à me passionner pour
                            le développement personnel et l’accompagnement
                            global de l’individu dans sa totalité. Je
                            m’intéresse à toutes sortes de problématiques, liées
                            à la fois à la vie professionnelle et à la vie
                            personnelle (tout est lié…), ainsi qu’à la
                            spiritualité.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_bloc2">
                <p>
                    Après avoir beaucoup réfléchi et beaucoup lu, après avoir
                    moi-même suivi une thérapie d’accompagnement, après avoir
                    commencé à accompagner des personnes de mon entourage, j’ai
                    eu envie d’en faire ma vie et mon activité et j’ao
                    professionnalisé mon approche, je me suis formée à l’hypnose
                    spirituelle, régressive et énergétique ainsi qu’à la
                    sophrologie et l’hypnose classique afin de disposer d’un
                    éventail d’outils, un « couteau suisse », afin de proposer
                    des solutions individuelles.
                </p>
            </div>
            <div className="about_bloc3">
                <h2>Mes certificats et formations</h2>
                <ul>
                    <li>
                        École Française de sophrologie : Formation de
                        Sophrologie et spécialisations
                    </li>
                    <li>
                        Hypnose régressive, spirituelle et énergétique : École
                        Éveil aux mondes intérieurs
                    </li>
                    <li>École Française d’Hypnose : Formation Hypnose</li>
                </ul>
            </div>
            <ButtonContact />
            <Footer />
        </div>
    )
}
