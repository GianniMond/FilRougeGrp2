import React from 'react';
import './ProjectList.css';
import { useNavigate } from 'react-router-dom';

const ProjectList = () => {

    let navigate = useNavigate();

    return (
        <div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Projet 1</h5>
                    <ol>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                    </ol>
                    <a href="#" class="btn btn-primary">Accès au projet</a>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Projet 1</h5>
                    <ol>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                    </ol>
                    <a href="#" class="btn btn-primary">Accès au projet</a>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Projet 1</h5>
                    <ol>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                        <li>Task</li>
                    </ol>
                    <a href="#" class="btn btn-primary">Accès au projet</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;