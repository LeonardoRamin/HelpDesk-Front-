import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './components/security/auth.guard';

export const ROUTES: Route[] = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);