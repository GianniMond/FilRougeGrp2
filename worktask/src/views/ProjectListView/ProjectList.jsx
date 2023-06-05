import React from 'react';
import './ProjectList.css';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({projet, setProjet}) => {



    let navigate = useNavigate();

    function DetailProjet(event){
        event.preventDefault();
        navigate("/detailProjetList")
    }

    function AjouterProjet(event){
        event.preventDefault();
        navigate("/AjoutProjet")
    }

   
    return projet ?(

        // <div>
            <div className='background_projet'>
                    <button class="btn btn-outline-dark btn-lg m-5" onClick={AjouterProjet}>Ajouter un projet</button>
                      
                      
                       
                            { 
                            projet.map((projet, index) => 
                            <React.Fragment key={index}>

                              <div className='cards_projet'>
                          <div class="card">  
                            <div class="card-header">{projet.titre}</div>
                            
                           
                            
                                 <ol class="list-group list-group-flush">
                                    <li class="list-group-item">{projet.description}</li>
                                 </ol> 
                                 <button class="btn btn-outline-dark btn-lg m-5" onClick={DetailProjet}>Detail du projet</button>
                                 </div>
                                  </div>
                            </React.Fragment> 
                            ) 
                            }
                           
                </div>           
    ) :
    (<div>
        <h3>Aucun projet en cours</h3>
    </div>);
};

export default ProjectList;