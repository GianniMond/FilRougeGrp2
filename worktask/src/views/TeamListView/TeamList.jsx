import React from 'react';
import './TeamList.css';

const TeamList = ({ personnes, setPer}) => {
    return (
    <div className='Background'>
  <div className='Cards_teams'>
        <div class="card">
        <div class="card-header">
         Indication du projet
         </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Personne 1 du projet</li>
     <li class="list-group-item">Personne 2 du projet</li>
    </ul>
</div>
{/* 
      <div class="card">
      <div class="card-header">
      Projet n°2
       </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item"></li>
  </ul>
</div>

<div class="card">
      <div class="card-header">
      Projet n°3
       </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item"></li>
   <li class="list-group-item"></li>
   <li class="list-group-item"></li>
  </ul>
</div> */}
</div>
</div>
    );
};

export default TeamList;

