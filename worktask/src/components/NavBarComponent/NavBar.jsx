import React, {useState} from 'react';
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
import AuthAndConnex from '../../views/AuthAndConnexView/AuthAndConnex';
import DetailProjetList from '../../views/DetailProjectListView/DetailProjectList';
import AjoutProjet from '../../views/AjoutProjet/AjoutProjet';
import { ProjetsListe } from '../../datas/ProjetList';

const NavBar = () => {

    const [projet, setProjet] = useState(ProjetsListe);

    return (
        <div>
            <div className='navbar'>
                <button className='bouton_navbar'>
                    <Link to="/projetList">Listes des projets</Link>
                </button>
                <button className='bouton_navbar'>
                    <Link to="/teamList">Listes des équipes</Link>
                </button>
                <button className='bouton_navbar'>
                    <a>Recherche</a>
                </button>
                <Link to="/detailProjetList"></Link>
                <Link to="/AjoutProjet"></Link>
            </div>
            <Routes>
                <Route path='/' element={<AuthAndConnex/>} />
                <Route path='/projetList' element={<ProjetList projet ={projet} setProjet={setProjet} />} />
                <Route path='/detailProjetList' element={<DetailProjetList/>} />
                <Route path='/teamList' element={<TeamList/>} />
                <Route path='/AjoutProjet' element={<AjoutProjet projet ={projet} setProjet={setProjet}/>} />
            </Routes>
            <Outlet />

        </div>
    );
};

export default NavBar;