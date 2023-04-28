import React from 'react';
import './AuthAndConnex.css';


const AuthAndConnex = () => {
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
                    <button type="submit" className="btn btn_connexview">Connexion</button>
                    <button type="submit" className="btn btn_connexview">Inscription</button>
                </div>
            </form>

        </div>
    );
};

export default AuthAndConnex;