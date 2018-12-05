import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

modelForm:any

  constructor() { }

  ngOnInit() {

    this.modelForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      hobby: new FormControl(),

    })
  }
modelFormUser(user){
  console.log(user)

  }
}

