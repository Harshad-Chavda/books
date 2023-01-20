import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './authentication-routing.module';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forChild(AuthenticationRoutes),
    CommonModule,
  ]
})
export class AuthenticationModule { }
