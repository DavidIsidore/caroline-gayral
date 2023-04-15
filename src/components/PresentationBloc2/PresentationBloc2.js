import React from 'react'
import portrait from '../../assets/portrait.jpg'
import './presentationBloc2.scss'
import Slider from '../Slider/Slider'

export default function PresentationBloc2() {
    return (
        <div className="bloc2">
            <div className="bloc2_slider">
                <Slider />
            </div>
            <div className="bloc2_text">
                <div className="bloc2_text_sophro">
                    <div className="bloc2_text_sophro_content">
                        <p className="bloc2_text_sophro_content_item">
                            Sophrologie, Hypnose, hypnose régressive, Coach ????
                            C’est beaucoup, mais exactement cela consiste en ?
                        </p>
                        <ul className="bloc2_text_sophro_content_item">
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
                        <p className="bloc2_text_sophro_content_item">
                            Et pour cela
                        </p>
                        <p className="bloc2_text_sophro_content_item">
                            J’utilise des outils, tels que cités au départ et
                            j’adapte en fonction de chacun de vous, de chacun de
                            vos parcours, ET SURTOUT en fonction de ce qui vous
                            est confortable et de ce qui vous réussit.
                        </p>
                        <p className="bloc2_text_sophro_content_item">
                            Nous irons creuser en hypnose régressive, nous irons
                            poser en hypnose méditative et sophrologie, nous
                            irons mettre des coups de gants de boxe sur un
                            rocher dehors en foret et crier, on restera à
                            échanger au cabinet ….
                        </p>
                        <p className="bloc2_text_sophro_content_item">
                            C’EST CE QUE VOUS ÊTES QUI DÉTERMINE CE QUE JE
                            PROPOSE, ET C’EST QUI VOUS ÊTES QUI DÉTERMINE CE QUE
                            NOUS ALLONS FAIRE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
