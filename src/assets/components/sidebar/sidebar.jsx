import React, { useState } from 'react';
import Logo from '../img/logo.png';
import './sidebar.css';
import Icon from '../../elements/icon';
import Menubar from './menubar/menubar';

function Sidebar() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false); // Estado para controlar el toggle

    const toggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed); // Cambia el estado para abrir/cerrar la sidebar
    };

    return (
        <>
            {/* Agrega la clase 'close' si el estado 'isSidebarClosed' es true */}
            <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={Logo} alt="Logo" />
                        </span>
                        <div className="text header-text">
                            <span className="name">Daniel Baena</span>
                            <span className="profession">Web Developer</span>
                        </div>
                    </div>
                    {/* Pasamos el prop toggleSidebar al componente Icon */}
                    <Icon type="chevron-right" className="toggle" toggleSidebar={toggleSidebar} />
                </header>
                <Menubar/>
            </nav>

            <section className="home">
                <div className="text">Hola mundo</div>
            </section>
        </>
    );
}

export default Sidebar;
