import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  constructor(private taskService: TasksService,private router: Router,private route:ActivatedRoute) { }

  id = this.route.snapshot.paramMap.get('id')
  task;
  formData:FormGroup;
  ngOnInit() {
    this.formData=new FormGroup({
      AssignedTo: new FormControl('',[]),
      EndDate: new FormControl('',[]),
      StartDate: new FormControl('',[]),
      Completion: new FormControl('',[]),
      UserStoryId: new FormControl('',[])
    });
    this.loadTask();
  }


  loadTask(){
    this.taskService.loadTasks(this.id);
    this.taskService.task$.subscribe(
      data => {
        console.log(data);
        this.task = data;
        this.formData=new FormGroup({
          AssignedTo: new FormControl(this.task.AssignedTo,[]),
          EndDate: new FormControl(this.task.EndDate,[]),
          StartDate: new FormControl(this.task.StartDate,[]),
          Completion: new FormControl(this.task.Completion,[]),
          UserStoryId: new FormControl(this.task.UserStoryId,[])
        });
      }
    );
  }

  onClickSubmit(task){
    console.log(task);
    this.taskService.deleteTasks(this.id);
  }
}
