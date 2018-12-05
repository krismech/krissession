import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {


allUsers:any

  constructor(private userService:RestApiUsersServiceService) { }

  ngOnInit() {
    this.getAPIData()
  }
getAPIData(){

  this.userService.getRemoteUsers().subscribe((data)=>{
    console.log(data)
  this.allUsers=data
  console.log(this.allUsers)

})
}
}
