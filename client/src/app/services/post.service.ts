import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {Post} from '../models/post';
import {global} from './global';

@Injectable() export class PostService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }
    
    savePost(post:Post):Observable<any>{

        let params = JSON.stringify(post);
        let headers = new HttpHeaders().set("Content-Type","application/json");
        return this._http.post(this.url+'new-post',params,{headers: headers});
    }

    getPosts():Observable<any>{

        let headers = new HttpHeaders().set("Content-Type","application/json");
        return this._http.get(this.url+'posts',{headers: headers});
    } 
}

