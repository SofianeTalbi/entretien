import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Définition des routes de l'application
const routes: Routes = [];

@NgModule({
  // Importation du module de routage dans l'application
  imports: [RouterModule.forRoot(routes)],
  // Exportation du module de routage pour une utilisation dans d'autres modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
