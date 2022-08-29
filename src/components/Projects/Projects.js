import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <a href="">
                <div className='projects_block'>
                    <h2>Коммерческие</h2>
                    <p>Дизайн интерьера</p>
                </div>
            </a>
            <a href="">
                <div className='projects_block'>
                    <h2>Частные</h2>
                    <p>Дизайн интерьера</p>
                </div>
            </a>
            <a href="">
                <div className='projects_block'>
                    <h2>Архитектура</h2>
                    <p>Дизайн интерьера</p>
                </div>
            </a>
        </div>
    );
};

export default Projects;
