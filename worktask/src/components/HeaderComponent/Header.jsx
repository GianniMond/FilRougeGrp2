import React from 'react';
import './Header.css';
import image from "../../logo_prev_ui.png";

const Header = () => {
    return (

        <div className="header">
            <img className='logo' src={image} alt="logo du site" height= '95px'/>
            <div id='top_header'>
                <h2 className='title_header'>WorkTask</h2>
                <p className='sous_titre'>Facilitez vous la task</p>
            </div>
            {/* <div id='bot_header'>
                
            </div> */}
        </div>

    );
};

export default Header;