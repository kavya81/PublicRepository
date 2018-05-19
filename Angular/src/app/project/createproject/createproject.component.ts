import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  formData: FormGroup;
  project;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.formData=new FormGroup({
      Pname: new FormControl('',[Validators.required]),
      StartDate: new FormControl('',[Validators.required]),
      EndDate: new FormControl('',[Validators.required]),
      Cname: new FormControl('',[Validators.required])
    });
  }

  onClickSubmit(project){
    console.log(project);
    this.projectService.createProject(project);
  }
}
