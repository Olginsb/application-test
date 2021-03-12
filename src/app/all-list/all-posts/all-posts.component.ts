import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";
import {Post} from "../../post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  public posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.userService.fetchPosts()
      .subscribe(post => this.posts = post)
  }

  onChange(id: number) {
    this.userService.getActivePostId(id);
  }

  getIsActivated(id: number) {
    return !!this.userService.activePostId.find(photo => photo.id === id);

  }

}
