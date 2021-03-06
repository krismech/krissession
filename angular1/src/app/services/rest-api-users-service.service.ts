import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RestApiUsersServiceService {

  constructor(private http:HttpClient) { }

  getRemoteUsers(){
return this.http.get("http://localhost:3000/users")

  }
  createUser(user){

  return this.http.post("http://localhost:3000/users", user)
  }

  deleteUser(user){
  return this.http.delete("http://localhost:3000/users/" + user)
  }
  getOneUser(user){
  return this.http.get("http://localhost:3000/")
  
}
}
