// Importation des modules Angular nécessaires
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  // Déclaration des composants de l'application
  declarations: [
    AppComponent,
    StudentcrudComponent
  ],
  // Importation des modules nécessaires à l'application
  imports: [
    BrowserModule, // Module pour le fonctionnement dans un navigateur
    AppRoutingModule, // Module de routage de l'application
    FormsModule, // Module pour la gestion des formulaires Angular
    HttpClientModule, // Module pour effectuer des requêtes HTTP
    BsDatepickerModule.forRoot(), // Module ngx-bootstrap pour le sélecteur de date
    BrowserAnimationsModule, // Module pour les animations dans Angular
    NgSelectModule // Module pour les listes déroulantes avancées
  ],
  providers: [], // Services fournis par l'application
  bootstrap: [AppComponent] // Composant racine de l'application
})
export class AppModule { } // Définition du module principal de l'application
