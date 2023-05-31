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
        // Vérifiez si le nom de la nouvelle tâche est non vide
        if (newTaskName.trim() === '') {
            return;
        }

        // Créez un nouvel objet tâche avec le nom saisi
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
                <div className='menu-left'>
                    <div className='card teamproject'>Membres du projet</div>
                </div>
                <div className='cards_projet'>
                    <div class="card">
                        <div class="card-header"> Importante </div>
                        <ul className="list-group list-group-flush">
                            {tasks.map(task => (
                                <li key={task.id} className="list-group-item">{task.name}</li>
                            ))}
                            <li class="list-group-item">Task2</li>
                        </ul>
                        <button className="btn btn-secondary bouton" onClick={handleTaskCreation}>
                            + Ajouter une tâche
                        </button>                    </div>
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
