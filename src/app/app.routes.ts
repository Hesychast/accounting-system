import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'home', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
    { path: 'users-management', loadComponent: () => import('./components/module-dashboard/module-dashboard.component').then(m => m.ModuleDashboardComponent) },
    { path: 'users', loadComponent: () => import('./components/users-admin-panel/users-admin-panel.component').then(m => m.UsersAdminPanelComponent) },
    { path: 'edit-user/:id', loadComponent: () => import('./components/user-editor/user-editor.component').then(m => m.UserEditorComponent) },
    { path: 'add-user', loadComponent: () => import('./components/user-editor/user-editor.component').then(m => m.UserEditorComponent) },
    { path: 'not-available', loadComponent: () => import('./components/not-available/not-available.component').then(m => m.NotAvailableComponent) },
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
];
