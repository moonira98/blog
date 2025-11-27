import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Details } from './pages/details/details';
import { LoginAdmin } from './pages/login-admin/login-admin';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home},
    {path: 'details/:id', component: Details},
    {path: 'loginAdmin', component: LoginAdmin}
];
