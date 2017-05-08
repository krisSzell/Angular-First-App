import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/posts.service';
import { UsersService } from 'app/users.service';
import { PaginationComponent } from 'app/pagination.component';

import 'rxjs/add/operator/map';
import { Post } from 'app/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  pagedPosts = [];
  users = [];
  selectedPost: Post;
  postsLoading = true;
  commentsLoading;
  pageSize = 10;

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

  onPageChanged(page) {
    this.pagedPosts = this.getPostsInPage(page);
  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this.selectedPost = null;
    this._postsService.getPosts(filter)
      .subscribe(posts => {
        this.posts = posts;
        this.pagedPosts = this.getPostsInPage(1);
      },
      null,
      () => { this.postsLoading = false; });
  }

  private loadUsers() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  private getPostsInPage(page) {
    var result = [];
    var startingIndex = (page - 1) * this.pageSize;
    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    for (var i = startingIndex; i < endIndex; i++) {
      result.push(this.posts[i]);
    }

    return result;
  }

}
