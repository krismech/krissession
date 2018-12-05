import { Router } from '@angular/router';
import { AutoSearchPipePipe } from './../../myPipes/auto-search-pipe.pipe';
import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {


allUsers:any
searchStrign:any 

  constructor(private userService:RestApiUsersServiceService ,private router:Router ) {

    
   }

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
user={
"name": "Kris",
"email": "kris.mecha2007@gmail.com",
"address": {
  "geo":{
    "lat":"88.88",
    "lng" : "88.88"
    }
  }
}

postUser(){
this.userService.createUser(this.user).subscribe((response) =>{
  console.log(response)
   this.userService.getRemoteUsers().subscribe((response)=>{
    console.log(response)
  this.allUsers=response
  console.log(this.allUsers)
   })
})

}
  deleteUser(a){
this.userService.deleteUser(a).subscribe((response1) =>{
  console.log(response1)
   this.userService.getRemoteUsers().subscribe((response1)=>{
  this.allUsers=response1
   })
})
}
viewDetail(id){
console.log(id)
this.router.navigate(["/remoteDate", id])

}
}
