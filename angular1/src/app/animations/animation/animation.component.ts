import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, animate, style}  from '@angular/animations'


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("growUpAnimation", [
            state("kid", style({color:'blue', transform:'scale(1)'})), 
            state("elder", style({color:'green', transform:'scale(4)'})),
            transition('kid <=> elder', animate('300ms ease-in'))
          ]),
          trigger("growUpAnimation1", [
            state("kid1", style({color:'red', transform:'scale(1)'})), 
            state("elder1", style({color:'purple', transform:'scale(4)'})),
            transition('kid1 <=> elder1', animate('1000ms ease-in'))
          ])
  ]

})
export class AnimationComponent implements OnInit {

  defaultState:String = 'kid'
defaultState1:String = 'kid1'
  constructor() { }

  ngOnInit() {
  }

  animateNow(){
    this.defaultState = this.defaultState == 'elder'?'kid':'elder'
    this.defaultState1 = this.defaultState1 == 'elder1'?'kid1':'elder1'
  }


}