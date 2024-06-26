import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'users-management', loadComponent: () => import('./components/module-dashboard/module-dashboard.component').then(m => m.ModuleDashboardComponent) },
    { path: 'users', loadComponent: () => import('./components/users-admin-panel/users-admin-panel.component').then(m => m.UsersAdminPanelComponent) },
    { path: 'user-edit', loadComponent: () => import('./components/user-editor/user-editor.component').then(m => m.UserEditorComponent) }


    // { path: '**', redirectTo: '/404' }
    //{ path: '', redirectTo: '/articles', pathMatch: 'full' },
    // { path: 'articles', loadComponent: () => import('./components/article-list/article-list.component').then(m => m.ArticleListComponent), pathMatch: 'full' },
    // { path: '404/:id', loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
