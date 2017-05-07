import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/posts.service';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  isLoading = true;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getPosts()
      .subscribe(posts => this.posts = posts,
      null,
      () => { this.isLoading = false; });

  }

}
