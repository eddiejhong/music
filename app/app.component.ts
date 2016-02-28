import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MusicService }     from './music.service';
// import { DashboardComponent } from './dashboard.component';
import { TunerComponent } from './tuner.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Tuner']">Tuner</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        MusicService
    ]
})

@RouteConfig([
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: DashboardComponent,
    //     useAsDefault: true
    // },
    {
        path: '/tuner',
        name: 'Tuner',
        component: TunerComponent
    },
])

export class AppComponent {
    title = 'Music for all';
}
