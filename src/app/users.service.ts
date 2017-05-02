import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('http://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }
}
