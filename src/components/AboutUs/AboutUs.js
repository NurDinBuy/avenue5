import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className="about_container">
                <p>О нас </p>
                <div className="about_content">
                    <h2>МЫ ЕСТЬ СТИЛЬ !</h2>
                    <p>Мы студия дизайна смело заявляющая что мы делаем новое ! Мы делаем новое ! Каждый проект это произведение искусства и мы не боимся делать смелые решения</p>
                    <div className="about_btn">
                        <button className='num_btn'>Укажите ваш телефон</button>
                        <button className='con_btn'>связаться с нами</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
