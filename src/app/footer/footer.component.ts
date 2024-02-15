import { Component, OnInit } from '@angular/core';

/**
 * Le composant footerComponent représente le mied de page de l'application.
 */

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    logoUrl: string = './assets/img/logo-blexane.png';

    iconeInstagram: string = './assets/img/instagram.png'

    constructor() { }

    ngOnInit(): void {
    }

}
