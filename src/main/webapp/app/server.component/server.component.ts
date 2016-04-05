import {Component, OnInit} from 'angular2/core';
import {NgIf} from 'angular2/common'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ServerService} from "../service/server.service";

@Component({
    selector: 'server',
    templateUrl: 'app/server.component/server.component.html',
    styleUrls: ['app/server.component/server.component.css'],
    providers: [ServerService, HTTP_PROVIDERS],
    directives: [NgIf]
})
export class ServerComponent implements OnInit {
    constructor(private serverService: ServerService) {}

    private number: number;
    private errorMessage: string;

    ngOnInit(): any {
        return this.serverService.getRandomNumber()
            .subscribe(number => this.number = number, error => this.errorMessage = <any>error);
    }
    
}