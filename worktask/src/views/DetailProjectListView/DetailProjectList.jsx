import React from 'react';
import './DetailProjectList.css';


const DetailProjectList = () => {
    return (
        <div className='background'>
            <div className='menu-left'>
                <div>membres du projet</div>
                <div>Ajouter tache</div>
            </div>
            <div>
                <div>Importante</div>
                <div>A faire</div>
                <div>En cours</div>
                <div>A vérifier</div>
                <div>Terminée</div>
            </div>
        </div>
    );
};

export default DetailProjectList;