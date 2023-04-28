import React from 'react';
import './ProjectList.css';
import { useNavigate } from 'react-router-dom';

const ProjectList = () => {

    let navigate = useNavigate();

    /* Function pour aller vers la page du projet */
    /* il faudra que le navigate s'adapte en fonction de la page du projet */
    /* J'ai uniquement coder le projet 1 pour voir */
    function handleTaskClick(event) {
        event.preventDefault();
        navigate("/detailProjetList");
    }
    return (
        <div>
            {/*Reste à faire les placements des cards sur la page*/}
            <div className='background_projet'>
                <div className='cards_projet'>
                    <div class="card">
                        <div class="card-header"> Projet n°1 </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <button class="btn btn-secondary" onClick={handleTaskClick}>Accès au projet</button>
                    </div>
                </div>
                <div className='cards_projet'>
                    <div class="card">
                        <div class="card-header"> Projet n°2 </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <button class="btn btn-secondary">Accès au projet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;