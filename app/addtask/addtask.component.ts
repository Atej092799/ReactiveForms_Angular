import { Component, Output, EventEmitter} from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  @Output() taskOut = new EventEmitter();

  taskForm = new FormGroup({
    taskName: new FormControl(''),
    description: new FormControl(''),
    assignedTo: new FormControl('')
  })

  addTask(){
    this.taskOut.emit(this.taskForm.value)
  }

}
