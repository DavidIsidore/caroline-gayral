import React from 'react'
import Header from '../../components/Header/Header'
import Programmes from '../../components/Programmes/Programmes'
import Footer from '../../components/Footer/Footer'
import './home.scss'
import Presentation from '../../components/Presentation/Presentation'
import PresentationBloc1 from '../../components/PresentationBloc1/PresentationBloc1'
import PresentationBloc2 from '../../components/PresentationBloc2/PresentationBloc2'
import ButtonParcours from '../../components/ButtonParcours/ButtonParcours'

export default function Home() {
    return (
        <main>
            <Header />
            <Presentation />

            <PresentationBloc1 />
            <PresentationBloc2 />
            <ButtonParcours />

            <Programmes />

            <Footer />
        </main>
    )
}
