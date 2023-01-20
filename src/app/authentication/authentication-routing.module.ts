import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import {  Routes } from '@angular/router';

export const AuthenticationRoutes: Routes = [ {
  path: '',
  children: [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    }
  ]
}];

