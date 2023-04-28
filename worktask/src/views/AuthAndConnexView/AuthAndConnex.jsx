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

    return (
<<<<<<< HEAD
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="emailConnex">Email</label>
                    <input type="email" className="form-control" id="emailConnex" placeholder="Entrez votre adresse mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="motDePasseConnex">Mot de passe</label>
                    <input type="password" className="form-control" id="motDePasseConnex" placeholder="Mot de passe" />
                </div>
                <div>
                    <button type="submit" onClick={handleConnexionClick} className="btn btn-secondary btn_connexview">Connexion</button>
                </div>
                <button type="submit" onClick={handleInscriptionClick} className="btn btn-secondary btn_connexview">Inscription</button>
=======
        <div className='background'>
            <form class="form-group">
                <div class="demandes">
                    <label for="emailConnex">Adresse mail</label>
                    <input type="email" className="form-control" id="emailConnex" placeholder="abcdefghij@gmail.com" />
                    <label for="motDePasseConnex">Mot de passe</label>
                    <input type="password" className="form-control" id="motDePasseConnex" placeholder="******" />
                </div>
                <div class="boutons">
                    <button type="submit" className="btn btn_connexview">Connexion</button>
                    <button type="submit" className="btn btn_connexview">Inscription</button>
                </div>
>>>>>>> LucieD
            </form>
        </div>
    );
};

export default AuthAndConnex;