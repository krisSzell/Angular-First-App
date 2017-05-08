import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class PostsService {

  postsUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getPosts(userId?) {
    if (userId) {
      return this._http.get(this.postsUrl + '?userId=' + userId)
        .map(res => res.json());
    } else {
      return this._http.get(this.postsUrl)
        .map(res => res.json());
    }

  }

  getComments(postId) {
    return this._http.get(this.postsUrl + "/" + postId + '/comments')
      .map(res => res.json());
  }
}
