import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

counter =0

oneTask=""

myTasks=[
'Go and get some lassi',
'Plan for a weekend',
'Identify some examples',
'Some more task...',
'Check calendar for meeting',
]
myCompletedTask=[
  
]
  constructor() { }

  ngOnInit() {
  }
sayHello=function(){
  ++this.counter
  console.log("Button clicked" + this.counter)
  this.myTasks.push(this.oneTask)
  this.oneTask =""
}
taskDone(ct){
  console.log("Index value: " +ct);
  this.myTasks.splice(ct,1)
}

}
