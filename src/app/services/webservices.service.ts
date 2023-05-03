import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userList } from '../models/user.model';
import { PostList } from '../models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class WebservicesService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com/';
  private USERS = 'users';
  private POSTS = 'posts';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<userList> {
    return this.http.get<userList>(this.BASE_URL + this.USERS);
  }

  getPosts(): Observable<PostList> {
    return this.http.get<PostList>(this.BASE_URL + this.POSTS);
  }
}
