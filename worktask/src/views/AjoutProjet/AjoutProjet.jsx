import React from 'react';
import { useNavigate } from 'react-router-dom'
import './AjoutProjet.css';

const FormulaireProjet = ({ projet}) => {

  const titre = "";
  const description = "";

  let navigate = useNavigate();

  function addProjet() {
    return navigate("./ProjectList")
  }

  return (
    <div className='background_projet'>
         <div className='Cards_teams'>
        <div className="card">
            <h1>Nouveau Projet</h1>
            <div className="form-control">
                    <div className="mb-4">
                        <label htmlFor="titre">Titre du projet</label>
                        <input type="text" className='form-control' name="titre" id="titre" onChange={(e) => e.target.value} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="titre">Description</label>
                        <input type='textarea' className='form-control' name="desc" id="desc" onChange={(e) => e.target.value} />
                    </div>
                    <button className='btn btn-success form-control' onClick={() => addProjet()}>Ajouter</button>
                    </div>
        </div>
        </div>
 </div>
  );

}

export default FormulaireProjet;