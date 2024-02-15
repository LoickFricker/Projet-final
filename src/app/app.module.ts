import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { LoginComponent } from './login/login.component';
import { PrestationsadminComponent } from './prestationsadmin/prestationsadmin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PrestationsComponent,
    LoginComponent,
    PrestationsadminComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
