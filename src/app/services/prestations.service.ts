import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Le service PrestationsService gère les opération CRUD (Create, Read, Update, Delete) liées aux prestations.
 */
@Injectable({
    providedIn: 'root',
})
export class PrestationsService {
    private apiUrl = `${environment.apiUrl}/prestations`;

    /**
     * Crée une instance du service PrestationsService.
     * @param {HttpClient} http - Le service HttpClient utilisé pour effectuer des requêtes HTTP.
     */
    constructor(private http: HttpClient) { }

    /**
     * Récupère toutes les prestations disponibles.
     * @returns {Observable<any>} Un observable contenant les données des prestations.
     */
    getAllPrestations(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    /**
     * Crée une nouvelle prestation.
     * @param {any} prestation - Les informations sur la nouvelle prestation à créer.
     * @returns {Observable<any>} Un observable contenant la réponse de la création de la prestation.
     */
    createPrestation(prestation: any): Observable<any> {
        const formData = new FormData();
        formData.append('title', prestation.title);
        formData.append('description', prestation.description);
        formData.append('price', prestation.price);
        formData.append('duration', prestation.duration);
        formData.append('image', prestation.image);

        return this.http.post(this.apiUrl, formData);
    }

    /**
     * Supprime une prestation existante.
     * @param {string} id - L'identifiant de la prestation à supprimer.
     * @returns {Observable<any>} Un observable contenant la réponse de la suppression de la prestation.
     */
    deletePrestation(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
