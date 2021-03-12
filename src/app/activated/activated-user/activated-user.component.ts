import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-activated-user',
  templateUrl: './activated-user.component.html',
  styleUrls: ['./activated-user.component.scss']
})
export class ActivatedUserComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
  }

}
