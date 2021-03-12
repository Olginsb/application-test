import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";
import {User} from "../../user";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  public users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.fetchUsers()
      .subscribe(user => this.users = user)
  }

  onChange(id: number) {
    this.userService.getActiveUserId(id);
  }

  getIsActivated(id: number) {
    return !!this.userService.activeUserId.find(photo => photo.id === id);

  }

}
