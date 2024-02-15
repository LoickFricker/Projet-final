import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { LoginComponent } from './login/login.component';
import { PrestationsadminComponent } from './prestationsadmin/prestationsadmin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'prestations', component: PrestationsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'prestationsadmin', component: PrestationsadminComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
