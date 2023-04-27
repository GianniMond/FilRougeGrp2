import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <div className="header">
            <div id='top_header'>
                <h2 className='title_header'>WorkTask</h2>
            </div>
            <div id='bot_header'>
                <p className='sous_titre'>Facilitez vous la task</p>
            </div>
        </div>

    );
};

export default Header;