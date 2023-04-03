import React from 'react'
import './presentationBloc1.scss'

export default function PresentationBloc1() {
    return (
        <div className="bloc1">
            <div className="bloc1_text">
                <p className="bloc1_text_p">
                    Si vous êtes ici, c’est probablement que vous avez ce
                    profond désir de vous réaliser pleinement et d’honorer votre
                    véritable potentiel.
                </p>
                <p className="bloc1_text_p">
                    {' '}
                    Je vous accompagne en vous aidant à mieux vous comprendre, à
                    apprendre à vous maîtriser et calmer ce mental agité pour
                    enfin activer votre véritable potentiel.
                </p>
                <p className="bloc1_text_p">
                    {' '}
                    Le but étant de revivre en cohérence et dans un cheminement
                    de responsabilité et de pleine conscience. Grace à une
                    combinaison d’outils exclusifs, simples et pratiques pour
                    agir sur le corps et l’esprit, l’objectif étant que vous
                    retrouviez votre entière souveraineté.
                </p>
                <p className="bloc1_text_p">Vous êtes au bon endroit si :</p>
                <ul className="bloc1_text_list">
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
            </div>
            <div className="bloc1_quote">
                <p className="bloc1_quote_p">
                    « Un arc qui est toujours armé, en état de tension, perd sa
                    puissance. Laisse le donc se reposer, récupérer sa fermeté :
                    ainsi, quand tu tendras sa corde, tu sentiras sa
                    satisfaction et sa force intacte »
                </p>
                <p className="bloc1_quote_p">
                    {' '}
                    Paulo Coelho, la voie de l’Archer.
                </p>
            </div>
        </div>
    )
}
