import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Photo} from "../photo";
import {User} from "../user";
import {Post} from "../post";

@Injectable({providedIn: 'root'})
export class UsersService {
  public photos: Photo[] = [];
  public users: User[] = [];
  public posts: Post[] = [];
  public activePhotoId: Photo[] = [];
  public activeUserId: User[] = [];
  public activePostId: Post[] = [];


  constructor(private http: HttpClient) {
  }

  fetchPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .pipe(tap(data => this.photos = data))
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
      .pipe(tap(data => this.users = data))
  }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .pipe(tap(data => this.posts = data))
  }

  getActivePhotoId(id: number) {
    const val = this.photos.find(photo => photo.id === id);
    if (val) {
      this.activePhotoId.push(val);
    }
  }

  getActiveUserId(id: number) {
    const val = this.users.find(user => user.id === id);
    if (val) {
      this.activeUserId.push(val);
    }
  }

  getActivePostId(id: number) {
    const val = this.posts.find(post => post.id === id);
    if (val) {
      this.activePostId.push(val);
    }
  }

}
