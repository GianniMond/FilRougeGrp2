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
                        <ol class="list-group list-group-flush">
                            <li class="list-group-item">Task</li>
                            <li class="list-group-item">Task</li>
                        </ol>
                        <button class="btn btn-secondary" onClick={handleTaskClick}>Accès au projet</button>
                    </div>
               
                <div className='cards_projet'>
                    <div class="card">
                        <div class="card-header"> Projet n°2 </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Task</li>
                            <li class="list-group-item">Task</li>

                        </ul>
                        <button class="btn btn-secondary">Accès au projet</button>
                    </div>
                </div>
                
            </div>  
                   <div>
                    <button class="btn btn-primary">Ajouter un projet</button>
                </div>
         </div>

        </div>
    );
};

export default ProjectList;