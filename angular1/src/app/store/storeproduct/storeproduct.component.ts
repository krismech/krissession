import { Component, OnInit } from '@angular/core';
import {StoreProductService} from './src/app/store/storeproduct.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-loading-page',
  templateUrl: './product-loading-page.component.html',
  styleUrls: ['./product-loading-page.component.css']
})
export class StoreProductComponent implements OnInit {

  constructor(private plpservice:StoreProductService, private router:Router) {
  allData:any
  ngOnInit() {
    this.displayPLP()
  }
  }
  displayPLP(){
    this.plpservice.getDataMobile().subscribe((data)=>
    {
      console.log(data)
      this.allData = data
       console.log(this.allData)

    }
    );

  }
}

