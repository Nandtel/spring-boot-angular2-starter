import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component/app.component.html',
    styleUrls: ['app.component/app.component.css']
})
export class AppComponent {
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