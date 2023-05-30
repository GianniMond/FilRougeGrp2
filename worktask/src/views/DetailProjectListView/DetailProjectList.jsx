import React from 'react';
import './DetailProjectList.css';


const DetailProjectList = () => {
    return (
        <div className='background'>
            <div className="pagestyle">
                <div className='menu-left'>
                    <div className='card teamproject'>Membres du projet</div>
                </div>
                <div className='cards_projet'>
                    <div class="card">
                        <div class="card-header"> Importante </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Task1</li>
                            <li class="list-group-item">Task2</li>                            
                        </ul>
                        <button className="btn btn-secondary bouton" >+ Ajouter une tâche</button>
                    </div>               
                    <div className='cards_projet'>
                        <div class="card">
                            <div class="card-header"> A faire </div>
                            <ul class="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div class="card">
                            <div class="card-header"> En cours </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Task1</li>
                                <li class="list-group-item">Task2</li>                            
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div class="card">
                            <div class="card-header"> A verifier </div>
                            <ul class="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div class="card">
                            <div class="card-header"> Terminée </div>
                            <ul class="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProjectList;
