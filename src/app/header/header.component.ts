import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

/**
 * Le composant HeaderComponent représente l'en-tête de l'application.
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    isMenuOpen = false;

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    /**
     * Exécutée lors de l'initialisation du composant.
     * Sélectionne un logo aléatoire pour affichage dans l'en-tête.
     */
    ngOnInit(): void {
        this.selectRandomLogo();
    }

    /**
     * Vérifie si l'utilisateur est actuellement connecté.
     * @returns {boolean } true si l'utilisateur est connecté, false si il ne l'est pas.
     */
    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    logoUrl: string = '';
    /**
     * Sélectionne aléatoirement un logo parmi une listes de logos disponibles.
     */
        selectRandomLogo(): void {
        const logos = [
            './assets/img/logo-bleu.png',
            './assets/img/logo-orange.png',
            './assets/img/logo-violet.png',
        ];
        const randomIndex = Math.floor(Math.random() * logos.length);
        this.logoUrl = logos[randomIndex];
    }
}
