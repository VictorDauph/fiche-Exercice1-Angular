import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponentComponent } from './user-component/user-component.component';

export const routes: Routes = [
    { path: 'users', component: UserComponentComponent, pathMatch: 'full' },  // Affiche le composant Utilisateurs
    { path: 'about', component: AboutComponent, pathMatch: 'full' }, // Affiche le composant À propos
    { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirection par défaut vers /users
    { path: '**', redirectTo: '/users', pathMatch: 'full' } // Gestion des routes inconnues
];