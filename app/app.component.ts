import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MusicService }     from './music.service';

import { PianoComponent } from './piano.component';
import { ReflectionComponent } from './reflection.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Piano']">Piano</a>
        <a [routerLink]="['Reflection']">Reflection</a>
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
    {
        path: '/piano',
        name: 'Piano',
        component: PianoComponent,
    },
    {
        path: '/reflection',
        name: 'Reflection',
        component: ReflectionComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    title = 'Music for all';
}
