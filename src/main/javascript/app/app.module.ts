import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component/app.component";
import {NotFoundComponent} from "./404.component/404.component";
import {ServerComponent} from "./server.component/server.component";
import {DashboardComponent} from "./dashboard.component/dashboard.component";


import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {JsonpModule, HttpModule} from "@angular/http";

const appRoutes: Routes = [
    {path: '',          redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'server',    component: ServerComponent,    data: {title: 'Server'}},
    {path: '404',       component: NotFoundComponent,  data: {title: 'Not Found'}},
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dash'}},
    {path: '**',        redirectTo: '/404'}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        DashboardComponent,
        ServerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}