import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('../app/shared/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('../app/shared/components/register/register.module').then(m => m.RegisterModule)},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
