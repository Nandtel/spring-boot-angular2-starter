import {Component} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component/dashboard.component.html',
    styleUrls: ['app/dashboard.component/dashboard.component.css'],
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