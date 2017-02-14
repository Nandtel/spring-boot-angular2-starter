import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ServerService} from "../service/server.service";

@Component({
    selector: 'server',
    templateUrl: 'app/server.component/server.component.html',
    styleUrls: ['app/server.component/server.component.css'],
    providers: [ServerService, HttpModule]
})
export class ServerComponent implements OnInit {
    constructor(private serverService: ServerService) {}

    private number: number;
    private errorMessage: string;

    ngOnInit() {
        return this.serverService.getRandomNumber()
            .subscribe(number => this.number = number, error => this.errorMessage = <any>error);
    }
    
}