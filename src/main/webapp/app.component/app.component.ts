import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from "../dashboard.component/dashboard.component";
import {NotFoundComponent} from "../404.component/404.component";
import {ServerComponent} from "../server.component/server.component";

@Component({
    selector: 'app',
    templateUrl: 'app.component/app.component.html',
    styleUrls: ['app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/',          redirectTo:['Dashboard']},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
])
export class AppComponent {}