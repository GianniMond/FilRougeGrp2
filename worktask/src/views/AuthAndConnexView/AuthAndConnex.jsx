import React from 'react';
import './AuthAndConnex.css';


const AuthAndConnex = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="emailConnex">Email</label>
                    <input type="email" className="form-control" id="emailConnex" placeholder="Entrez votre adresse mail" />
                </div>
                <div class="form-group">
                    <label for="motDePasseConnex">Mot de passe</label>
                    <input type="password" className="form-control" id="motDePasseConnex" placeholder="Mot de passe" />
                </div>
                <div>
                    <button type="submit" className="btn btn-secondary btn_connexview">Connexion</button>
                </div>
                <button type="submit" className="btn btn-secondary btn_connexview">Inscription</button>
            </form>

        </div>
    );
};

export default AuthAndConnex;