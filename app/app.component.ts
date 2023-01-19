import { Component } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactiveform';
  isAddTask = false;

  taskList: Task[]= [
    {
      taskName: "Washing",
      description: "Manually Wash The Cars.",
      assignedTo: "Juan Felipe"
      
    },
    {
      taskName: "Grooming",
      description: "Groom The Grass In The Lawn.",
      assignedTo: "Juan Pablo"
      
    },
    {
      taskName: "Srubbing",
      description: "ALways Scrub the Floor everyday.",
      assignedTo: "Juan Carlos"
      
    }
  ]

  addTask (task: Task){
    this.taskList.push(task);
    this.isAddTask = false;
  }

  addNewTask(){
    this.isAddTask = true;
  }

 


}
