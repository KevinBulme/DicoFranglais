import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home.component' ;

const routes: RouterConfig = [
  { 
    path: 'home',
    component: HomeComponent
  },
  //Redirects 404s to Home
  { 
    path: '**',
    redirectTo: '/home'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
