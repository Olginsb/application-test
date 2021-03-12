import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-activated-photo',
  templateUrl: './activated-photo.component.html',
  styleUrls: ['./activated-photo.component.scss']
})
export class ActivatedPhotoComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
  }

}
