import React from 'react'
import './programmes.scss'
import prog1 from '../../assets/prog11.jpg'
import prog2 from '../../assets/prog2.jpg'
import prog3 from '../../assets/prog3.jpg'

export default function Programmes() {
    return (
        <div className="programmes">
            <h2>Mes programmes</h2>
            <div className="prog">
                <div>
                    <img src={prog1} alt="prog1" className="prog_photo" />{' '}
                    <p className="prog_txt">Coaching: Changer de fréquence</p>
                </div>
                <div>
                    <img src={prog2} alt="prog2" className="prog_photo" />{' '}
                    <p className="prog_txt">Hypnose régressive: Reconnexion</p>
                </div>
                <div>
                    <img src={prog3} alt="prog3" className="prog_photo" />{' '}
                    <p className="prog_txt">Sophrologie / Hypnose</p>
                </div>
            </div>
        </div>
    )
}
