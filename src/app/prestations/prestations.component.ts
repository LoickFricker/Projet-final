import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../services/prestations.service';

/**
 * Le composant PrestationsComponent gère l'affichage des prestations.
 */
@Component({
    selector: 'app-prestations',
    templateUrl: './prestations.component.html',
    styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements OnInit {

    prestations?: any[];

    constructor(private prestationsService: PrestationsService) { }

    ngOnInit() {
        this.loadPrestations();
    }

    /**
     * Construit l'URL de l'image associée à une prestation spécifique.
     * @param {string} prestationId - L'identifiant de la prestation pour laquelle récupérer l'image.
     * @returns {string} L'URL de l'image associée à la prestation spécifiée.
     */
    getImageUrl(prestationId: string): string {
        // Construisez l'URL en fonction de l'ID de la prestation
        return `http://localhost:3000/prestations/image/${prestationId}`;
    }

    /**
     * Charge les prestations à afficher en récupérant les données depuis le service PrestationsService.
     */
    loadPrestations(): void {
        this.prestationsService.getAllPrestations().subscribe({
            next: data => {
                this.prestations = data;
            },
            error: error => {
                console.error('Erreur lors du chargement des prestations : ', error);
            }
        });
    }

}
