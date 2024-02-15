import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../services/prestations.service';

/**
 * Le composant PrestationsadminComponent gère l'administration des prestations.
 */
@Component({
    selector: 'app-prestationsadmin',
    templateUrl: './prestationsadmin.component.html',
    styleUrls: ['./prestationsadmin.component.scss']
})
export class PrestationsadminComponent implements OnInit {

    prestations: any[] = [];

    /**
     * Objet représentant une nouvelle prestation à ajouter.
     */
    newPrestation: any = {
        title: '',
        description: '',
        price: 0,
        duration: 0,
        image: null
    };

    /**
     * Crée une instance du composant PrestationsadminComponent.
     * @param {PrestationsService} prestationsService - Le service PrestationsService utilisé pour gérer les prestations.
     */
    constructor(private prestationsService: PrestationsService) { }

    /**
     * Exécutée lors de l'initialisation du composant.
     * Charge les prestations à afficher et à administrer.
     */
    ngOnInit(): void {
        this.loadPrestations();
    }

    /**
     * Charge les prestations à afficher et à administrer en récupérant les données depuis le service PrestationsService.
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

    /**
     * Ajoute une nouvelle prestation en utilisant les informations fournies dans newPrestation.
     */
    addPrestation(): void {
        this.prestationsService.createPrestation(this.newPrestation).subscribe({
            next: () => {
                this.loadPrestations();
                this.newPrestation = { title: '', description: '', price: 0, duration: 0, image: null };
            },
            error: error => {
                console.error('Erreur lors de l\'ajout de la prestation : ', error);
            }
        });
    }

    /**
     * Gère la sélection de fichier pour l'image de la nouvelle prestation.
     * @param {any} event - L'événement de sélection de fichier déclenché par l'utilisateur.
     */
    handleFileInput(event: any): void {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            this.newPrestation.image = file;
        }
    }

    /**
     * Supprime une prestation existante à partir de son identifiant.
     * @param {string} id - L'identifiant de la prestation à supprimer.
     */
    deletePrestation(id: string): void {
        this.prestationsService.deletePrestation(id).subscribe({
            next: () => {
                this.loadPrestations();
            },
            error: (error: any) => {
                console.error('Erreur lors de la suppression de la prestation : ', error);
            }
        });
    }
}
