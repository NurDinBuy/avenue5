import React from 'react';
import './Preview.css'

import facebook from '../../assets/svg/facebook.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import instagram from '../../assets/svg/instagram.svg'
import youtube from '../../assets/svg/youtube.svg'
import tiktok from '../../assets/svg/tiktok.svg'

const Preview = () => {
    return (
        <div className='prev'>
            <div className="social">
                <div className="line">.</div>
                <a href="" className="social_item">
                    <img src={facebook} alt="#"/>
                </a>
                <a href="" className="social_item">
                    <img src={whatsapp} alt="#"/>
                </a>
                <a href="" className="social_item">
                    <img src={instagram} alt="#"/>
                </a>
                <a href="" className="social_item">
                    <img src={youtube} alt="#"/>
                </a>
                <a href="" className="social_item">
                    <img src={tiktok} alt="#"/>
                </a>
                <div className="line">.</div>
            </div>
            <div className="prev_content">
                <h1>ХОЧЕШЬ ЖИТЬ КРАСИВО ?</h1>
                <p>Сделаем красивый дизайн и поможем в подборке самых лучших материалов </p>
                <button>Связаться с нами</button>
            </div>
        </div>
    );
};

export default Preview;
