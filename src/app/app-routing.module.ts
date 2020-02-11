import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        data: {
          title: 'Home'
        },
        component: HomeComponent
      },
    ]
  },

  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      title: 'Login',
      customLayout: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
