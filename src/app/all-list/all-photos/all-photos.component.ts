import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";
import {Photo} from "../../photo";

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  public photos: Photo[] = [];

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.userService.fetchPhotos()
      .subscribe(photo => this.photos = photo)
  }

  onChange(id: number) {
    this.userService.getActivePhotoId(id);
  }

  getIsActivated(id: number) {
    return !!this.userService.activePhotoId.find(photo => photo.id === id);
  }

}
