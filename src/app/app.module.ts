import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { AllUsersComponent } from './all-list/all-users/all-users.component';
import { AllPhotosComponent } from './all-list/all-photos/all-photos.component';
import { AllPostsComponent } from './all-list/all-posts/all-posts.component';
import { ActivatedComponent } from './activated/activated.component';
import { ActivatedPhotoComponent } from './activated/activated-photo/activated-photo.component';
import { ActivatedUserComponent } from './activated/activated-user/activated-user.component';
import { ActivatedPostsComponent } from './activated/activated-posts/activated-posts.component';
import { AllListComponent } from './all-list/all-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPhotosComponent,
    AllPostsComponent,
    ActivatedComponent,
    ActivatedPhotoComponent,
    ActivatedUserComponent,
    ActivatedPostsComponent,
    AllListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
