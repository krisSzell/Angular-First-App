import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class UsersService {

  usersUrl = 'http://jsonplaceholder.typicode.com/users/';

  headers = new Headers({
    'Content-Type': 'application/json'
  });
  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this.usersUrl)
      .map(response => response.json());
  }

  getUser(id) {
    return this._http.get(this.usersUrl + id)
      .map(res => res.json());
  }

  saveUser(user) {
    return this._http.post(this.usersUrl, JSON.stringify(user), this.options)
      .map(res => res.json());
  }

  updateUser(user, id) {
    return this._http.put(this.usersUrl + id, JSON.stringify(user), this.options)
      .map(res => res.json());
  }

  deleteUser(id) {
    return this._http.delete(this.usersUrl + id)
      .map(res => res.json());
  }
}
