import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailProjectList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');

    useEffect(() => {
        // Effectuez une requête GET pour récupérer la liste des tâches existantes
        axios.get('/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleTaskCreation = () => {
    //    Vérifiez si le nom de la nouvelle tâche est non vide
        if (newTaskName.trim() === '') {
           return;
       }

    //     // Créez un nouvel objet tâche avec le nom saisi
        const newTask = { name: newTaskName };

        // Effectuez une requête POST pour créer la nouvelle tâche
        axios.post('/api/tasks', newTask)
            .then(response => {
                // Ajoutez la nouvelle tâche à la liste des tâches existantes
                setTasks([...tasks, response.data]);

                // Réinitialisez le champ de saisie de la nouvelle tâche
                setNewTaskName('');
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div className='background'>
            <div className="pagestyle">
                <div className='cards_projet'>
                    <div className="card">
                        <div className="card-header"> Importante </div>
                        <ul className="list-group list-group-flush">
                            
                            <li className="list-group-item">Task2</li>
                        </ul>
                        <button className="btn btn-secondary bouton" onClick={handleTaskCreation}>
                            + Ajouter une tâche
                        </button>
                        </div>
                    </div>                 
                    <div className='cards_projet'>
                        <div className="card">
                            <div className="card-header"> A faire </div>
                            <ul className="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div className="card">
                            <div className="card-header"> En cours </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Task1</li>
                                <li className="list-group-item">Task2</li>
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div className="card">
                            <div className="card-header"> A verifier </div>
                            <ul className="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                    <div className='cards_projet'>
                        <div className="card">
                            <div className="card-header"> Terminée </div>
                            <ul className="list-group list-group-flush">
                            </ul>
                            <button className="btn btn-secondary bouton">+ Ajouter une tâche</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DetailProjectList;
