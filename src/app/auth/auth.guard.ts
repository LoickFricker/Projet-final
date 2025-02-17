import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Le service AuthGuard permet de protéger les routes en fonction du statut de connexion et du rôle de l'utilisateur.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    /**
     * Crée une instance du service AuthGuard.
     * @param {AuthService} authService - Le service d'authentification utilisé pour vérifier l'état de connexion de l'utilisateur.
     * @param {Router} router - Le service de routage utilisé pour rediriger l'utilisateur si nécessaire.
     */
    constructor(private authService: AuthService, private router: Router) { }

    /**
     * Méthode `canActivate` utilisée pour protéger les routes en fonction du statut de connexion et du rôle de l'utilisateur.
     * - Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion.
     * - Si la route nécessite un accès administrateur et que l'utilisateur n'est pas admin, il est redirigé vers l'accueil.
     * @param {ActivatedRouteSnapshot} route - Contient les informations sur la route demandée.
     * @param {RouterStateSnapshot} state - Contient l'état du routeur.
     * @returns {boolean} `true` si l'accès est autorisé, `false` sinon.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isLoggedIn()) {
            // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
            this.router.navigate(['/login']);
            return false;
        }

        // Vérifie si la route demandée nécessite un accès administrateur
        const requiresAdmin = route.data['requiresAdmin'] || false;

        if (requiresAdmin && !this.authService.isAdmin()) {
            // Redirige vers l'accueil si l'utilisateur n'est pas admin
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
