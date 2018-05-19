import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  tasks;
  ngOnInit() {
    this.taskService.tasks$.subscribe(
      data => {
        this.tasks=data;
        console.log(data);
      }
    );
  
    this.taskService.ErrorResponsee$.subscribe(
      message => {
        console.log(message);
        alert(message)
      }
    );  
    this.taskService.getAllTasks();
  }
}
