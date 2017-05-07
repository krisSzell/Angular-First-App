import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class PostsService {

  postsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get(this.postsUrl)
      .map(res => res.json());
  }
}
