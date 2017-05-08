import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/posts.service';
import { UsersService } from 'app/users.service';

import 'rxjs/add/operator/map';
import { Post } from 'app/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  users = [];
  selectedPost: Post;
  postsLoading = true;
  commentsLoading;

  constructor(private _postsService: PostsService, private _usersService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  selectPost(post: Post) {
    this.commentsLoading = true;
    this.selectedPost = post;
    this._postsService.getComments(post.id)
      .subscribe(comments => this.selectedPost.comments = comments,
      null,
      () => { this.commentsLoading = false; });
  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this.selectedPost = null;
    this._postsService.getPosts(filter)
      .subscribe(posts => this.posts = posts,
      null,
      () => { this.postsLoading = false; });
  }

  private loadUsers() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }


}
