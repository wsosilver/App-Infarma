import { Empresa } from './../interface/empresa.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  empresa: Array<Empresa> = null;

  constructor(private http: HttpClient) { }
 
  public Dashboard() : any{
    let api = 'http://192.168.0.102:3000/empre';

    return this.http.get(api);
 }

 
}
