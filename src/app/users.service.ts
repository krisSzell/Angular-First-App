import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('http://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

  saveUser(user) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this._http.post('http://jsonplaceholder.typicode.com/users', JSON.stringify(user), options)
      .map(res => res.json());
  }
}
