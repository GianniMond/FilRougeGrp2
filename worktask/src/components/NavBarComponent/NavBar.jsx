import React from 'react';
import './NavBar.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import ProjetList from '../../views/ProjectListView/ProjectList';
import TeamList from '../../views/TeamListView/TeamList';

const NavBar = () => {
    return (
        <div>

            {/* Insertion du routeur  */}
            <BrowserRouter>
                <div className='navbar'>
                    {/* Def des liens */}
                    <button className='bouton_navbar'>
                        <Link to="/projetList">Listes des projets</Link>
                    </button>
                    <button className='bouton_navbar'>
                        <Link to="/teamList">Listes des équipes</Link>
                    </button>
                    <button className='bouton_navbar'>
                        <a>Recherche</a>
                    </button>
                </div>

                {/* Création des Routes */}
                <Routes>
                    <Route path='/projetList' element={<ProjetList/>}/>
                    <Route path='/teamList' element={<TeamList/>}/>
                </Routes>
            </BrowserRouter>
            {/* Full Execution */}
            <Outlet/>

        </div>
    );
};

export default NavBar;