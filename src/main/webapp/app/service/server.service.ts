import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    private Server = {
        GETRandomNumber: '/get-random-number'
    };

    getRandomNumber() {
        return this.http.get(this.Server.GETRandomNumber)
            .map(res => <number> res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'))
    }

}