import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home.component' ;
import { AboutComponent }  from './about.component' ;

const routes: RouterConfig = [
  { 
    path: 'traductions',
    component: HomeComponent
  },
  { 
    path: 'a-propos',
    component: AboutComponent
  },
  //Redirects 404s to Home
  { 
    path: '**',
    redirectTo: '/traductions'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
