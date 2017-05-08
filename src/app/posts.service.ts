import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class PostsService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) { }

  getPosts(filter?) {
    var url = this.postsUrl;

    if (filter && filter.userId)
      url += "?userId=" + filter.userId;

    return this._http.get(url)
      .map(res => res.json());

  }

  getComments(postId) {
    return this._http.get(this.postsUrl + '/' + postId + '/comments')
      .map(res => res.json());
  }
}
