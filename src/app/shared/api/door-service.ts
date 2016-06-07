import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DomainCount} from '../models/domain-count.model';
import {ICount} from '../interfaces/count.interface';

@Injectable()
export class DoorService {
    private headers: Headers;

    constructor(private _http: Http) {
        console.log('construcotr in Door Service');
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public FetchDomainRank = (): Observable<DomainCount[]> => {
        return this._http.get('http://localhost:2424/api/v1/domain_rank')
                .map(res => res.json());
    }

    public FetchWordRank = (): Observable<ICount[]> => {
        return this._http.get('http://localhost:2424/api/v1/word_rank')
            .map(res => res.json());
    }
}
