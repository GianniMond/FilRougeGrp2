import React from 'react';
import './AuthAndConnex.css';
import { useNavigate } from 'react-router-dom';

const AuthAndConnex = ({}) => {

    let navigate = useNavigate();


    function handleConnexionClick() {
        return navigate("/projetList");
    }

    function handleInscriptionClick(event) {
        event.preventDefault();
        navigate("/projetList");

    }


    return (

        <div className='background'>
            <form class="form-group">
                <div class="demandes">
                    <label for="emailConnex">Adresse mail</label>
                    <input type="email" className="form-control" id="emailConnex" placeholder="abcdefghij@gmail.com" />
                    <label for="motDePasseConnex">Mot de passe</label>
                    <input type="password" className="form-control" id="motDePasseConnex" placeholder="******" />
                </div>
                <div class="boutons">
                    <button type="submit" onClick={handleConnexionClick} className="btn btn_connexview">Connexion</button>
                    <button type="submit" onClick={handleInscriptionClick} className="btn btn_connexview">Inscription</button>
                </div>
            </form>
        </div>
    );
};

export default AuthAndConnex;