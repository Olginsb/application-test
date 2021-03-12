import {Component, OnInit} from '@angular/core';
import {UsersService} from "../shared/users.service";

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.scss']
})
export class ActivatedComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
  }

}
