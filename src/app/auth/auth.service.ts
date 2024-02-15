import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Le service AuthService gère l'authentification des utilisateurs.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/login';

    /**
     * Crée une instance du service AuthService.
     * @param {HttpClient} http - Le service HttpClient utilisé pour effectuer des requêtes HTTP.
     */
    constructor(private http: HttpClient) { }

    /**
     * Effectue une demande de connexion au serveur avec les informations d'identification fournies.
     * @param {string} username - Le nom d'utilisateur de l'utilisateur.
     * @param {string} password - Le mot de passe de l'utilisateur.
     * @returns {Observable<any>} Un observable contenant la réponse de la demande de connexion.
     */
    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { username, password });
    }

    /**
     * Enregistre le jeton d'authentification dans le stockage local du navigateur.
     * @param {string} token - Le jeton d'authentification à enregistrer.
     */
    saveToken(token: string): void {
        localStorage.setItem('token', token);
        console.log(token);
    }

    /**
     * Récupère le jeton d'authentification du stockage local du navigateur.
     * @returns {string | null} Le jeton d'authentification s'il existe, sinon null.
     */
    getToken(): string | null {
        return localStorage.getItem('token');
    }

    /**
     * Déconnecte l'utilisateur en supprimant le jeton d'authentification du stockage local.
     */
    logout(): void {
        localStorage.removeItem('token');
    }

    /**
     * Vérifie si l'utilisateur est actuellement connecté en vérifiant la présence du jeton d'authentification.
     * @returns {boolean} true si l'utilisateur est connecté, false sinon.
     */
    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
