import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.formData=new FormGroup({
      AssignedTo: new FormControl('',[Validators.required]),
      EndDate: new FormControl('',[Validators.required]),
      StartDate: new FormControl('',[Validators.required]),
      Completion: new FormControl('',[Validators.required]),
      UserStoryId: new FormControl('',[Validators.required])
    });
  }

  onClickSubmit(task){
    console.log(task);
    this.taskService.createTasks(task);
  }
}
