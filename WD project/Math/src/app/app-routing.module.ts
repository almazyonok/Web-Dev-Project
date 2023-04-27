import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule),
        data: {preload: true},
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then(m => m.AuthModule),
        data: {preload: true},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
