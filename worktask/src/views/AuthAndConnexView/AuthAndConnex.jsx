import React from 'react';
import './AuthAndConnex.css';
import { useNavigate } from 'react-router-dom';

const AuthAndConnex = () => {

    let navigate = useNavigate();

    function handleConnexionClick(event) {
        event.preventDefault();
        navigate("/projetList");
    }

    function handleInscriptionClick(event) {
        event.preventDefault();
        navigate("/projetList");
    }

<<<<<<< HEAD
<<<<<<< HEAD
    return (
=======
    return (     
>>>>>>> LucieD
=======
    return (
>>>>>>> db121e241546c52256aa951060da4d9cbc7633a7
        <div className='background'>
            <form class="form-group">
                <div class="demandes">
                    <label for="emailConnex">Adresse mail</label>
                    <input type="email" className="form-control" id="emailConnex" placeholder="abcdefghij@gmail.com" />
                    <label for="motDePasseConnex">Mot de passe</label>
                    <input type="password" className="form-control" id="motDePasseConnex" placeholder="******" />
                </div>
<<<<<<< HEAD
                <div class="boutons">
                    <button type="submit" onClick={handleConnexionClick} className="btn btn_connexview">Connexion</button>
                    <button type="submit" onClick={handleInscriptionClick} className="btn btn_connexview">Inscription</button>
                </div>
=======
                <div>
                    <button type="submit" onClick={handleConnexionClick} className="btn btn-secondary btn_connexview">Connexion</button>
                </div>
                <button type="submit" onClick={handleInscriptionClick} className="btn btn-secondary btn_connexview">Inscription</button>
>>>>>>> db121e241546c52256aa951060da4d9cbc7633a7
            </form>
        </div>
    );
};

export default AuthAndConnex;