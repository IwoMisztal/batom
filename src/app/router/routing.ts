import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { HomePageComponent } from '../home-page/home-page.component';

const appRoutes: Routes = [
    { path: 'admin', component: AdminPanelComponent },
    { path: 'home-page', component: HomePageComponent},
    { path: '',
      redirectTo: '/home-page',
      pathMatch: 'full'
    }
  ];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule],
 })


export class Router {
}

export const routingComponents = [AdminPanelComponent,HomePageComponent ]
