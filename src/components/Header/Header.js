import React from 'react';

import './Header.css'

import logo from '../../assets/svg/avenue_logo.svg'


const Header = () => {
    return (
        <div className={'header'}>
            <div className="header_container">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="number">
                    <a href="">0 (500)-500-500</a>
                    <p>Ежедневно с 9:00 до 20:00</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
