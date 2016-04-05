import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component/dashboard.component.html',
    styleUrls: ['dashboard.component/dashboard.component.css'],
})
export class DashboardComponent {
    name: string = 'World';
    names: Array<string> = [];

    onKeyUp(value: string): void {
        if(value.length === 0)
            this.name = 'World';
        else
            this.name = value;
    }

    onKyUpEnter(value: string): void {
        if(value.length !== 0)
            this.names.push(value);
    }
}