import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DomainCount} from '../models/domain-count.model';
import {Configuration} from '../configuration';

@Injectable()
export class DoorService {
    private headers: Headers;

    constructor(private _http: Http, private conf: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public FetchDomainRank = (): Observable<DomainCount[]> => {
        return this._http.get(this.createURL('/domain_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    public FetchIPRank = (): Observable<DomainCount[]> => {
        return this._http.get(this.createURL('/ip_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    public FetchWordRank = (): Observable<DomainCount[]> => {
        return this._http.get(this.createURL('/word_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    private createURL(uri: string): string{
       return this.conf + uri;
    }
}
