import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit {

activePath:any
selectedUser:any
  constructor(private active:ActivatedRoute, private userService: RestApiUsersServiceService) { }

  ngOnInit() {

    this.activePath=this.active.snapshot.paramMap.get("myid")
    console.log(this.activePath);
    this.getUser(this.activePath)
  }

getUser(id){

  this.userService.getOneUser(id).subscribe((checknow)=>{
this.selectedUser=checknow
  })
}
}
