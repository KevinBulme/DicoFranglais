import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home.component' ;
import { AboutComponent }  from './about.component' ;

const routes: RouterConfig = [
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'about',
    component: AboutComponent
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
