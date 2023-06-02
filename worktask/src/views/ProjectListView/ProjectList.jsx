import React from 'react';
import './ProjectList.css';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({projet, setProjet}) => {



    let navigate = useNavigate();

    function AjouterProjet(){
 
    }
    function handleTaskClick(event) {
        event.preventDefault();
        navigate("/detailProjetList");
            
    }
    return (

        // <div>
            <div className='background_projet'>
                    <button class="btn btn-outline-dark btn-lg m-5" onClick={navigate('./AjoutProjet')}>Ajouter un projet</button>
                       {/* <div className='cards_projet'>
                          <div class="card">
                            { 
                            projet.map((projet) => 
                            <div class="card-header">{projet.Titre}</div>
                            ) 
                            }
                            
                                 <ol class="list-group list-group-flush">
                                    <li class="list-group-item"></li>
                                 </ol>
                            </div>
                        </div> */}
                </div>           
    );
};

export default ProjectList;