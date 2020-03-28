import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
 
  public Dashboard() : any{
    let api = 'http://192.168.0.105:3000/empre';

    return this.http.get(api);
 }

 public topVendedores() : any{
  let api = 'http://192.168.0.105:3000/top_vendedores';

  return this.http.get(api);
}

public rentabilidade() : any{
  let api = 'http://192.168.0.105:3000/rentabilidade';

  return this.http.get(api);
}
 
}
