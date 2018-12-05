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
}