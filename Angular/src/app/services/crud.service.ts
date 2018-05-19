import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  Read(path){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const httpOPtions = {headers:headers};
    return this.http.get(path,httpOPtions );
  }

  Create(path,object){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const httpOPtions = {headers:headers};
    return this.http.post(path,object,httpOPtions );
  }

  Update(path,object){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const httpOPtions = {headers:headers};
    return this.http.put(path,object,httpOPtions );
  }

  Delete(path){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const httpOPtions = {headers:headers};
    return this.http.delete(path,httpOPtions );
  }

}
