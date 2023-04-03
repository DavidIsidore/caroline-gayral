import React from 'react'
import Header from '../../components/Header/Header'
import Programmes from '../../components/Programmes/Programmes'
import Footer from '../../components/Footer/Footer'
import portrait from '../../assets/portrait.jpg'
import './home.scss'
import Presentation from '../../components/Presentation/Presentation'
import PresentationBloc1 from '../../components/PresentationBloc1/PresentationBloc1'
import PresentationBloc2 from '../../components/PresentationBloc2/PresentationBloc2'

export default function Home() {
    return (
        <main>
            <Header />
            <Presentation />

            <PresentationBloc1 />
            <PresentationBloc2 />
            <div className="text">
                <button className="button">
                    Plus sur mon parcours en cliquant ici
                </button>
                <Programmes />
            </div>
            <Footer />
        </main>
    )
}
