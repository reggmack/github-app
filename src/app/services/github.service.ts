import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class GithubService {
    private username: string;
    private client_id = '0f6ca847d699886ca898';
    private client_secret = '21c0462dc53c38ca9841f0a703f1b8c0ab5278b0';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'reggmack';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;

    }
}