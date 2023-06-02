import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import './AjouterProjet.css';

const FormulaireProjet = ({ projet, setProjet}) => {

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  function addProjet() {
    setProjet([...projet, {titre, description}]);
    return navigate("./ProjectList")
  }

  return (
    <div className='background_projet'>
        <div className="card formulaire">
            <h1>Nouveau Projet</h1>
            <div className="form-control">
                    <div className="mb-4">
                        <label htmlFor="titre">Titre du projet</label>
                        <input type="text" className='form-control' name="titre" id="titre" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="titre">Description</label>
                        <input type='textarea' className='form-control' name="desc" id="desc" onChange={(e) => setNom(e.target.value)} />
                    </div>
                    <button className='btn btn-success form-control' onClick={() => addProjet()}>Ajouter</button>
                    </div>
        </div>
    </div>
  );

}

export default FormulaireProjet;