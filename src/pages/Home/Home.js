import React from 'react'
import Header from '../../components/Header/Header'
import Programmes from '../../components/Programmes/Programmes'
import Footer from '../../components/Footer/Footer'
import portrait from '../../assets/portrait.jpg'
import './home.scss'
import Presentation from '../../components/Presentation/Presentation'

export default function Home() {
    return (
        <main>
            <Header />
            <Presentation />
            <div className="text">
                <p className="text_p">
                    Si vous êtes ici, c’est probablement que vous avez ce
                    profond désir de vous réaliser pleinement et d’honorer votre
                    véritable potentiel.
                </p>
                <p className="text_p">
                    Je vous accompagne en vous aidant à mieux vous comprendre, à
                    apprendre à vous maîtriser et calmer ce mental agité pour
                    enfin activer votre véritable potentiel.
                </p>
                <p className="text_p">
                    Le but étant de revivre en cohérence et dans un cheminement
                    de responsabilité et de pleine conscience. Grace à une
                    combinaison d’outils exclusifs, simples et pratiques pour
                    agir sur le corps et l’esprit, l’objectif étant que vous
                    retrouviez votre entière souveraineté.
                </p>
                <p className="text_p">Vous êtes au bon endroit si :</p>
                <ul className="text_list">
                    <li>
                        Vous avez l’impression de passer à coté de votre vie
                        parce que vous êtes contrôlés par vos peurs et vos
                        insécurités
                    </li>
                    <li>
                        Vous êtes prêts à rééduquer votre système de
                        fonctionnement
                    </li>
                    <li>
                        Vous êtes prêts à vivre de belles transformations dans
                        votre quotidien, dans votre fréquence, et dans vos
                        comportements
                    </li>
                </ul>
                <div className="quote">
                    {' '}
                    <p className="quote_p">
                        « Un arc qui est toujours armé, en état de tension, perd
                        sa puissance. Laisse le donc se reposer, récupérer sa
                        fermeté : ainsi, quand tu tendras sa corde, tu sentiras
                        sa satisfaction et sa force intacte »
                    </p>
                    <p className="quote_p">
                        {' '}
                        Paulo Coelho, la voie de l’Archer.
                    </p>
                </div>
                <div className="sophro">
                    <div className="sophro_photo">
                        <img src={portrait} alt="portrait" /> Caroussel à mettre
                        en place
                    </div>
                    <div className="sophro_content">
                        <p className="sophro_content_item">
                            Sophrologie, Hypnose, hypnose régressive, Coach ????
                            C’est beaucoup, mais exactement cela consiste en ?
                        </p>
                        <ul className="sophro_content_item">
                            <li>
                                {' '}
                                J’accompagne les femmes et les hommes, à partir
                                de 10 ans, à obtenir la meilleure version
                                d’eux-mêmes, sans qu’ils n’aient à se demander
                                s’ils seront validés ou pas, car juste leur
                                propre jugement compte.
                            </li>
                            <li>
                                J’accompagne les femmes et les hommes qui
                                n’arrivent pas, qui ne sont pas satisfaits, de
                                leur vie actuelle à aller vers leur vie désirée.
                            </li>
                            <li>
                                J’accompagne les femmes et les hommes à utiliser
                                leurs meilleurs atouts personnels sans douter
                                d’eux-mêmes et de leur potentialité.
                            </li>
                            <li>
                                J’accompagne les femmes et les hommes à utiliser
                                leurs meilleurs atouts personnels sans douter
                                d’eux-mêmes et de leur potentialité.
                            </li>
                            <li>
                                J’accompagne les gens à accepter qui ils sont,
                                dans leur entièreté, vers leur accomplissement
                                et ce qu’ils désirent être.
                            </li>
                        </ul>
                        <p className="sophro_content_item">Et pour cela</p>
                        <p className="sophro_content_item">
                            J’utilise des outils, tels que cités au départ et
                            j’adapte en fonction de chacun de vous, de chacun de
                            vos parcours, ET SURTOUT en fonction de ce qui vous
                            est confortable et de ce qui vous réussit.
                        </p>
                        <p className="sophro_content_item">
                            Nous irons creuser en hypnose régressive, nous irons
                            poser en hypnose méditative et sophrologie, nous
                            irons mettre des coups de gants de boxe sur un
                            rocher dehors en foret et crier, on restera à
                            échanger au cabinet ….
                        </p>
                        <p className="sophro_content_item">
                            C’EST CE QUE VOUS ÊTES QUI DÉTERMINE CE QUE JE
                            PROPOSE, ET C’EST QUI VOUS ÊTES QUI DÉTERMINE CE QUE
                            NOUS ALLONS FAIRE
                        </p>
                    </div>
                </div>
                <button className="button">
                    Plus sur mon parcours en cliquant ici
                </button>
                <Programmes />
            </div>
            <Footer />
        </main>
    )
}
