import React from 'react'
import './programmes.scss'
import prog1 from '../../assets/prog11.jpg'
import prog2 from '../../assets/prog2.jpg'
import prog3 from '../../assets/prog3.jpg'

export default function Programmes() {
    return (
        <div className="programmes">
            <h2 className="programmes_title">Mes programmes</h2>
            <div className="programmes_link">
                <div className="programmes_link_bloc">
                    <img
                        src={prog1}
                        alt="prog1"
                        className="programmes_link_bloc_photo"
                    />{' '}
                    <p className="prog_txt">Coaching: Changer de fréquence</p>
                </div>
                <div className="programmes_link_bloc">
                    {' '}
                    <img
                        src={prog2}
                        alt="prog2"
                        className="programmes_link_bloc_photo"
                    />{' '}
                    <p className="prog_txt">Hypnose régressive: Reconnexion</p>
                </div>
                <div className="programmes_link_bloc">
                    {' '}
                    <img
                        src={prog3}
                        alt="prog3"
                        className="programmes_link_bloc_photo"
                    />{' '}
                    <p className="prog_txt">Sophrologie / Hypnose</p>
                </div>
            </div>
        </div>
    )
}
