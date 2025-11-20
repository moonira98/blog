import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Details } from './pages/details/details';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home},
    {path: 'details/:id', component: Details},
];
