import React, { useState, useRef } from 'react';
import Icon from "../../../elements/icon";

function Mode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const modeTextRef = useRef(null);
    const bodyRef = useRef(document.body);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            modeTextRef.current.innerText = 'Dark Mode';
            bodyRef.current.classList.remove('dark');
        } else {
            modeTextRef.current.innerText = 'Light Mode';
            bodyRef.current.classList.add('dark');
        }
    };

    return (
        <>
            <li className="mode">
                <div className="moon-sun">
                    <Icon className="icon moon" type="moon" />
                    <Icon className="icon sun" type="sun" />
                </div>
                <span className="mode-text text" ref={modeTextRef}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>

                <div className="toggle-switch" onClick={toggleDarkMode}>
                    <span className="switch"></span>
                </div>
            </li>
        </>
    );
}

export default Mode;
