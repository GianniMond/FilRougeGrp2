import React from 'react';
import './TeamList.css';

const TeamList = () => {
    return (
    <div className='Background'>
  <div className='Cards_projet'>
        <div class="card">
        <div class="card-header">
          Nom du projet
         </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">An item</li>
     <li class="list-group-item">A second item</li>
     <li class="list-group-item">A third item</li>
    </ul>
</div>

      <div class="card">
      <div class="card-header">
        Nom du projet
       </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">An item</li>
  </ul>
</div>

<div class="card">
      <div class="card-header">
        Nom du projet
       </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">An item</li>
  </ul>
</div>
</div>
</div>
    );
};

export default TeamList;

