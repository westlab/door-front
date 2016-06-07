import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Configuration} from '../configuration';
import {ICount} from '../interfaces/count.interface';
import {Browsing} from '../models/browsing.model';

@Injectable()
export class DoorService {
    private headers: Headers;

    constructor(private _http: Http, private conf: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public FetchDomainRank = (): Observable<ICount[]> => {
        return this._http.get(this.createURL('/domain_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    public FetchIPRank = (): Observable<ICount[]> => {
        return this._http.get(this.createURL('/ip_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    public FetchWordRank = (): Observable<ICount[]> => {
        return this._http.get(this.createURL('/word_rank'), {
            headers: this.headers
        }).map(res => res.json());
    }

    public FetchWordCloud = () : Observable<Response[]> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', '10000');

        return this._http.get(this.createURL('/word_rank'), {
            search: params, headers: this.headers}
        ).map(res => res.json());
    }

    public FetchBrowsing = (size: number) : Observable<Browsing[]> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', String(size));
        return this._http.get(this.createURL('/browsings'), {
            search: params, headers: this.headers
        }).map(res => res.json());
    }

    public SearchBrowsing = (q: string, size: number) : Observable<Response[]> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', String(size));
        params.set('q', q);
        return this._http.get(this.createURL('/browsings'), {
            search: params,  headers: this.headers
        }).map(res => res.json());
    }

    private createURL(uri: string): string {
       return this.conf + uri;
    }
}
