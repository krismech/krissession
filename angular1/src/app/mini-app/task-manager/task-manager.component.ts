import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

counter =0

oneTask=""

myTasks:any=[
'Go and get some lassi',
'Plan for a weekend',
'Identify some examples',
'Some more task...',
'Check calendar for meeting',
]
myCompletedTasks:any=[]
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
  //loc=currentTask
  this.myCompletedTasks.push(this.myTasks[ct])
     this.myTasks.splice(ct, 1)
}

}
