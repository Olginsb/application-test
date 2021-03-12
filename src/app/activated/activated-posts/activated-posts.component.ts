import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-activated-posts',
  templateUrl: './activated-posts.component.html',
  styleUrls: ['./activated-posts.component.scss']
})
export class ActivatedPostsComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
  }

}
