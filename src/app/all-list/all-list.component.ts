import {Component, OnInit} from '@angular/core';
import {UsersService} from "../shared/users.service";

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
  }

}
