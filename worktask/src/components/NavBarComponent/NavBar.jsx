import React, { useState } from 'react';
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
import { memberList } from '../../data/memberlist';
import { projetsList } from '../../data/projetslist';
import { tasksList } from '../../data/taskslist';

const NavBar = () => {
    /* Const pour les deux datas */
    const [projets, setProjets] = useState(projetsList)
    const [members, setMembers] = useState(memberList)
    const [tasks, setTasks] = useState(tasksList)


    return (
        <div>
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
                <Link to="/detailProjetList"></Link>
            </div>

            {/* Création des Routes */}
            <Routes>
                <Route path='/' element={<AuthAndConnex
                    members={members} setMembers={setMembers}
                    projets={projets} setProjets={setProjets}
                    tasks={tasks} setTasks={setTasks}
                />} />
                <Route path='/projetList' element={<ProjetList
                    members={members} setMembers={setMembers}
                    projets={projets} setProjets={setProjets}
                    tasks={tasks} setTasks={setTasks}

                />} />
                <Route path='/detailProjetList' element={<DetailProjetList
                    members={members} setMembers={setMembers}
                    projets={projets} setProjets={setProjets}
                    tasks={tasks} setTasks={setTasks}

                />} />
                <Route path='/teamList' element={<TeamList
                    members={members} setMembers={setMembers}
                    projets={projets} setProjets={setProjets}
                    tasks={tasks} setTasks={setTasks}

                />} />
            </Routes>
            {/* Full Execution */}
            <Outlet />

        </div>
    );
};

export default NavBar;