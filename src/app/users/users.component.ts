import { Component, OnInit } from '@angular/core';
import { WebservicesService } from '../services/webservices.service';
import { userList } from '../models/user.model';
import { PostList } from '../models/posts.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private webServices: WebservicesService){}
  ngOnInit(): void {
    this.getPost()
  }

  users?: userList;
  postList: any;

  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [5,10,15,20];

  getUsers(){
    this.webServices.getUsers().subscribe({
      next: (response) =>{
        
        this.users = response;
        console.log(this.users);
      }
    });
  }

  getPost(){
    this.webServices.getPosts().pipe(take(1)).subscribe({
      next: (response) =>{
        
        this.postList = response;
        console.log(this.postList);
      }
    });
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getPost();
  }

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPost();
  }
}
