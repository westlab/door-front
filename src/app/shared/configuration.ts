import {Injectable} from 'angular2/core'

@Injectable
export class Configuration {
    public Host: string = 'http://localhost:2424'
    public ApiUrl: string = '/api'
    public ApiVersion: string = '/v1'
    public ApiEndpoint: string = this.Host + this.ApiUrl + this.ApiVersion
}