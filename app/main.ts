import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { ScrollSpyService } from 'ng2-scrollspy';

bootstrap(AppComponent, [
    ScrollSpyService,
    appRouterProviders
]).catch(err => console.error(err));
