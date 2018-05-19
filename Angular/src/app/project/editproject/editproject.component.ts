import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  constructor(private route: ActivatedRoute,private projectService: ProjectService,private router: Router) { }

  id = this.route.snapshot.paramMap.get('id')
  project;
  formData: FormGroup;
  ngOnInit() {
    this.formData=new FormGroup({
      Pname: new FormControl('',[]),
      StartDate: new FormControl('',[]),
      EndDate: new FormControl('',[]),
      Cname: new FormControl('',[])
    });
    this.loadProject();
  }

  loadProject(){
    this.projectService.loadProjects(this.id);
    this.projectService.project$.subscribe(
      data => {
        console.log(data);
        this.project = data;
        this.formData=new FormGroup({
          Pname: new FormControl(this.project.Pname,[Validators.required]),
          StartDate: new FormControl(this.project.StartDate,[Validators.required]), 
          EndDate: new FormControl(this.project.EndDate,[Validators.required]),
          Cname: new FormControl(this.project.Cname,[Validators.required])
        });
      }
    );
  }

  onClickSubmit(project){
    console.log(project);
    this.projectService.editProjects(project,this.id);
  }
}
