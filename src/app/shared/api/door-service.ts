import { Injectable } from 'angular2/core'
import { Http, Response, Headers } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
import { Configuration } from '../configuration'
import {URLSearchParams} from "@angular/http";

@Injectable()
export class DoorService {
    private headers: Headers;

    constructor(private _http: Http, private _conf: Configuration){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public FetchRank = (kind: string): Observable<Response> => {
        let uri: string = '/' + kind + '_rank';
        return this._http.get(this._conf.ApiEndpoint + uri).map(res => res.json());
    }

    public FetchWordRank = (): Observable<Response> => {
        return this.FetchRank('word');
    }

    public FetchDomainRank = (): Observable<Response> => {
        return this.FetchRank('domain');
    }

    public FetchIPRank = () : Observable<Response> => {
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
        return
    }

    public SearchBrowsing = (q: string, size: number) : Observable => {
        let params: URLSearchParams = new URLSearchParams();

    }
}
