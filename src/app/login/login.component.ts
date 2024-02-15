import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

/**
 * Le composant LoginComponent gère le processus de connexion des utilisateurs.
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(
        private authService: AuthService,
        private router: Router) { }

    login(): void {
        this.authService.login(this.username, this.password)
            .subscribe({
                next: (response) => {
                    this.authService.saveToken(response.token);
                    this.router.navigate(['/prestationsadmin']);
                },
                error: (error) => {
                    console.error(error);
                    this.errorMessage = error.error.message;
                }
            });
    }
}
