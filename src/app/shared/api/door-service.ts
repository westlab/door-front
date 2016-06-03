import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from '../configuration';
import {ICount} from '../interfaces/count.interface';

@Injectable()
export class DoorService {
    private headers: Headers;

    constructor(private _http: Http, private _conf: Configuration) {
        console.log(this._conf);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public FetchRank = (kind: string): Observable<ICount[]> => {
        let uri: string = '/' + kind + '_rank';
        return this._http.get(this._conf.ApiEndpoint + uri).map(res => res.json());
    }

    public FetchWordRank = (): Observable<ICount[]> => {
        return this.FetchRank('word');
    }

    public FetchDomainRank = (): Observable<ICount[]> => {
        return this.FetchRank('domain');
    }

    public FetchIPRank = () : Observable<ICount[]> => {
        return this.FetchRank('ip');
    }

    public FetchWordCloud = () : Observable<Response> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', '10000');
        return this._http.get(this._conf.ApiEndpoint + '/word_rank', {search: params}).map(res => res.json());
    }

    public FetchBrowsing = (size: number) : Observable<Response> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', String(size));
        return this._http.get(this._conf.ApiEndpoint + '/browsings', {search: params}).map(res => res.json());
    }

    public SearchBrowsing = (q: string, size: number) : Observable<Response> => {
        let params: URLSearchParams = new URLSearchParams();
        params.set('size', String(size));
        return this._http.get(this._conf.ApiEndpoint + '/browsings', {search: params}).map(res => res.json());
    }
}
