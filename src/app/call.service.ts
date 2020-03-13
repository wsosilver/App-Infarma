import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class UsersProvider {
   API_URL = 'https://localhost:3000/dashboard'
 
  constructor(public http: Http) { }
 
  getAll() {
    return new Promise((resolve, reject) => {

      this.http.get(this.API_URL)
        .subscribe((result: any) => {
          console.log(result)
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}