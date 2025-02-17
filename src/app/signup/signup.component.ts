import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

/**
 * Le composant SignupComponent gère le processus d'inscription des utilisateurs.
 * Il inclut la validation du mot de passe et une option pour afficher/masquer le mot de passe.
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Inscrit un nouvel utilisateur après validation des mots de passe.
   */
  signup(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.authService.signup(this.username, this.password)
      .subscribe({
        next: (response) => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/prestations']);  // Redirection après inscription
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = error.error.message || 'Une erreur est survenue';
        }
      });
  }
}
