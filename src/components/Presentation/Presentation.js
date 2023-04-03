import React from 'react'
import photoVeste from '../../assets/Photo-veste-beige.jpg'
import './presentation.scss'

export default function Presentation() {
    return (
        <div className="presentation">
            <img
                src={photoVeste}
                alt="présentation"
                className="presentation_photo"
            />
            <h1 className="presentation_title">Caroline Gayral</h1>
            <ul className="presentation_list">
                <li>Hypnose classique</li>
                <li>Hypnose régressive</li>
                <li>Sophrologie</li>
                <li>Hypnose régressive, spirituelle, énergétique</li>
                <li>Thérapie comportementale et cognitive</li>
            </ul>
        </div>
    )
}
