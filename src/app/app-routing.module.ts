import { FullComponent } from './shared/layouts/full/full.component';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FullComponent,
  //   children: [
  //     {
  //       path: '',
          // loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)

  //     }
  //   ]
  // },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
