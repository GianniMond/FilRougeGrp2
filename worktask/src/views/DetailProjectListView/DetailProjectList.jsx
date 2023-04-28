import React from 'react';
import './DetailProjectList.css';


const DetailProjectList = () => {
    return (
        <div className='background'>
            <div className="pagestyle">
                <div className='menu-left'>
                    <div className='card teamproject'>Membres du projet</div>
                    <button className='btn addtask'> + Ajouter une tâche</button>
                </div>
                <div className='status-task'>
                    <div className='card'>Importante</div>
                    <div className='card'>A faire</div>
                    <div className='card'>En cours</div>
                    <div className='card'>A vérifier</div>
                    <div className='card'>Terminée</div>
                </div>
            </div>
<<<<<<< HEAD
            <div>
                <div>Importante</div>
                <div>A faire</div>
                <div>En cours</div>
                <div>A vérifier</div>
                <div>Terminée</div>
            </div>
=======
>>>>>>> LucieD
        </div>
    );
};

export default DetailProjectList;