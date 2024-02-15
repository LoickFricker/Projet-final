import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Le service AuthGuard permet de protéger les routes dans une application Angular en vérifiant si l'utilisateur est connecté.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    /**
     * Crée une instance du service AuthGuard.
     * @param {AuthService} authService - Le service d'authentification utilisé pour vérifier l'état de connexion de l'utilisateur.
     * @param {Router} router - Le service de routage utilisé pour rediriger l'utilisateur vers la page de connexion si nécessaire.
     */
    constructor(private authService: AuthService, private router: Router) { }

    /**
     * Méthode canActivate utilisée pour protéger les routes en vérifiant si l'utilisateur est connecté.
     * Si l'utilisateur est connecté, il est autorisé à accéder à la route. Sinon, il est redirigé vers la page de connexion.
     * @returns {boolean} true si l'utilisateur est connecté et peut accéder à la route, false sinon.
     */
    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
