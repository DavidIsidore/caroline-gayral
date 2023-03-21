import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import photoVeste from '../../assets/Photo-veste-beige.jpg'

export default function Home() {
    return (
        <main>
            <Header />
            <div className="presentation">
                <img src={photoVeste} alt="Photo de présentation" />
                <h1>Caroline Gayral</h1>
                <ul>
                    <li>Hypnose classique</li>
                    <li>Hypnose régressive</li>
                    <li>Sophrologie</li>
                    <li>Hypnose régressive, spirituelle, énergétique</li>
                    <li>Thérapie comportementale et cognitive</li>
                </ul>
            </div>
            <div>Présentation texte</div>
            <Footer />
        </main>
    )
}
